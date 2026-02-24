import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tag, TagInput, SelectableTag } from "./Tag";
import { Box } from "./Container";
import { Text } from "./Typography";
import { Star } from "lucide-react";
import * as React from "react";
const meta = {
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
export const Default = {
    args: {
        children: "Tag",
    },
};
export const Variants = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Tag, { variant: "default", children: "Default" }), _jsx(Tag, { variant: "outline", children: "Outline" }), _jsx(Tag, { variant: "purple", children: "Purple" }), _jsx(Tag, { variant: "lemon", children: "Lemon" }), _jsx(Tag, { variant: "sand", children: "Sand" })] })),
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Tag, { size: "sm", children: "Small" }), _jsx(Tag, { size: "md", children: "Medium" }), _jsx(Tag, { size: "lg", children: "Large" })] })),
};
export const Removable = {
    render: () => {
        const [tags, setTags] = React.useState(["React", "TypeScript", "Tailwind"]);
        return (_jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => (_jsx(Tag, { removable: true, onRemove: () => setTags(tags.filter((t) => t !== tag)), children: tag }, tag))) }));
    },
};
export const WithIcon = {
    render: () => (_jsxs("div", { className: "flex gap-2", children: [_jsx(Tag, { icon: _jsx(Star, { size: 12 }), children: "Featured" }), _jsx(Tag, { icon: _jsx(Star, { size: 12 }), variant: "lemon", children: "Popular" })] })),
};
export const Clickable = {
    render: () => (_jsxs("div", { className: "flex gap-2", children: [_jsx(Tag, { clickable: true, onClick: () => alert("Clicked!"), children: "Click me" }), _jsx(Tag, { variant: "purple", clickable: true, onClick: () => alert("Purple clicked!"), children: "Interactive" })] })),
};
export const TagInputExample = {
    render: () => {
        const [tags, setTags] = React.useState(["design", "system"]);
        return (_jsxs("div", { className: "max-w-md space-y-2", children: [_jsx("label", { className: "font-text text-sm text-text-heading", children: "Tags" }), _jsx(TagInput, { value: tags, onChange: setTags, placeholder: "Type and press Enter..." }), _jsx("p", { className: "font-text text-xs text-text-caption", children: "Press Enter or comma to add a tag. Backspace to remove." })] }));
    },
};
export const TagInputWithMax = {
    render: () => {
        const [tags, setTags] = React.useState(["one", "two"]);
        return (_jsxs("div", { className: "max-w-md space-y-2", children: [_jsx("label", { className: "font-text text-sm text-text-heading", children: "Tags (max 3)" }), _jsx(TagInput, { value: tags, onChange: setTags, maxTags: 3, tagVariant: "purple" })] }));
    },
};
// ============================================
// Selectable Tags
// ============================================
export const SelectableTags = {
    name: "Klikateľné Tagy",
    render: () => {
        const [selectedWhite, setSelectedWhite] = React.useState(["Marketing"]);
        const [selectedSand, setSelectedSand] = React.useState(["Marketing"]);
        const [selectedDark, setSelectedDark] = React.useState(["Marketing"]);
        const allTags = ["Marketing", "Stratégia", "Branding", "Design"];
        const toggleTag = (tag, selected, setSelected) => {
            if (selected.includes(tag)) {
                setSelected(selected.filter((t) => t !== tag));
            }
            else {
                setSelected([...selected, tag]);
            }
        };
        return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { children: _jsx(Text, { className: "mb-4", children: "Klikni na tag pre prepnutie stavu. Na bled\u00FDch pozadiach maj\u00FA zakliknut\u00E9 tagy Birne Black v\u00FDpl\u0148, na tmav\u00FDch Birne Purple." }) }), _jsxs("div", { className: "flex gap-6", children: [_jsxs(Box, { variant: "outline", padding: "lg", className: "flex-1", children: [_jsx(Text, { size: "sm", weight: "medium", className: "mb-4", children: "White" }), _jsx("div", { className: "flex flex-wrap gap-2", children: allTags.map((tag) => (_jsx(SelectableTag, { active: selectedWhite.includes(tag), onClick: () => toggleTag(tag, selectedWhite, setSelectedWhite), background: "light", children: tag }, tag))) })] }), _jsxs(Box, { variant: "sand", padding: "lg", className: "flex-1", children: [_jsx(Text, { size: "sm", weight: "medium", className: "mb-4", children: "Birne Sand Level 4" }), _jsx("div", { className: "flex flex-wrap gap-2", children: allTags.map((tag) => (_jsx(SelectableTag, { active: selectedSand.includes(tag), onClick: () => toggleTag(tag, selectedSand, setSelectedSand), background: "light", children: tag }, tag))) })] }), _jsxs(Box, { variant: "dark", padding: "lg", className: "flex-1", children: [_jsx(Text, { size: "sm", weight: "medium", className: "mb-4 text-white", children: "Birne Black" }), _jsx("div", { className: "flex flex-wrap gap-2", children: allTags.map((tag) => (_jsx(SelectableTag, { active: selectedDark.includes(tag), onClick: () => toggleTag(tag, selectedDark, setSelectedDark), background: "dark", children: tag }, tag))) })] })] })] }));
    },
};
export const SelectableTagSizes = {
    name: "Klikateľné Tagy - Veľkosti",
    render: () => {
        return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Small:" }), _jsx(SelectableTag, { size: "sm", active: true, children: "Akt\u00EDvny" }), _jsx(SelectableTag, { size: "sm", children: "Neakt\u00EDvny" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Medium:" }), _jsx(SelectableTag, { size: "md", active: true, children: "Akt\u00EDvny" }), _jsx(SelectableTag, { size: "md", children: "Neakt\u00EDvny" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Large:" }), _jsx(SelectableTag, { size: "lg", active: true, children: "Akt\u00EDvny" }), _jsx(SelectableTag, { size: "lg", children: "Neakt\u00EDvny" })] })] }));
    },
};
export const FilterExample = {
    name: "Príklad: Filter kategórií",
    render: () => {
        const [selected, setSelected] = React.useState(["Všetko"]);
        const categories = ["Všetko", "Marketing", "AI", "Produktivita", "Dizajn", "Stratégia"];
        const handleClick = (cat) => {
            if (cat === "Všetko") {
                setSelected(["Všetko"]);
            }
            else {
                const newSelected = selected.includes(cat)
                    ? selected.filter((c) => c !== cat)
                    : [...selected.filter((c) => c !== "Všetko"), cat];
                setSelected(newSelected.length === 0 ? ["Všetko"] : newSelected);
            }
        };
        return (_jsxs("div", { className: "space-y-4", children: [_jsx(Text, { weight: "medium", children: "Filtrova\u0165 kurzy pod\u013Ea kateg\u00F3rie:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => (_jsx(SelectableTag, { active: selected.includes(cat), onClick: () => handleClick(cat), children: cat }, cat))) }), _jsxs(Text, { size: "sm", variant: "caption", children: ["Vybran\u00E9: ", selected.join(", ")] })] }));
    },
};
