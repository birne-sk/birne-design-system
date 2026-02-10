import * as React from "react";
import { cn } from "../lib/utils";

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

const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(
  (
    { className, member, variant = "default", showContact = true, ...props },
    ref
  ) => {
    if (variant === "horizontal") {
      return (
        <div
          ref={ref}
          className={cn(
            "bg-surface rounded-lg p-4 flex items-center gap-4 shadow-sm",
            className
          )}
          {...props}
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-display text-md font-normal text-text-heading truncate">
              {member.name}
            </h4>
            <p className="font-text text-sm text-text-caption truncate">
              {member.position}
            </p>
            {showContact && member.email && (
              <a
                href={`mailto:${member.email}`}
                className="font-text text-sm text-birne-purple hover:underline truncate block"
              >
                {member.email}
              </a>
            )}
          </div>
        </div>
      );
    }

    if (variant === "compact") {
      return (
        <div
          ref={ref}
          className={cn("text-center", className)}
          {...props}
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
          />
          <h4 className="font-display text-base font-normal text-text-heading">
            {member.name}
          </h4>
          <p className="font-text text-sm text-text-caption">
            {member.position}
          </p>
        </div>
      );
    }

    // Default variant
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface rounded-lg overflow-hidden shadow-sm",
          className
        )}
        {...props}
      >
        <div className="aspect-[4/5] relative">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h4 className="font-display text-lg font-normal text-text-heading">
            {member.name}
          </h4>
          <p className="font-mono text-xs uppercase tracking-wider text-text-caption mt-1">
            {member.position}
          </p>
          {showContact && (
            <div className="mt-4 space-y-1">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="font-text text-sm text-birne-purple hover:underline block"
                >
                  {member.email}
                </a>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="font-text text-sm text-text-body hover:text-birne-purple block"
                >
                  {member.phone}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
TeamCard.displayName = "TeamCard";

export { TeamCard };
