import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "./Modal";
import { Button } from "./Button";
import { Input, Textarea } from "./Input";
import { Label } from "./Typography";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Modal> = {
  title: "Primitives/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: 500, position: "relative" }}>
      <Modal open>
        <ModalContent>
          <ModalHeader onClose={() => {}}>
            <ModalTitle>Potvrdiť akciu</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>Naozaj chcete spustiť novú analýzu? Predchádzajúce výsledky budú prepísané.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" size="sm">Potvrdiť</Button>
            <Button variant="soft" size="sm">Zrušiť</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <div style={{ height: 600, position: "relative" }}>
      <Modal open>
        <ModalContent size="lg">
          <ModalHeader onClose={() => {}}>
            <ModalTitle>Kontaktujte nás</ModalTitle>
          </ModalHeader>
          <ModalBody className="pt-6 pb-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Meno</Label>
                  <Input size="sm" placeholder="Ján" />
                </div>
                <div className="space-y-1.5">
                  <Label>Priezvisko</Label>
                  <Input size="sm" placeholder="Novák" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>E-mail</Label>
                <Input size="sm" type="email" placeholder="jan@firma.sk" />
              </div>
              <div className="space-y-1.5">
                <Label>Správa</Label>
                <Textarea size="sm" placeholder="Napíšte nám svoju otázku..." />
              </div>
              <Checkbox size="sm" label="Súhlasím so spracovaním osobných údajov" />
            </div>
          </ModalBody>
          <ModalFooter className="pt-2">
            <Button variant="primary" size="sm">Odoslať</Button>
            <Button variant="soft" size="sm">Zrušiť</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  ),
};

export const SmallModal: Story = {
  render: () => (
    <div style={{ height: 400, position: "relative" }}>
      <Modal open>
        <ModalContent size="sm">
          <ModalHeader onClose={() => {}}>
            <ModalTitle>Odstrániť?</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>Táto akcia je nevratná.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="destructive" size="sm">Odstrániť</Button>
            <Button variant="soft" size="sm">Zrušiť</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  ),
};

