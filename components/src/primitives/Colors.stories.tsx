import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Tokens/Colors",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

const Swatch = ({ color, label, css }: { color: string; label: string; css: string }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div
      className="w-16 h-16 rounded-md border border-birne-black-10"
      style={{ backgroundColor: color }}
    />
    <span className="font-text text-xs text-text-heading font-medium">{label}</span>
    <span className="font-mono text-[10px] text-text-caption">{css}</span>
  </div>
);

const ScaleRow = ({ name, shades }: { name: string; shades: { label: string; css: string; color: string }[] }) => (
  <div className="mb-8">
    <h3 className="font-display text-lg text-text-heading mb-3">{name}</h3>
    <div className="flex flex-wrap gap-4">
      {shades.map((s) => (
        <Swatch key={s.label} label={s.label} css={s.css} color={s.color} />
      ))}
    </div>
  </div>
);

export const BrandColors: StoryObj = {
  name: "Brand Colors",
  render: () => (
    <div>
      <ScaleRow
        name="Birne Black"
        shades={[
          { label: "100", css: "--birne-black-100", color: "hsl(310, 18%, 12%)" },
          { label: "80", css: "--birne-black-80", color: "hsl(310, 10%, 28%)" },
          { label: "60", css: "--birne-black-60", color: "hsl(310, 6%, 45%)" },
          { label: "40", css: "--birne-black-40", color: "hsl(310, 4%, 62%)" },
          { label: "20", css: "--birne-black-20", color: "hsl(310, 4%, 80%)" },
          { label: "10", css: "--birne-black-10", color: "hsl(310, 3%, 88%)" },
          { label: "5", css: "--birne-black-5", color: "hsl(310, 2%, 94%)" },
          { label: "2", css: "--birne-black-2", color: "hsl(310, 1%, 97%)" },
        ]}
      />
      <ScaleRow
        name="Birne Purple"
        shades={[
          { label: "100", css: "--birne-purple-100", color: "hsl(289, 54%, 80%)" },
          { label: "80", css: "--birne-purple-80", color: "hsl(289, 54%, 85%)" },
          { label: "60", css: "--birne-purple-60", color: "hsl(289, 54%, 90%)" },
          { label: "40", css: "--birne-purple-40", color: "hsl(289, 54%, 93%)" },
          { label: "20", css: "--birne-purple-20", color: "hsl(289, 54%, 96%)" },
        ]}
      />
      <ScaleRow
        name="Birne Lemon"
        shades={[
          { label: "100", css: "--birne-lemon-100", color: "hsl(61, 97%, 72%)" },
          { label: "80", css: "--birne-lemon-80", color: "hsl(61, 97%, 77%)" },
          { label: "60", css: "--birne-lemon-60", color: "hsl(61, 97%, 82%)" },
          { label: "40", css: "--birne-lemon-40", color: "hsl(61, 97%, 87%)" },
          { label: "20", css: "--birne-lemon-20", color: "hsl(61, 97%, 92%)" },
        ]}
      />
    </div>
  ),
};

export const TextColors: StoryObj = {
  name: "Text Colors",
  render: () => (
    <div className="space-y-4">
      <h3 className="font-display text-lg text-text-heading mb-3">Text Colors</h3>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#221924" }} />
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Heading</p>
            <p className="font-mono text-[10px] text-text-caption">#221924</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#716B74" }} />
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Body</p>
            <p className="font-mono text-[10px] text-text-caption">#716B74</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#A09BA3" }} />
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Caption</p>
            <p className="font-mono text-[10px] text-text-caption">#A09BA3</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const UIColors: StoryObj = {
  name: "UI Colors",
  render: () => (
    <div className="space-y-4">
      <h3 className="font-display text-lg text-text-heading mb-3">UI Colors</h3>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md border border-birne-black-10" style={{ backgroundColor: "#FFFFFF" }} />
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Background</p>
            <p className="font-mono text-[10px] text-text-caption">#FFFFFF</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md border border-birne-black-10" style={{ backgroundColor: "#FFFFFF" }} />
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Surface</p>
            <p className="font-mono text-[10px] text-text-caption">#FFFFFF</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#D1D1D6" }} />
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Border</p>
            <p className="font-mono text-[10px] text-text-caption">#D1D1D6</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md border border-birne-black-10" style={{ backgroundColor: "#F5F5F7" }} />
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Hover</p>
            <p className="font-mono text-[10px] text-text-caption">#F5F5F7</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SemanticColors: StoryObj = {
  name: "Semantic Colors",
  render: () => (
    <div className="space-y-4">
      <h3 className="font-display text-lg text-text-heading mb-3">Semantic Colors</h3>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#22c55e" }} />
            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#f0fdf4" }} />
          </div>
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Success</p>
            <p className="font-mono text-[10px] text-text-caption">green-500 / green-50</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#f59e0b" }} />
            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#fffbeb" }} />
          </div>
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Warning</p>
            <p className="font-mono text-[10px] text-text-caption">amber-500 / amber-50</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#ef4444" }} />
            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#fef2f2" }} />
          </div>
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Destructive</p>
            <p className="font-mono text-[10px] text-text-caption">red-500 / red-50</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#3b82f6" }} />
            <div className="w-10 h-10 rounded-md" style={{ backgroundColor: "#eff6ff" }} />
          </div>
          <div>
            <p className="font-text text-sm text-text-heading font-medium">Info</p>
            <p className="font-mono text-[10px] text-text-caption">blue-500 / blue-50</p>
          </div>
        </div>
      </div>
    </div>
  ),
};
