import type { Meta, StoryObj } from "@storybook/react";
import { CapacityIndicator, DateCapacityBadge, InstructorBadge } from "./CourseBadge";
import { Box } from "./Container";
import { Text } from "./Typography";
import * as React from "react";

const meta: Meta<typeof DateCapacityBadge> = {
  title: "Primitives/CourseBadge",
  component: DateCapacityBadge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateCapacityBadge>;

// ============================================
// Capacity Indicator
// ============================================

export const CapacityIndicators: Story = {
  name: "Indikátor kapacity",
  render: () => (
    <div className="space-y-4">
      <Text weight="medium" className="mb-4">Automatické stavy podľa počtu miest:</Text>
      <div className="flex flex-wrap gap-3">
        <CapacityIndicator spots={15} />
        <CapacityIndicator spots={10} />
        <CapacityIndicator spots={7} />
        <CapacityIndicator spots={5} />
        <CapacityIndicator spots={3} />
        <CapacityIndicator spots={2} />
        <CapacityIndicator spots={1} />
        <CapacityIndicator spots={0} />
      </div>
      <Text size="sm" variant="caption" className="mt-4">
        Farby: zelená (8+), oranžová (4-7), červená (1-3), šedá (0)
      </Text>
    </div>
  ),
};

// ============================================
// Date with Capacity Badge
// ============================================

export const DateWithCapacity: Story = {
  name: "Termíny s kapacitou",
  render: () => (
    <Box variant="subtle" padding="lg" className="max-w-2xl">
      <Text weight="medium" className="mb-4">Termíny s kapacitou</Text>
      <div className="flex flex-wrap gap-3">
        <DateCapacityBadge date="14. januára" spots={10} />
        <DateCapacityBadge date="30. januára" spots={5} />
        <DateCapacityBadge date="15. februára" spots={2} />
      </div>
    </Box>
  ),
};

export const DateSizes: Story = {
  name: "Termíny - Veľkosti",
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Text size="sm" className="w-20">Small:</Text>
        <DateCapacityBadge date="14. januára" spots={10} size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <Text size="sm" className="w-20">Medium:</Text>
        <DateCapacityBadge date="14. januára" spots={10} size="md" />
      </div>
      <div className="flex items-center gap-4">
        <Text size="sm" className="w-20">Large:</Text>
        <DateCapacityBadge date="14. januára" spots={10} size="lg" />
      </div>
    </div>
  ),
};

export const DateSelectable: Story = {
  name: "Termíny - Výber termínu",
  render: () => {
    const [selected, setSelected] = React.useState<number | null>(0);

    const dates = [
      { date: "14. januára", spots: 10 },
      { date: "30. januára", spots: 5 },
      { date: "15. februára", spots: 2 },
      { date: "28. februára", spots: 0 },
    ];

    return (
      <div className="space-y-4">
        <Text weight="medium">Vyberte termín:</Text>
        <div className="flex flex-wrap gap-3">
          {dates.map((item, i) => (
            <DateCapacityBadge
              key={i}
              date={item.date}
              spots={item.spots}
              selected={selected === i}
              onClick={() => item.spots > 0 && setSelected(i)}
              className={item.spots === 0 ? "opacity-50 cursor-not-allowed" : ""}
            />
          ))}
        </div>
        <Text size="sm" variant="caption">
          {selected !== null ? `Vybraný termín: ${dates[selected].date}` : "Žiadny termín nevybraný"}
        </Text>
      </div>
    );
  },
};

// ============================================
// Instructor Badge
// ============================================

export const Instructors: Story = {
  name: "Lektori",
  render: () => (
    <Box variant="subtle" padding="lg" className="max-w-2xl">
      <Text weight="medium" className="mb-4">Lektori</Text>
      <div className="flex flex-wrap gap-3">
        <InstructorBadge name="Jakub Kováč" />
        <InstructorBadge name="Martin Horváth" />
      </div>
    </Box>
  ),
};

export const InstructorSizes: Story = {
  name: "Lektori - Veľkosti",
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Text size="sm" className="w-20">Small:</Text>
        <InstructorBadge name="Jakub Kováč" size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <Text size="sm" className="w-20">Medium:</Text>
        <InstructorBadge name="Jakub Kováč" size="md" />
      </div>
      <div className="flex items-center gap-4">
        <Text size="sm" className="w-20">Large:</Text>
        <InstructorBadge name="Jakub Kováč" size="lg" />
      </div>
    </div>
  ),
};

export const InstructorWithPhoto: Story = {
  name: "Lektori s fotkou",
  render: () => (
    <div className="space-y-4">
      <Text weight="medium">S fotografiou:</Text>
      <div className="flex flex-wrap gap-3">
        <InstructorBadge
          name="Jakub Hrušovský"
          avatarUrl="https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Jakub.jpg"
        />
        <InstructorBadge
          name="Marek Baláž"
          avatarUrl="https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Marek.jpg"
        />
      </div>

      <Text weight="medium" className="mt-6">S iniciálami (bez fotky):</Text>
      <div className="flex flex-wrap gap-3">
        <InstructorBadge name="Jakub Kováč" />
        <InstructorBadge name="Martin Horváth" />
        <InstructorBadge name="Anna Nováková" />
      </div>
    </div>
  ),
};

export const InstructorSelectable: Story = {
  name: "Lektori - Výber lektora",
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(["Jakub Hrušovský"]);

    const instructors = [
      { name: "Jakub Hrušovský", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Jakub.jpg" },
      { name: "Marek Baláž", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Marek.jpg" },
      { name: "Anna Nováková" },
    ];

    const toggleInstructor = (name: string) => {
      if (selected.includes(name)) {
        setSelected(selected.filter((n) => n !== name));
      } else {
        setSelected([...selected, name]);
      }
    };

    return (
      <div className="space-y-4">
        <Text weight="medium">Filtruj podľa lektora:</Text>
        <div className="flex flex-wrap gap-3">
          {instructors.map((inst) => (
            <InstructorBadge
              key={inst.name}
              name={inst.name}
              avatarUrl={inst.avatarUrl}
              selected={selected.includes(inst.name)}
              onClick={() => toggleInstructor(inst.name)}
            />
          ))}
        </div>
        <Text size="sm" variant="caption">
          Vybraní: {selected.length > 0 ? selected.join(", ") : "Nikto"}
        </Text>
      </div>
    );
  },
};

// ============================================
// Combined Example
// ============================================

export const CourseFilters: Story = {
  name: "Príklad: Filtre kurzu",
  render: () => {
    const [selectedDate, setSelectedDate] = React.useState<number>(0);
    const [selectedInstructor, setSelectedInstructor] = React.useState<string | null>("Jakub Hrušovský");

    const dates = [
      { date: "14. januára", spots: 10 },
      { date: "30. januára", spots: 5 },
      { date: "15. februára", spots: 2 },
    ];

    const instructors = [
      { name: "Jakub Hrušovský", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Jakub.jpg" },
      { name: "Marek Baláž", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Marek.jpg" },
    ];

    return (
      <Box variant="subtle" padding="lg" className="max-w-2xl">
        <Text size="lg" weight="medium" className="mb-6">AI v Marketingu - Registrácia</Text>

        <div className="space-y-6">
          <div>
            <Text size="sm" variant="caption" className="mb-3">Termín</Text>
            <div className="flex flex-wrap gap-3">
              {dates.map((item, i) => (
                <DateCapacityBadge
                  key={i}
                  date={item.date}
                  spots={item.spots}
                  selected={selectedDate === i}
                  onClick={() => setSelectedDate(i)}
                />
              ))}
            </div>
          </div>

          <div>
            <Text size="sm" variant="caption" className="mb-3">Lektor</Text>
            <div className="flex flex-wrap gap-3">
              {instructors.map((inst) => (
                <InstructorBadge
                  key={inst.name}
                  name={inst.name}
                  avatarUrl={inst.avatarUrl}
                  selected={selectedInstructor === inst.name}
                  onClick={() => setSelectedInstructor(inst.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </Box>
    );
  },
};
