import * as React from "react";
export interface TeamMember {
    name: string;
    position: string;
    photo: string;
    email?: string;
    phone?: string;
}
export interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
    member: TeamMember;
    /** Card variant */
    variant?: "default" | "compact" | "horizontal";
    /** Show contact info */
    showContact?: boolean;
}
declare const TeamCard: React.ForwardRefExoticComponent<TeamCardProps & React.RefAttributes<HTMLDivElement>>;
export { TeamCard };
//# sourceMappingURL=TeamCard.d.ts.map