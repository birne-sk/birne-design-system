import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "./Modal";
import { Button } from "./Button";
import { Input, Textarea } from "./Input";
import { Label } from "./Typography";
import { Checkbox } from "./Checkbox";
const meta = {
    title: "Primitives/Modal",
    component: Modal,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsx("div", { style: { height: 500, position: "relative" }, children: _jsx(Modal, { open: true, children: _jsxs(ModalContent, { children: [_jsx(ModalHeader, { onClose: () => { }, children: _jsx(ModalTitle, { children: "Potvrdi\u0165 akciu" }) }), _jsx(ModalBody, { children: _jsx("p", { children: "Naozaj chcete spusti\u0165 nov\u00FA anal\u00FDzu? Predch\u00E1dzaj\u00FAce v\u00FDsledky bud\u00FA prep\u00EDsan\u00E9." }) }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "primary", size: "sm", children: "Potvrdi\u0165" }), _jsx(Button, { variant: "soft", size: "sm", children: "Zru\u0161i\u0165" })] })] }) }) })),
};
export const ContactForm = {
    render: () => (_jsx("div", { style: { height: 600, position: "relative" }, children: _jsx(Modal, { open: true, children: _jsxs(ModalContent, { size: "lg", children: [_jsx(ModalHeader, { onClose: () => { }, children: _jsx(ModalTitle, { children: "Kontaktujte n\u00E1s" }) }), _jsx(ModalBody, { className: "pt-6 pb-6", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-1.5", children: [_jsx(Label, { children: "Meno" }), _jsx(Input, { size: "sm", placeholder: "J\u00E1n" })] }), _jsxs("div", { className: "space-y-1.5", children: [_jsx(Label, { children: "Priezvisko" }), _jsx(Input, { size: "sm", placeholder: "Nov\u00E1k" })] })] }), _jsxs("div", { className: "space-y-1.5", children: [_jsx(Label, { children: "E-mail" }), _jsx(Input, { size: "sm", type: "email", placeholder: "jan@firma.sk" })] }), _jsxs("div", { className: "space-y-1.5", children: [_jsx(Label, { children: "Spr\u00E1va" }), _jsx(Textarea, { size: "sm", placeholder: "Nap\u00ED\u0161te n\u00E1m svoju ot\u00E1zku..." })] }), _jsx(Checkbox, { size: "sm", label: "S\u00FAhlas\u00EDm so spracovan\u00EDm osobn\u00FDch \u00FAdajov" })] }) }), _jsxs(ModalFooter, { className: "pt-2", children: [_jsx(Button, { variant: "primary", size: "sm", children: "Odosla\u0165" }), _jsx(Button, { variant: "soft", size: "sm", children: "Zru\u0161i\u0165" })] })] }) }) })),
};
export const SmallModal = {
    render: () => (_jsx("div", { style: { height: 400, position: "relative" }, children: _jsx(Modal, { open: true, children: _jsxs(ModalContent, { size: "sm", children: [_jsx(ModalHeader, { onClose: () => { }, children: _jsx(ModalTitle, { children: "Odstr\u00E1ni\u0165?" }) }), _jsx(ModalBody, { children: _jsx("p", { children: "T\u00E1to akcia je nevratn\u00E1." }) }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "destructive", size: "sm", children: "Odstr\u00E1ni\u0165" }), _jsx(Button, { variant: "soft", size: "sm", children: "Zru\u0161i\u0165" })] })] }) }) })),
};
