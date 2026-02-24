import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CapacityIndicator, DateCapacityBadge, InstructorBadge } from "./CourseBadge";
import { Box } from "./Container";
import { Text } from "./Typography";
import * as React from "react";
const meta = {
    title: "Primitives/CourseBadge",
    component: DateCapacityBadge,
    tags: ["autodocs"],
};
export default meta;
// ============================================
// Capacity Indicator
// ============================================
export const CapacityIndicators = {
    name: "Indikátor kapacity",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(Text, { weight: "medium", className: "mb-4", children: "Automatick\u00E9 stavy pod\u013Ea po\u010Dtu miest:" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(CapacityIndicator, { spots: 15 }), _jsx(CapacityIndicator, { spots: 10 }), _jsx(CapacityIndicator, { spots: 7 }), _jsx(CapacityIndicator, { spots: 5 }), _jsx(CapacityIndicator, { spots: 3 }), _jsx(CapacityIndicator, { spots: 2 }), _jsx(CapacityIndicator, { spots: 1 }), _jsx(CapacityIndicator, { spots: 0 })] }), _jsx(Text, { size: "sm", variant: "caption", className: "mt-4", children: "Farby: zelen\u00E1 (8+), oran\u017Eov\u00E1 (4-7), \u010Derven\u00E1 (1-3), \u0161ed\u00E1 (0)" })] })),
};
// ============================================
// Date with Capacity Badge
// ============================================
export const DateWithCapacity = {
    name: "Termíny s kapacitou",
    render: () => (_jsxs(Box, { variant: "subtle", padding: "lg", className: "max-w-2xl", children: [_jsx(Text, { weight: "medium", className: "mb-4", children: "Term\u00EDny s kapacitou" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(DateCapacityBadge, { date: "14. janu\u00E1ra", spots: 10 }), _jsx(DateCapacityBadge, { date: "30. janu\u00E1ra", spots: 5 }), _jsx(DateCapacityBadge, { date: "15. febru\u00E1ra", spots: 2 })] })] })),
};
export const DateSizes = {
    name: "Termíny - Veľkosti",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Small:" }), _jsx(DateCapacityBadge, { date: "14. janu\u00E1ra", spots: 10, size: "sm" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Medium:" }), _jsx(DateCapacityBadge, { date: "14. janu\u00E1ra", spots: 10, size: "md" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Large:" }), _jsx(DateCapacityBadge, { date: "14. janu\u00E1ra", spots: 10, size: "lg" })] })] })),
};
export const DateSelectable = {
    name: "Termíny - Výber termínu",
    render: () => {
        const [selected, setSelected] = React.useState(0);
        const dates = [
            { date: "14. januára", spots: 10 },
            { date: "30. januára", spots: 5 },
            { date: "15. februára", spots: 2 },
            { date: "28. februára", spots: 0 },
        ];
        return (_jsxs("div", { className: "space-y-4", children: [_jsx(Text, { weight: "medium", children: "Vyberte term\u00EDn:" }), _jsx("div", { className: "flex flex-wrap gap-3", children: dates.map((item, i) => (_jsx(DateCapacityBadge, { date: item.date, spots: item.spots, selected: selected === i, onClick: () => item.spots > 0 && setSelected(i), className: item.spots === 0 ? "opacity-50 cursor-not-allowed" : "" }, i))) }), _jsx(Text, { size: "sm", variant: "caption", children: selected !== null ? `Vybraný termín: ${dates[selected].date}` : "Žiadny termín nevybraný" })] }));
    },
};
// ============================================
// Instructor Badge
// ============================================
export const Instructors = {
    name: "Lektori",
    render: () => (_jsxs(Box, { variant: "subtle", padding: "lg", className: "max-w-2xl", children: [_jsx(Text, { weight: "medium", className: "mb-4", children: "Lektori" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(InstructorBadge, { name: "Jakub Hru\u0161ovsk\u00FD", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Jakub.jpg" }), _jsx(InstructorBadge, { name: "Marek \u0160ulik", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Marek.jpg" })] })] })),
};
export const InstructorSizes = {
    name: "Lektori - Veľkosti",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Small:" }), _jsx(InstructorBadge, { name: "Jakub Kov\u00E1\u010D", size: "sm" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Medium:" }), _jsx(InstructorBadge, { name: "Jakub Kov\u00E1\u010D", size: "md" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Text, { size: "sm", className: "w-20", children: "Large:" }), _jsx(InstructorBadge, { name: "Jakub Kov\u00E1\u010D", size: "lg" })] })] })),
};
export const InstructorWithPhoto = {
    name: "Lektori s fotkou",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(Text, { weight: "medium", children: "S fotografiou:" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(InstructorBadge, { name: "Jakub Hru\u0161ovsk\u00FD", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Jakub.jpg" }), _jsx(InstructorBadge, { name: "Marek \u0160ulik", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Marek.jpg" })] }), _jsx(Text, { weight: "medium", className: "mt-6", children: "S inici\u00E1lami (bez fotky):" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(InstructorBadge, { name: "Jakub Kov\u00E1\u010D" }), _jsx(InstructorBadge, { name: "Martin Horv\u00E1th" }), _jsx(InstructorBadge, { name: "Anna Nov\u00E1kov\u00E1" })] })] })),
};
export const InstructorSelectable = {
    name: "Lektori - Výber lektora",
    render: () => {
        const [selected, setSelected] = React.useState(["Jakub Hrušovský"]);
        const instructors = [
            { name: "Jakub Hrušovský", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Jakub.jpg" },
            { name: "Marek Šulik", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Marek.jpg" },
            { name: "Anna Nováková" },
        ];
        const toggleInstructor = (name) => {
            if (selected.includes(name)) {
                setSelected(selected.filter((n) => n !== name));
            }
            else {
                setSelected([...selected, name]);
            }
        };
        return (_jsxs("div", { className: "space-y-4", children: [_jsx(Text, { weight: "medium", children: "Filtruj pod\u013Ea lektora:" }), _jsx("div", { className: "flex flex-wrap gap-3", children: instructors.map((inst) => (_jsx(InstructorBadge, { name: inst.name, avatarUrl: inst.avatarUrl, selected: selected.includes(inst.name), onClick: () => toggleInstructor(inst.name) }, inst.name))) }), _jsxs(Text, { size: "sm", variant: "caption", children: ["Vybran\u00ED: ", selected.length > 0 ? selected.join(", ") : "Nikto"] })] }));
    },
};
// ============================================
// Combined Example
// ============================================
export const CourseFilters = {
    name: "Príklad: Filtre kurzu",
    render: () => {
        const [selectedDate, setSelectedDate] = React.useState(0);
        const [selectedInstructor, setSelectedInstructor] = React.useState("Jakub Hrušovský");
        const dates = [
            { date: "14. januára", spots: 10 },
            { date: "30. januára", spots: 5 },
            { date: "15. februára", spots: 2 },
        ];
        const instructors = [
            { name: "Jakub Hrušovský", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Jakub.jpg" },
            { name: "Marek Šulik", avatarUrl: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/birne-assets/Fotky/Team/Marek.jpg" },
        ];
        return (_jsxs(Box, { variant: "subtle", padding: "lg", className: "max-w-2xl", children: [_jsx(Text, { size: "lg", weight: "medium", className: "mb-6", children: "AI v Marketingu - Registr\u00E1cia" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx(Text, { size: "sm", variant: "caption", className: "mb-3", children: "Term\u00EDn" }), _jsx("div", { className: "flex flex-wrap gap-3", children: dates.map((item, i) => (_jsx(DateCapacityBadge, { date: item.date, spots: item.spots, selected: selectedDate === i, onClick: () => setSelectedDate(i) }, i))) })] }), _jsxs("div", { children: [_jsx(Text, { size: "sm", variant: "caption", className: "mb-3", children: "Lektor" }), _jsx("div", { className: "flex flex-wrap gap-3", children: instructors.map((inst) => (_jsx(InstructorBadge, { name: inst.name, avatarUrl: inst.avatarUrl, selected: selectedInstructor === inst.name, onClick: () => setSelectedInstructor(inst.name) }, inst.name))) })] })] })] }));
    },
};
