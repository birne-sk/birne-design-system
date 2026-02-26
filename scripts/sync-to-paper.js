#!/usr/bin/env node

/**
 * Birne Design System - Paper.design Sync Script
 *
 * Synchronizuje design tokeny do Paper.design cez MCP (JSON-RPC over HTTP).
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
  fontFamily: {
    display: "'Conforto', serif",
    text: "'General Sans', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontSize: {
    xs: '11px', sm: '13px', base: '15px', md: '17px', lg: '19px',
    xl: '21px', '2xl': '28px', '3xl': '34px', '4xl': '48px', '5xl': '60px',
  },
  lineHeight: {
    xs: '16px', sm: '18px', base: '22px', md: '24px', lg: '26px',
    xl: '28px', '2xl': '34px', '3xl': '40px', '4xl': '56px', '5xl': '68px',
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

const SUPABASE_FONT_BASE = 'https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty';

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
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Paper MCP error: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();

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
// HTML Generators pre Paper artboardy
// ============================================

function fontFaceCSS() {
  return `
    @font-face { font-family: 'Conforto'; src: url('${SUPABASE_FONT_BASE}/Conforto-Regular.otf') format('opentype'); font-weight: 400; }
    @font-face { font-family: 'Conforto'; src: url('${SUPABASE_FONT_BASE}/Conforto-Medium.otf') format('opentype'); font-weight: 500; }
    @font-face { font-family: 'General Sans'; src: url('${SUPABASE_FONT_BASE}/GeneralSans-Regular.otf') format('opentype'); font-weight: 400; }
    @font-face { font-family: 'General Sans'; src: url('${SUPABASE_FONT_BASE}/GeneralSans-Medium.otf') format('opentype'); font-weight: 500; }
    @font-face { font-family: 'JetBrains Mono'; src: url('${SUPABASE_FONT_BASE}/JetBrainsMono-VariableFont_wght.ttf') format('truetype'); font-weight: 100 800; }
  `;
}

function generateColorsHTML() {
  const colorGroups = [
    { name: 'Birne Black', key: 'birneBlack', scale: colors.birneBlack },
    { name: 'Birne Purple', key: 'birnePurple', scale: colors.birnePurple },
    { name: 'Birne Dark Purple', key: 'birneDarkPurple', scale: colors.birneDarkPurple },
    { name: 'Birne Lemon', key: 'birneLemon', scale: colors.birneLemon },
    { name: 'Birne Sand', key: 'birneSand', scale: colors.birneSand },
    { name: 'Birne Grapefruit', key: 'birneGrapefruit', scale: colors.birneGrapefruit },
  ];

  let html = `<style>${fontFaceCSS()}
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'General Sans', sans-serif; padding: 48px; background: #FFFFFF; }
    .section-title { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #A09BA3; margin-bottom: 16px; }
    .group-name { font-family: 'Conforto', serif; font-size: 21px; color: #221924; margin-bottom: 12px; }
    .color-row { display: flex; gap: 8px; margin-bottom: 24px; }
    .color-swatch { width: 80px; text-align: center; }
    .swatch-box { width: 80px; height: 56px; border-radius: 8px; margin-bottom: 6px; border: 1px solid rgba(0,0,0,0.06); }
    .swatch-label { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #A09BA3; }
    .swatch-hex { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #221924; margin-top: 2px; }
  </style>
  <div>
    <p class="section-title">Design Tokens / Colors</p>
  `;

  for (const group of colorGroups) {
    html += `<p class="group-name">${group.name}</p><div class="color-row">`;
    const keys = Object.keys(group.scale).sort((a, b) => Number(b) - Number(a));
    for (const key of keys) {
      const hex = group.scale[key];
      html += `
        <div class="color-swatch">
          <div class="swatch-box" style="background: ${hex};"></div>
          <p class="swatch-label">${group.key}.${key}</p>
          <p class="swatch-hex">${hex}</p>
        </div>`;
    }
    html += `</div>`;
  }

  // Textove a semanticke farby
  html += `
    <p class="group-name">Text Colors</p>
    <div class="color-row">
      <div class="color-swatch"><div class="swatch-box" style="background: #221924;"></div><p class="swatch-label">heading</p><p class="swatch-hex">#221924</p></div>
      <div class="color-swatch"><div class="swatch-box" style="background: #514A53;"></div><p class="swatch-label">body</p><p class="swatch-hex">#514A53</p></div>
      <div class="color-swatch"><div class="swatch-box" style="background: #A09BA3;"></div><p class="swatch-label">caption</p><p class="swatch-hex">#A09BA3</p></div>
      <div class="color-swatch"><div class="swatch-box" style="background: #C2BFC3;"></div><p class="swatch-label">muted</p><p class="swatch-hex">#C2BFC3</p></div>
    </div>
  </div>`;

  return html;
}

function generateTypographyHTML() {
  const textStyles = [
    { name: 'Display / h1', family: 'Conforto', size: '48px', lineHeight: '56px', weight: '400', sample: 'Birne Studio' },
    { name: 'Heading / h2', family: 'Conforto', size: '34px', lineHeight: '40px', weight: '400', sample: 'Heading Level 2' },
    { name: 'Heading / h3', family: 'Conforto', size: '28px', lineHeight: '34px', weight: '400', sample: 'Heading Level 3' },
    { name: 'Heading / h4', family: 'Conforto', size: '21px', lineHeight: '28px', weight: '500', sample: 'Heading Level 4' },
    { name: 'Body / lg', family: 'General Sans', size: '17px', lineHeight: '25px', weight: '400', sample: 'Body text large. Dizajn, ktory funguje.' },
    { name: 'Body / base', family: 'General Sans', size: '15px', lineHeight: '22px', weight: '400', sample: 'Body text base. Dizajn, ktory funguje.' },
    { name: 'Body / sm', family: 'General Sans', size: '13px', lineHeight: '18px', weight: '400', sample: 'Body text small. Dizajn, ktory funguje.' },
    { name: 'Label', family: 'General Sans', size: '13px', lineHeight: '18px', weight: '500', sample: 'LABEL TEXT' },
    { name: 'Caption', family: 'General Sans', size: '11px', lineHeight: '16px', weight: '400', sample: 'Caption text, muted info' },
    { name: 'Eyebrow', family: 'JetBrains Mono', size: '11px', lineHeight: '14px', weight: '500', sample: 'OVERLINE TEXT', transform: 'uppercase', spacing: '0.08em' },
  ];

  let html = `<style>${fontFaceCSS()}
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'General Sans', sans-serif; padding: 48px; background: #FFFFFF; }
    .section-title { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #A09BA3; margin-bottom: 24px; }
    .type-row { display: flex; align-items: baseline; gap: 24px; padding: 16px 0; border-bottom: 1px solid #E1DFE2; }
    .type-meta { width: 160px; flex-shrink: 0; }
    .type-name { font-size: 13px; font-weight: 500; color: #221924; margin-bottom: 4px; }
    .type-specs { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #A09BA3; }
    .type-sample { flex: 1; color: #221924; }
  </style>
  <div>
    <p class="section-title">Design Tokens / Typography</p>
  `;

  for (const style of textStyles) {
    const transform = style.transform ? `text-transform: ${style.transform};` : '';
    const spacing = style.spacing ? `letter-spacing: ${style.spacing};` : '';
    html += `
    <div class="type-row">
      <div class="type-meta">
        <p class="type-name">${style.name}</p>
        <p class="type-specs">${style.family.split(',')[0].replace(/'/g, '')} ${style.weight}<br>${style.size} / ${style.lineHeight}</p>
      </div>
      <div class="type-sample" style="font-family: ${style.family}; font-size: ${style.size}; line-height: ${style.lineHeight}; font-weight: ${style.weight}; ${transform} ${spacing}">
        ${style.sample}
      </div>
    </div>`;
  }

  // Font size scale
  html += `
    <div style="margin-top: 32px;">
      <p class="section-title">Font Size Scale</p>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">`;

  for (const [key, size] of Object.entries(typography.fontSize)) {
    html += `
        <div style="text-align: center; min-width: 60px;">
          <div style="font-family: 'General Sans', sans-serif; font-size: ${size}; line-height: 1.2; color: #221924;">Aa</div>
          <p style="font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #A09BA3; margin-top: 4px;">${key} / ${size}</p>
        </div>`;
  }

  html += `</div></div></div>`;
  return html;
}

function generateSpacingHTML() {
  let html = `<style>${fontFaceCSS()}
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'General Sans', sans-serif; padding: 48px; background: #FFFFFF; }
    .section-title { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #A09BA3; margin-bottom: 24px; }
    .subsection { font-family: 'Conforto', serif; font-size: 21px; color: #221924; margin-bottom: 16px; margin-top: 32px; }
    .spacing-row { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; }
    .spacing-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #A09BA3; width: 80px; text-align: right; }
    .spacing-bar { height: 24px; background: #DCB1E6; border-radius: 4px; }
    .spacing-value { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #221924; }
    .radius-row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px; }
    .radius-box { text-align: center; }
    .radius-sample { width: 56px; height: 56px; background: #F8F7F8; border: 1px solid #E1DFE2; margin-bottom: 4px; }
    .radius-label { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #A09BA3; }
  </style>
  <div>
    <p class="section-title">Design Tokens / Spacing & Borders</p>

    <p class="subsection">Spacing Scale</p>`;

  for (const [key, value] of Object.entries(spacing)) {
    const px = parseInt(value);
    html += `
    <div class="spacing-row">
      <span class="spacing-label">${key}</span>
      <div class="spacing-bar" style="width: ${px}px;"></div>
      <span class="spacing-value">${value}</span>
    </div>`;
  }

  html += `<p class="subsection">Border Radius</p><div class="radius-row">`;

  for (const [key, value] of Object.entries(borderRadius)) {
    const radius = value === '9999px' ? '28px' : value;
    html += `
      <div class="radius-box">
        <div class="radius-sample" style="border-radius: ${radius};"></div>
        <p class="radius-label">${key}<br>${value}</p>
      </div>`;
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

    // Check for required tools
    const required = ['write_html', 'create_artboard'];
    const missing = required.filter(t => !toolNames.includes(t));
    if (missing.length > 0) {
      console.warn(`  ⚠️  Missing tools: ${missing.join(', ')}`);
      console.warn('     Some features may not work.\n');
    }
  } catch (err) {
    console.warn(`  ⚠️  Could not list tools: ${err.message}`);
    console.warn('     Proceeding anyway...\n');
  }

  // 3. Create/update artboards with token visualizations
  const artboards = [
    { name: 'Colors', html: generateColorsHTML() },
    { name: 'Typography', html: generateTypographyHTML() },
    { name: 'Spacing & Borders', html: generateSpacingHTML() },
  ];

  for (const artboard of artboards) {
    console.log(`  📄 Syncing "${artboard.name}"...`);
    try {
      // Try to create artboard first
      try {
        await callTool('create_artboard', {
          name: `Birne Tokens / ${artboard.name}`,
          width: 1200,
          height: 800,
        });
      } catch {
        // Artboard may already exist, continue with write_html
      }

      // Write HTML content to the artboard
      await callTool('write_html', {
        selector: `[data-name="Birne Tokens / ${artboard.name}"]`,
        html: artboard.html,
      });
      console.log(`     ✅ "${artboard.name}" synced`);
    } catch (err) {
      console.error(`     ❌ Failed to sync "${artboard.name}": ${err.message}`);

      // Fallback: try writing to root
      try {
        console.log(`     🔄 Trying fallback write...`);
        await callTool('write_html', {
          html: `<div data-token-section="${artboard.name.toLowerCase()}">${artboard.html}</div>`,
        });
        console.log(`     ✅ "${artboard.name}" synced (fallback)`);
      } catch (fallbackErr) {
        console.error(`     ❌ Fallback also failed: ${fallbackErr.message}`);
      }
    }
  }

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
