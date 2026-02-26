#!/usr/bin/env node

/**
 * Birne Design System - Paper.design Sync Script
 *
 * Synchronizuje design tokeny do Paper.design cez MCP (Streamable HTTP).
 * Paper Desktop musi byt spusteny s otvorenym suborom.
 *
 * Usage: node scripts/sync-to-paper.js
 *        npm run sync:paper
 */

const PAPER_MCP_URL = 'http://127.0.0.1:29979/mcp';

// ============================================
// Token Definitions (zhodne s build-tokens.js)
// ============================================

const colors = {
  birneBlack: {
    100: '#221924', 80: '#4A4349', 60: '#76707A', 40: '#A09BA3',
    20: '#CCC9CD', 10: '#E1DFE2', 5: '#F0EFF0', 2: '#F8F7F8',
  },
  birnePurple: {
    100: '#DCB1E6', 80: '#E4C4EC', 60: '#ECD7F2', 40: '#F2E5F6', 20: '#F8F2FA',
  },
  birneDarkPurple: {
    100: '#B982C6', 80: '#CAA1D4', 60: '#DBC0E2',
  },
  birneLemon: {
    100: '#FAFD70', 80: '#FBFE8D', 60: '#FCFEA9', 40: '#FDFEC6', 20: '#FEFEE3',
  },
  birneSand: {
    140: '#D6D4C6', 120: '#DDDBC9', 100: '#E4E2D7', 80: '#EBE9E0',
    60: '#EFEEE6', 40: '#F4F3ED', 20: '#F9F9F6',
  },
  birneGrapefruit: {
    100: '#FF5C1F', 80: '#FF7D4C', 60: '#FF9E79', 40: '#FFBFA6', 20: '#FFE0D3',
  },
};

const typography = {
  fontSize: {
    xs: '11px', sm: '13px', base: '15px', md: '17px', lg: '19px',
    xl: '21px', '2xl': '28px', '3xl': '34px', '4xl': '48px', '5xl': '60px',
  },
};

const spacing = {
  xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px',
  '2xl': '32px', '3xl': '48px', '4xl': '64px', '5xl': '96px',
};

const borderRadius = {
  '2xs': '4px', xs: '6px', sm: '8px', md: '10px', lg: '12px',
  xl: '16px', '2xl': '20px', '3xl': '24px', full: '9999px',
};

// ============================================
// Inline style helpers (Paper nepodporuje <style> bloky)
// ============================================

const S = {
  sectionTitle: 'font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#A09BA3;',
  groupName: 'font-size:21px;color:#221924;',
  mono9: 'font-family:monospace;font-size:9px;color:#A09BA3;',
  mono10: 'font-family:monospace;font-size:10px;color:#A09BA3;',
  mono10dark: 'font-family:monospace;font-size:10px;color:#221924;',
  label13: 'font-size:13px;font-weight:500;color:#221924;',
};

// ============================================
// MCP Client
// ============================================

let requestId = 0;

async function mcpRequest(method, params = {}) {
  requestId++;
  const body = {
    jsonrpc: '2.0',
    id: requestId,
    method,
    params,
  };

  const response = await fetch(PAPER_MCP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json, text/event-stream' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Paper MCP error: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get('content-type') || '';
  let result;

  if (contentType.includes('text/event-stream')) {
    const text = await response.text();
    const dataLine = text.split('\n').find(line => line.startsWith('data: '));
    if (!dataLine) {
      throw new Error('No data in SSE response');
    }
    result = JSON.parse(dataLine.slice(6));
  } else {
    result = await response.json();
  }

  if (result.error) {
    throw new Error(`MCP error: ${result.error.message || JSON.stringify(result.error)}`);
  }

  return result.result;
}

async function callTool(name, args = {}) {
  return mcpRequest('tools/call', { name, arguments: args });
}

async function listTools() {
  return mcpRequest('tools/list');
}

// ============================================
// HTML Generators (pure inline styles for Paper)
// ============================================

function generateColorsHTML() {
  const colorGroups = [
    { name: 'Birne Black', key: 'birneBlack', scale: colors.birneBlack },
    { name: 'Birne Purple', key: 'birnePurple', scale: colors.birnePurple },
    { name: 'Birne Dark Purple', key: 'birneDarkPurple', scale: colors.birneDarkPurple },
    { name: 'Birne Lemon', key: 'birneLemon', scale: colors.birneLemon },
    { name: 'Birne Sand', key: 'birneSand', scale: colors.birneSand },
    { name: 'Birne Grapefruit', key: 'birneGrapefruit', scale: colors.birneGrapefruit },
  ];

  let html = `<div style="display:flex;flex-direction:column;gap:24px;padding:48px;width:1100px;">`;
  html += `<p style="${S.sectionTitle}">Design Tokens / Colors</p>`;

  for (const group of colorGroups) {
    html += `<p style="${S.groupName}">${group.name}</p>`;
    html += `<div style="display:flex;gap:8px;margin-bottom:8px;">`;
    const keys = Object.keys(group.scale).sort((a, b) => Number(b) - Number(a));
    for (const key of keys) {
      const hex = group.scale[key];
      html += `<div style="width:80px;text-align:center;">`;
      html += `<div style="width:80px;height:56px;border-radius:8px;background:${hex};"></div>`;
      html += `<p style="${S.mono9}margin-top:4px;">${group.key}.${key}</p>`;
      html += `<p style="${S.mono10dark}margin-top:2px;">${hex}</p>`;
      html += `</div>`;
    }
    html += `</div>`;
  }

  // Text colors
  html += `<p style="${S.groupName}">Text Colors</p>`;
  html += `<div style="display:flex;gap:8px;">`;
  const textColors = [
    { label: 'heading', hex: '#221924' },
    { label: 'body', hex: '#514A53' },
    { label: 'caption', hex: '#A09BA3' },
    { label: 'muted', hex: '#C2BFC3' },
  ];
  for (const tc of textColors) {
    html += `<div style="width:80px;text-align:center;">`;
    html += `<div style="width:80px;height:56px;border-radius:8px;background:${tc.hex};"></div>`;
    html += `<p style="${S.mono9}margin-top:4px;">${tc.label}</p>`;
    html += `<p style="${S.mono10dark}margin-top:2px;">${tc.hex}</p>`;
    html += `</div>`;
  }
  html += `</div></div>`;

  return html;
}

function generateTypographyHTML() {
  const textStyles = [
    { name: 'Display / h1', size: '48px', lh: '56px', weight: '400', sample: 'Birne Studio' },
    { name: 'Heading / h2', size: '34px', lh: '40px', weight: '400', sample: 'Heading Level 2' },
    { name: 'Heading / h3', size: '28px', lh: '34px', weight: '400', sample: 'Heading Level 3' },
    { name: 'Heading / h4', size: '21px', lh: '28px', weight: '500', sample: 'Heading Level 4' },
    { name: 'Body / lg', size: '17px', lh: '25px', weight: '400', sample: 'Body text large. Dizajn, ktory funguje.' },
    { name: 'Body / base', size: '15px', lh: '22px', weight: '400', sample: 'Body text base. Dizajn, ktory funguje.' },
    { name: 'Body / sm', size: '13px', lh: '18px', weight: '400', sample: 'Body text small. Dizajn, ktory funguje.' },
    { name: 'Label', size: '13px', lh: '18px', weight: '500', sample: 'LABEL TEXT' },
    { name: 'Caption', size: '11px', lh: '16px', weight: '400', sample: 'Caption text, muted info' },
    { name: 'Eyebrow', size: '11px', lh: '14px', weight: '500', sample: 'OVERLINE TEXT', transform: 'uppercase', spacing: '0.08em' },
  ];

  let html = `<div style="display:flex;flex-direction:column;gap:0px;padding:48px;width:900px;">`;
  html += `<p style="${S.sectionTitle}margin-bottom:24px;">Design Tokens / Typography</p>`;

  for (const style of textStyles) {
    const transform = style.transform ? `text-transform:${style.transform};` : '';
    const spacing = style.spacing ? `letter-spacing:${style.spacing};` : '';
    html += `<div style="display:flex;align-items:baseline;gap:24px;padding:16px 0;border-bottom:1px solid #E1DFE2;">`;
    html += `<div style="width:160px;flex-shrink:0;">`;
    html += `<p style="${S.label13}margin-bottom:4px;">${style.name}</p>`;
    html += `<p style="${S.mono10}">${style.weight} / ${style.size} / ${style.lh}</p>`;
    html += `</div>`;
    html += `<div style="flex:1;color:#221924;font-size:${style.size};line-height:${style.lh};font-weight:${style.weight};${transform}${spacing}">`;
    html += style.sample;
    html += `</div></div>`;
  }

  // Font size scale
  html += `<div style="margin-top:32px;">`;
  html += `<p style="${S.sectionTitle}margin-bottom:16px;">Font Size Scale</p>`;
  html += `<div style="display:flex;gap:16px;flex-wrap:wrap;">`;
  for (const [key, size] of Object.entries(typography.fontSize)) {
    html += `<div style="text-align:center;min-width:60px;">`;
    html += `<div style="font-size:${size};line-height:1.2;color:#221924;">Aa</div>`;
    html += `<p style="${S.mono9}margin-top:4px;">${key} / ${size}</p>`;
    html += `</div>`;
  }
  html += `</div></div></div>`;

  return html;
}

function generateSpacingHTML() {
  let html = `<div style="display:flex;flex-direction:column;gap:0px;padding:48px;width:600px;">`;
  html += `<p style="${S.sectionTitle}margin-bottom:24px;">Design Tokens / Spacing &amp; Borders</p>`;

  html += `<p style="${S.groupName}margin-bottom:16px;">Spacing Scale</p>`;
  for (const [key, value] of Object.entries(spacing)) {
    const px = parseInt(value);
    html += `<div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;">`;
    html += `<span style="${S.mono10}width:40px;text-align:right;">${key}</span>`;
    html += `<div style="height:24px;width:${px}px;background:#DCB1E6;border-radius:4px;"></div>`;
    html += `<span style="${S.mono10dark}">${value}</span>`;
    html += `</div>`;
  }

  html += `<p style="${S.groupName}margin-top:32px;margin-bottom:16px;">Border Radius</p>`;
  html += `<div style="display:flex;gap:12px;flex-wrap:wrap;">`;
  for (const [key, value] of Object.entries(borderRadius)) {
    const radius = value === '9999px' ? '28px' : value;
    html += `<div style="text-align:center;">`;
    html += `<div style="width:56px;height:56px;background:#F8F7F8;border:1px solid #E1DFE2;border-radius:${radius};"></div>`;
    html += `<p style="${S.mono9}margin-top:4px;">${key}</p>`;
    html += `<p style="${S.mono9}">${value}</p>`;
    html += `</div>`;
  }
  html += `</div></div>`;

  return html;
}

// ============================================
// Main Sync Function
// ============================================

async function sync() {
  console.log('🎨 Birne Design System → Paper.design sync\n');

  // 1. Test connection
  console.log('  📡 Connecting to Paper MCP...');
  try {
    const initResult = await mcpRequest('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'birne-design-system', version: '1.0.0' },
    });
    console.log('  ✅ Connected to Paper MCP');
    console.log(`     Server: ${initResult?.serverInfo?.name || 'Paper'} v${initResult?.serverInfo?.version || '?'}\n`);
  } catch (err) {
    console.error('  ❌ Cannot connect to Paper MCP.');
    console.error('     Make sure Paper Desktop is running with a file open.');
    console.error(`     Error: ${err.message}\n`);
    process.exit(1);
  }

  // 2. List available tools
  console.log('  🔧 Checking available tools...');
  try {
    const tools = await listTools();
    const toolNames = (tools?.tools || []).map(t => t.name);
    console.log(`     Available: ${toolNames.join(', ')}\n`);
  } catch (err) {
    console.warn(`  ⚠️  Could not list tools: ${err.message}`);
    console.warn('     Proceeding anyway...\n');
  }

  // 3. Create artboards with token visualizations
  const artboards = [
    { name: 'Colors', html: generateColorsHTML(), width: 1200 },
    { name: 'Typography', html: generateTypographyHTML(), width: 1000 },
    { name: 'Spacing & Borders', html: generateSpacingHTML(), width: 700 },
  ];

  // Get existing artboards
  const basicInfo = await callTool('get_basic_info', {});
  const basicData = JSON.parse(basicInfo?.content?.[0]?.text || '{}');
  const existingArtboards = basicData.artboards || [];

  const contentFrameIds = [];

  for (const artboard of artboards) {
    const fullName = `Birne Tokens / ${artboard.name}`;
    console.log(`  📄 Syncing "${artboard.name}"...`);
    try {
      let existing = existingArtboards.find(a => a.name === fullName);
      let targetId;

      if (existing) {
        targetId = existing.id;
        // Delete existing children to reset content
        const children = await callTool('get_children', { nodeId: targetId });
        const childData = JSON.parse(children?.content?.[0]?.text || '{}');
        const childIds = (childData.children || []).map(c => c.id);
        if (childIds.length > 0) {
          await callTool('delete_nodes', { nodeIds: childIds });
        }
        console.log(`     Found existing artboard (${targetId}), cleared content`);
      } else {
        const created = await callTool('create_artboard', {
          name: fullName,
          width: artboard.width,
          height: 400,
        });
        const createdData = JSON.parse(created?.content?.[0]?.text || '{}');
        targetId = createdData.id;
        console.log(`     Created new artboard (${targetId})`);
      }

      // Write HTML content into the artboard
      const written = await callTool('write_html', {
        targetNodeId: targetId,
        mode: 'insert-children',
        html: artboard.html,
      });
      const writtenData = JSON.parse(written?.content?.[0]?.text || '{}');
      const contentId = writtenData.createdNodes?.[0]?.id;
      if (contentId) {
        contentFrameIds.push(contentId);
      }
      console.log(`     ✅ "${artboard.name}" synced`);
    } catch (err) {
      console.error(`     ❌ Failed to sync "${artboard.name}": ${err.message}`);
    }
  }

  // Resize content frames and artboards to fit content
  if (contentFrameIds.length > 0) {
    console.log('\n  📐 Adjusting sizes...');
    // Position content frames at top-left and fill width
    await callTool('update_styles', {
      updates: [{ nodeIds: contentFrameIds, styles: { top: '0px', left: '0px', width: 'fill', height: 'fit-content' } }],
    });
    // Get updated artboard info to read actual content heights
    const updatedInfo = await callTool('get_basic_info', {});
    const updatedData = JSON.parse(updatedInfo?.content?.[0]?.text || '{}');
    for (const ab of updatedData.artboards || []) {
      // Get the content frame inside each artboard
      const children = await callTool('get_children', { nodeId: ab.id });
      const childData = JSON.parse(children?.content?.[0]?.text || '{}');
      if (childData.children?.length > 0) {
        const child = childData.children[0];
        const nodeInfo = await callTool('get_node_info', { nodeId: child.id });
        const nodeData = JSON.parse(nodeInfo?.content?.[0]?.text || '{}');
        const contentHeight = nodeData.height || nodeData.h;
        if (contentHeight) {
          // Resize artboard to match content height + small margin
          await callTool('update_styles', {
            updates: [{ nodeIds: [ab.id], styles: { height: `${Math.ceil(contentHeight) + 32}px` } }],
          });
          console.log(`     ${ab.name}: ${Math.ceil(contentHeight) + 32}px`);
        }
      }
    }
  }

  // Finish working
  try {
    await callTool('finish_working_on_nodes', {});
  } catch {}

  console.log('\n✅ Sync complete!');
  console.log('   Open Paper Desktop to see the updated token reference.\n');
}

// ============================================
// Run
// ============================================

sync().catch(err => {
  console.error(`\n❌ Sync failed: ${err.message}`);
  process.exit(1);
});
