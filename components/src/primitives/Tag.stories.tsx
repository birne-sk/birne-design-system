import type { Meta, StoryObj } from "@storybook/react";
import { Tag, TagInput, SelectableTag } from "./Tag";
import { Box } from "./Container";
import { Text } from "./Typography";
import { Star } from "lucide-react";
import * as React from "react";

const meta: Meta<typeof Tag> = {
  title: "Primitives/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "purple", "lemon", "sand"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Tag",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="purple">Purple</Tag>
      <Tag variant="lemon">Lemon</Tag>
      <Tag variant="sand">Sand</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const Removable: Story = {
  render: () => {
    const [tags, setTags] = React.useState(["React", "TypeScript", "Tailwind"]);
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag
            key={tag}
            removable
            onRemove={() => setTags(tags.filter((t) => t !== tag))}
          >
            {tag}
          </Tag>
        ))}
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag icon={<Star size={12} />}>Featured</Tag>
      <Tag icon={<Star size={12} />} variant="lemon">Popular</Tag>
    </div>
  ),
};

export const Clickable: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag clickable onClick={() => alert("Clicked!")}>
        Click me
      </Tag>
      <Tag variant="purple" clickable onClick={() => alert("Purple clicked!")}>
        Interactive
      </Tag>
    </div>
  ),
};

export const TagInputExample: Story = {
  render: () => {
    const [tags, setTags] = React.useState(["design", "system"]);
    return (
      <div className="max-w-md space-y-2">
        <label className="font-text text-sm text-text-heading">Tags</label>
        <TagInput
          value={tags}
          onChange={setTags}
          placeholder="Type and press Enter..."
        />
        <p className="font-text text-xs text-text-caption">
          Press Enter or comma to add a tag. Backspace to remove.
        </p>
      </div>
    );
  },
};

export const TagInputWithMax: Story = {
  render: () => {
    const [tags, setTags] = React.useState(["one", "two"]);
    return (
      <div className="max-w-md space-y-2">
        <label className="font-text text-sm text-text-heading">Tags (max 3)</label>
        <TagInput
          value={tags}
          onChange={setTags}
          maxTags={3}
          tagVariant="purple"
        />
      </div>
    );
  },
};

// ============================================
// Selectable Tags
// ============================================

export const SelectableTags: Story = {
  name: "Klikateľné Tagy",
  render: () => {
    const [selectedWhite, setSelectedWhite] = React.useState<string[]>(["Marketing"]);
    const [selectedSand, setSelectedSand] = React.useState<string[]>(["Marketing"]);
    const [selectedDark, setSelectedDark] = React.useState<string[]>(["Marketing"]);

    const allTags = ["Marketing", "Stratégia", "Branding", "Design"];

    const toggleTag = (
      tag: string,
      selected: string[],
      setSelected: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
      if (selected.includes(tag)) {
        setSelected(selected.filter((t) => t !== tag));
      } else {
        setSelected([...selected, tag]);
      }
    };

    return (
      <div className="space-y-6">
        <div>
          <Text className="mb-4">
            Klikni na tag pre prepnutie stavu. Na bledých pozadiach majú zakliknuté tagy Birne Black výplň, na tmavých Birne Purple.
          </Text>
        </div>

        <div className="flex gap-6">
          {/* White background */}
          <Box variant="outline" padding="lg" className="flex-1">
            <Text size="sm" weight="medium" className="mb-4">White</Text>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <SelectableTag
                  key={tag}
                  active={selectedWhite.includes(tag)}
                  onClick={() => toggleTag(tag, selectedWhite, setSelectedWhite)}
                  background="light"
                >
                  {tag}
                </SelectableTag>
              ))}
            </div>
          </Box>

          {/* Sand background */}
          <Box variant="sand" padding="lg" className="flex-1">
            <Text size="sm" weight="medium" className="mb-4">Birne Sand Level 4</Text>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <SelectableTag
                  key={tag}
                  active={selectedSand.includes(tag)}
                  onClick={() => toggleTag(tag, selectedSand, setSelectedSand)}
                  background="light"
                >
                  {tag}
                </SelectableTag>
              ))}
            </div>
          </Box>

          {/* Dark background */}
          <Box variant="dark" padding="lg" className="flex-1">
            <Text size="sm" weight="medium" className="mb-4 text-white">Birne Black</Text>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <SelectableTag
                  key={tag}
                  active={selectedDark.includes(tag)}
                  onClick={() => toggleTag(tag, selectedDark, setSelectedDark)}
                  background="dark"
                >
                  {tag}
                </SelectableTag>
              ))}
            </div>
          </Box>
        </div>
      </div>
    );
  },
};

export const SelectableTagSizes: Story = {
  name: "Klikateľné Tagy - Veľkosti",
  render: () => {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Text size="sm" className="w-20">Small:</Text>
          <SelectableTag size="sm" active>Aktívny</SelectableTag>
          <SelectableTag size="sm">Neaktívny</SelectableTag>
        </div>
        <div className="flex items-center gap-4">
          <Text size="sm" className="w-20">Medium:</Text>
          <SelectableTag size="md" active>Aktívny</SelectableTag>
          <SelectableTag size="md">Neaktívny</SelectableTag>
        </div>
        <div className="flex items-center gap-4">
          <Text size="sm" className="w-20">Large:</Text>
          <SelectableTag size="lg" active>Aktívny</SelectableTag>
          <SelectableTag size="lg">Neaktívny</SelectableTag>
        </div>
      </div>
    );
  },
};

export const FilterExample: Story = {
  name: "Príklad: Filter kategórií",
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(["Všetko"]);

    const categories = ["Všetko", "Marketing", "AI", "Produktivita", "Dizajn", "Stratégia"];

    const handleClick = (cat: string) => {
      if (cat === "Všetko") {
        setSelected(["Všetko"]);
      } else {
        const newSelected = selected.includes(cat)
          ? selected.filter((c) => c !== cat)
          : [...selected.filter((c) => c !== "Všetko"), cat];
        setSelected(newSelected.length === 0 ? ["Všetko"] : newSelected);
      }
    };

    return (
      <div className="space-y-4">
        <Text weight="medium">Filtrovať kurzy podľa kategórie:</Text>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <SelectableTag
              key={cat}
              active={selected.includes(cat)}
              onClick={() => handleClick(cat)}
            >
              {cat}
            </SelectableTag>
          ))}
        </div>
        <Text size="sm" variant="caption">
          Vybrané: {selected.join(", ")}
        </Text>
      </div>
    );
  },
};
