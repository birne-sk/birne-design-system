import type { Meta, StoryObj } from "@storybook/react";
import { ServiceIcon, serviceLabels, serviceDescriptions, ServiceType } from "./ServiceIcon";
import { Text, Heading } from "./Typography";
import { Card, CardContent } from "./Card";

const meta: Meta<typeof ServiceIcon> = {
  title: "Primitives/ServiceIcon",
  component: ServiceIcon,
  tags: ["autodocs"],
  argTypes: {
    service: {
      control: "select",
      options: ["diagnostika", "exekucia", "strategia", "vzdelavanie"],
    },
    size: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceIcon>;

export const Diagnostika: Story = {
  args: {
    service: "diagnostika",
    size: 82,
  },
};

export const Exekucia: Story = {
  args: {
    service: "exekucia",
    size: 82,
  },
};

export const Strategia: Story = {
  args: {
    service: "strategia",
    size: 82,
  },
};

export const Vzdelavanie: Story = {
  args: {
    service: "vzdelavanie",
    size: 82,
  },
};

export const AllServices: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <ServiceIcon service="diagnostika" />
      <ServiceIcon service="exekucia" />
      <ServiceIcon service="strategia" />
      <ServiceIcon service="vzdelavanie" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-8 items-end">
      <ServiceIcon service="strategia" size={32} />
      <ServiceIcon service="strategia" size={48} />
      <ServiceIcon service="strategia" size={64} />
      <ServiceIcon service="strategia" size={82} />
      <ServiceIcon service="strategia" size={120} />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex gap-8">
      <ServiceIcon service="diagnostika" primaryColor="#221924" accentColor="#DCB1E6" />
      <ServiceIcon service="diagnostika" primaryColor="#221924" accentColor="#FAFD70" />
      <ServiceIcon service="diagnostika" primaryColor="#716B74" accentColor="#DCB1E6" />
    </div>
  ),
};

export const ServiceCards: Story = {
  render: () => {
    const services: ServiceType[] = ["diagnostika", "strategia", "exekucia", "vzdelavanie"];
    return (
      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        {services.map((service) => (
          <Card key={service} variant="outline" className="p-6">
            <CardContent className="flex flex-col items-center text-center gap-4">
              <ServiceIcon service={service} size={64} />
              <div>
                <Heading level="h5">{serviceLabels[service].sk}</Heading>
                <Text size="sm" variant="caption" className="mt-1">
                  {serviceDescriptions[service].sk}
                </Text>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  },
};

export const OnDarkBackground: Story = {
  render: () => (
    <div className="bg-birne-black p-8 rounded-lg flex gap-8">
      <ServiceIcon service="diagnostika" primaryColor="#F8F7F8" accentColor="#DCB1E6" />
      <ServiceIcon service="exekucia" primaryColor="#F8F7F8" accentColor="#DCB1E6" />
      <ServiceIcon service="strategia" primaryColor="#F8F7F8" accentColor="#DCB1E6" />
      <ServiceIcon service="vzdelavanie" primaryColor="#F8F7F8" accentColor="#DCB1E6" />
    </div>
  ),
};
