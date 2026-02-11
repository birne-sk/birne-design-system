import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel } from "./Dropdown";
import { Button } from "./Button";
import { Settings, User, LogOut, CreditCard, Keyboard, ChevronDown, Edit, Copy, Trash } from "lucide-react";

const meta: Meta<typeof Dropdown> = {
  title: "Primitives/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown
      trigger={
        <Button variant="soft">
          Options <ChevronDown size={16} />
        </Button>
      }
    >
      <DropdownItem icon={<Edit size={16} />}>Edit</DropdownItem>
      <DropdownItem icon={<Copy size={16} />}>Duplicate</DropdownItem>
      <DropdownSeparator />
      <DropdownItem icon={<Trash size={16} />} destructive>
        Delete
      </DropdownItem>
    </Dropdown>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Dropdown
      trigger={
        <Button variant="soft">
          Account <ChevronDown size={16} />
        </Button>
      }
    >
      <DropdownLabel>My Account</DropdownLabel>
      <DropdownItem icon={<User size={16} />}>Profile</DropdownItem>
      <DropdownItem icon={<CreditCard size={16} />}>Billing</DropdownItem>
      <DropdownItem icon={<Settings size={16} />}>Settings</DropdownItem>
      <DropdownItem icon={<Keyboard size={16} />} suffix="Ctrl+K">
        Shortcuts
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem icon={<LogOut size={16} />}>Log out</DropdownItem>
    </Dropdown>
  ),
};

export const Selectable: Story = {
  render: () => (
    <Dropdown
      trigger={
        <Button variant="soft">
          Status <ChevronDown size={16} />
        </Button>
      }
    >
      <DropdownItem selected>Active</DropdownItem>
      <DropdownItem selected={false}>Inactive</DropdownItem>
      <DropdownItem selected={false}>Pending</DropdownItem>
    </Dropdown>
  ),
};

export const AlignEnd: Story = {
  render: () => (
    <div className="flex justify-end">
      <Dropdown
        align="end"
        trigger={
          <Button variant="soft">
            Menu <ChevronDown size={16} />
          </Button>
        }
      >
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </Dropdown>
    </div>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <Dropdown
      trigger={
        <Button variant="soft">
          Actions <ChevronDown size={16} />
        </Button>
      }
    >
      <DropdownItem icon={<Edit size={16} />}>Edit</DropdownItem>
      <DropdownItem icon={<Copy size={16} />} disabled>
        Duplicate (Pro only)
      </DropdownItem>
      <DropdownItem icon={<Trash size={16} />} destructive>
        Delete
      </DropdownItem>
    </Dropdown>
  ),
};
