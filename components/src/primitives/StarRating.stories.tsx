import type { Meta, StoryObj } from "@storybook/react";
import { StarRating, RatingDisplay } from "./StarRating";
import { Box } from "./Container";
import { Text } from "./Typography";
import * as React from "react";

const meta: Meta<typeof StarRating> = {
  title: "Primitives/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 5, step: 0.5 },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["light", "dark"],
    },
    gap: {
      control: "select",
      options: ["none", "sm", "md"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

// ============================================
// Basic Examples
// ============================================

export const Default: Story = {
  args: {
    value: 4,
  },
};

export const FullRating: Story = {
  name: "Plné hodnotenie (5/5)",
  render: () => (
    <div className="space-y-2">
      <StarRating value={5} />
      <Text size="sm" variant="caption">fill-birne-lemon stroke-birne-black strokeWidth=1.5</Text>
    </div>
  ),
};

export const PartialRating: Story = {
  name: "Čiastočné hodnotenie (3.5/5)",
  render: () => (
    <div className="space-y-2">
      <StarRating value={3.5} />
      <Text size="sm" variant="caption">fill-transparent pre prázdne</Text>
    </div>
  ),
};

export const EmptyRating: Story = {
  name: "Prázdne hodnotenie",
  render: () => (
    <StarRating value={0} />
  ),
};

export const Sizes: Story = {
  name: "Veľkosti",
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1">
        <Text size="sm" variant="caption">Small (16px)</Text>
        <StarRating value={4} size="sm" />
      </div>
      <div className="space-y-1">
        <Text size="sm" variant="caption">Medium (20px) - default</Text>
        <StarRating value={4} size="md" />
      </div>
      <div className="space-y-1">
        <Text size="sm" variant="caption">Large (24px)</Text>
        <StarRating value={4} size="lg" />
      </div>
      <div className="space-y-1">
        <Text size="sm" variant="caption">Custom (32px)</Text>
        <StarRating value={4} size={32} />
      </div>
    </div>
  ),
};

export const WithValue: Story = {
  name: "S číselnou hodnotou",
  render: () => (
    <div className="space-y-4">
      <StarRating value={4.5} showValue />
      <StarRating value={3.8} showValue size="lg" />
    </div>
  ),
};

// ============================================
// On Different Backgrounds
// ============================================

export const OnDarkBackground: Story = {
  name: "Na tmavom pozadí",
  render: () => (
    <Box variant="dark" padding="lg" className="space-y-4">
      <div className="space-y-2">
        <StarRating value={5} variant="dark" showValue />
        <Text size="sm" className="text-white/60">stroke-birne-lemon na tmavom pozadí</Text>
      </div>
      <div className="space-y-2">
        <StarRating value={3.5} variant="dark" showValue />
      </div>
      <div className="space-y-2">
        <StarRating value={0} variant="dark" />
      </div>
    </Box>
  ),
};

export const OnPurpleBackground: Story = {
  name: "Na fialovom pozadí",
  render: () => (
    <Box variant="purple" padding="lg" className="space-y-4">
      <StarRating value={4.5} showValue />
      <StarRating value={3} />
    </Box>
  ),
};

// ============================================
// Interactive
// ============================================

export const Interactive: Story = {
  name: "Interaktívne",
  render: () => {
    const [rating, setRating] = React.useState(3);
    return (
      <div className="space-y-4">
        <Text size="sm">Klikni na hviezdičku pre zmenu hodnotenia:</Text>
        <StarRating
          value={rating}
          interactive
          onRatingChange={setRating}
          size="lg"
          showValue
        />
        <Text size="sm" variant="caption">Aktuálne: {rating}/5</Text>
      </div>
    );
  },
};

// ============================================
// Rating Display
// ============================================

export const RatingDisplayExample: Story = {
  name: "Rating Display",
  render: () => (
    <div className="space-y-6">
      <RatingDisplay
        value={4.5}
        showValue
        label="Hodnotenie kurzu"
        reviewCount={128}
      />
      <RatingDisplay
        value={4.8}
        showValue
        label="Spokojnosť zákazníkov"
        reviewCount={56}
        size="lg"
      />
    </div>
  ),
};

// ============================================
// Real-World Examples
// ============================================

export const ProductCard: Story = {
  name: "Príklad: Produktová karta",
  render: () => (
    <Box variant="outline" padding="md" className="max-w-xs">
      <div className="aspect-video bg-birne-sand-40 rounded-lg mb-4" />
      <Text weight="medium" className="mb-1">AI Marketing Kurz</Text>
      <div className="flex items-center gap-2 mb-2">
        <StarRating value={4.8} size="sm" />
        <Text size="xs" variant="caption">(128 recenzií)</Text>
      </div>
      <Text size="lg" weight="medium">199 €</Text>
    </Box>
  ),
};

export const TestimonialCard: Story = {
  name: "Príklad: Testimonial",
  render: () => (
    <Box variant="subtle" padding="lg" className="max-w-md">
      <StarRating value={5} size="sm" className="mb-3" />
      <Text className="mb-4 italic">
        "Najlepšia investícia do vzdelávania, akú som urobil tento rok.
        Ušetril som desiatky hodín práce."
      </Text>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-birne-purple-40" />
        <div>
          <Text size="sm" weight="medium">Ján Novák</Text>
          <Text size="xs" variant="caption">Marketing Manager</Text>
        </div>
      </div>
    </Box>
  ),
};

export const CourseHeader: Story = {
  name: "Príklad: Hlavička kurzu",
  render: () => (
    <Box variant="dark" padding="lg" className="max-w-lg">
      <Text size="sm" className="text-birne-lemon mb-2">ONLINE KURZ</Text>
      <Text size="xl" weight="medium" className="text-white mb-4">
        AI v Marketingu
      </Text>
      <div className="flex items-center gap-4">
        <StarRating value={4.9} variant="dark" showValue />
        <Text size="sm" className="text-white/60">2,456 študentov</Text>
      </div>
    </Box>
  ),
};

// ============================================
// All Ratings Preview
// ============================================

export const AllRatings: Story = {
  name: "Všetky hodnoty",
  render: () => (
    <div className="space-y-2">
      {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((val) => (
        <div key={val} className="flex items-center gap-4">
          <StarRating value={val} />
          <Text size="sm" className="w-8">{val}</Text>
        </div>
      ))}
    </div>
  ),
};
