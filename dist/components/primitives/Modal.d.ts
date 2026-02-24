import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const Modal: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    onClose?: () => void;
} & React.RefAttributes<HTMLDivElement>>;
declare const modalContentVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalContentVariants> {
}
declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
declare const ModalHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    onClose?: () => void;
} & React.RefAttributes<HTMLDivElement>>;
declare const ModalTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const ModalBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ModalFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Modal, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, modalContentVariants };
//# sourceMappingURL=Modal.d.ts.map