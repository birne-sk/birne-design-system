import * as React from "react";
import { cn } from "../lib/utils";

export type ServiceType = "diagnostika" | "exekucia" | "strategia" | "vzdelavanie";

export interface ServiceIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Service type */
  service: ServiceType;
  /** Icon size */
  size?: number | string;
  /** Primary color (default: birne-black) */
  primaryColor?: string;
  /** Accent color (default: birne-purple) */
  accentColor?: string;
}

const ServiceIcon = React.forwardRef<SVGSVGElement, ServiceIconProps>(
  (
    {
      service,
      size = 82,
      primaryColor = "#221924",
      accentColor = "#DCB1E6",
      className,
      ...props
    },
    ref
  ) => {
    const icons: Record<ServiceType, React.ReactNode> = {
      diagnostika: (
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("service-icon", className)}
          {...props}
        >
          <path
            d="M40.8135 23.3242C53.6495 12.844 65.5667 7.86752 69.6641 11.9648L69.8906 12.2109C73.5656 16.5231 68.5799 28.2253 58.3027 40.8125C68.7836 53.6489 73.7606 65.5656 69.6631 69.6631L69.417 69.8906C65.1046 73.5657 53.4013 68.5798 40.8135 58.3018C28.2259 68.5794 16.5233 73.5657 12.2109 69.8906L11.9648 69.6631C7.86758 65.5656 12.8438 53.6486 23.3242 40.8125C13.0475 28.2255 8.06246 16.5231 11.7373 12.2109L11.9648 11.9648C16.0621 7.8676 27.9778 12.8444 40.8135 23.3242ZM24.6279 42.3799C20.8175 47.0809 17.7844 51.6233 15.7031 55.6455C13.9764 58.9825 12.9591 61.8579 12.6406 64.1055C12.3163 66.3953 12.7606 67.6306 13.3789 68.249C13.9974 68.8673 15.2327 69.3107 17.5225 68.9863C19.77 68.6679 22.6447 67.6504 25.9814 65.9238C30.0036 63.8426 34.5461 60.8095 39.2471 56.999C36.7191 54.8587 34.1658 52.5134 31.6406 49.9883C29.1149 47.4625 26.7688 44.9085 24.6279 42.3799ZM56.999 42.3799C54.8583 44.9083 52.5129 47.4627 49.9873 49.9883C47.4622 52.5134 44.9088 54.8587 42.3809 56.999C47.0819 60.8095 51.6243 63.8425 55.6465 65.9238C58.9835 67.6506 61.8588 68.6679 64.1064 68.9863C66.3959 69.3106 67.6306 68.8672 68.249 68.249C68.8674 67.6307 69.3117 66.3954 68.9873 64.1055C68.6689 61.8579 67.6515 58.9825 65.9248 55.6455C63.8434 51.6232 60.8097 47.0811 56.999 42.3799ZM40.8135 25.9219C38.2426 28.0847 35.6364 30.471 33.0537 33.0537C30.4714 35.636 28.0854 38.242 25.9229 40.8125C28.0858 43.3837 30.4717 45.9912 33.0547 48.5742C35.6369 51.1564 38.2431 53.5417 40.8135 55.7041C43.3841 53.5415 45.9908 51.1566 48.5732 48.5742C51.1562 45.9912 53.5421 43.3837 55.7051 40.8125C53.5426 38.242 51.1565 35.636 48.5742 33.0537C45.9913 30.4708 43.3846 28.0848 40.8135 25.9219ZM17.5225 12.6406C15.2325 12.3163 13.9973 12.7606 13.3789 13.3789C12.7608 13.9974 12.3174 15.2321 12.6416 17.5215C12.96 19.7692 13.9773 22.6452 15.7041 25.9824C17.7851 30.004 20.8183 34.545 24.6279 39.2451C26.7682 36.7172 29.1146 34.1647 31.6397 31.6397C34.1651 29.1142 36.7178 26.7675 39.2461 24.627C34.5461 20.8175 30.0048 17.7851 25.9834 15.7041C22.6462 13.9773 19.7702 12.959 17.5225 12.6406ZM68.249 13.3789C67.6306 12.7606 66.3954 12.3163 64.1055 12.6406C61.8578 12.959 58.9826 13.9773 55.6455 15.7041C51.6237 17.7852 47.0813 20.8171 42.3809 24.627C44.9095 26.7678 47.4635 29.1139 49.9893 31.6397C52.514 34.1644 54.8589 36.7175 56.999 39.2451C60.8088 34.5448 63.8428 30.0041 65.9238 25.9824C67.6507 22.6452 68.6689 19.7692 68.9873 17.5215C69.3115 15.2321 68.8672 13.9973 68.249 13.3789Z"
            fill={primaryColor}
          />
          <circle cx="32.0736" cy="31.7865" r="4.63804" fill={accentColor} />
        </svg>
      ),

      exekucia: (
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("service-icon", className)}
          {...props}
        >
          <rect
            x="29.7656"
            y="2.41651"
            width="28.238"
            height="28.238"
            transform="rotate(24.0212 29.7656 2.41651)"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <path
            d="M19.9833 40.4087V57.3291M19.9833 57.3291V74.2604M19.9833 57.3291L36.9147 57.3291M19.9833 57.3291H3.06299M31.9536 45.3623L19.989 57.3268M19.989 57.3268L8.0168 69.2991M19.989 57.3268L31.9614 69.2991M19.989 57.3268L8.02456 45.3624"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <circle cx="65.4731" cy="36.814" r="4" fill={accentColor} />
          <circle
            cx="61.4733"
            cy="65.0736"
            r="14.5543"
            stroke={primaryColor}
            strokeWidth="2"
          />
        </svg>
      ),

      strategia: (
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("service-icon", className)}
          {...props}
        >
          <circle cx="40.814" cy="40.814" r="4" fill={accentColor} />
          <circle
            cx="40.8138"
            cy="40.8138"
            r="11.1342"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <circle
            cx="40.8136"
            cy="40.8138"
            r="21.0397"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <circle
            cx="40.8138"
            cy="40.8138"
            r="31.5101"
            stroke={primaryColor}
            strokeWidth="2"
          />
        </svg>
      ),

      vzdelavanie: (
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox="0 0 106 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("service-icon", className)}
          {...props}
        >
          <path
            d="M0.75 52.804V12H14.4204M0.75 52.804H14.4204M0.75 52.804L9.45265 74.3452L11.6929 79.7305M22.0323 52.804H14.4204M14.4204 52.804V12M14.4204 12H22.0323M42.745 52.804V12H29.0746M42.745 52.804H29.0746M42.745 52.804L34.0423 74.3452L31.8021 79.7305M29.0746 52.804H21.4627M29.0746 52.804V12M29.0746 12H21.4627M11.6929 79.7305L13.9331 85.1158L21.3726 104.762C21.4047 104.847 21.5244 104.848 21.5587 104.764L29.5619 85.1158L31.8021 79.7305M11.6929 79.7305H31.8021"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <path
            d="M31.0748 80.5601H12.8477L21.5038 103.283C21.5685 103.452 21.8079 103.455 21.8761 103.286L31.0748 80.5601Z"
            fill={primaryColor}
            stroke={primaryColor}
            strokeWidth="2"
          />
          <rect x="14.521" y="12" width="14.3608" height="40.8731" fill={primaryColor} />
          <path
            d="M73.1063 105.543C73.5205 105.543 73.8563 105.207 73.8563 104.793C73.8563 104.379 73.5205 104.043 73.1063 104.043V105.543ZM21.7388 105.543H73.1063V104.043H21.7388V105.543Z"
            fill={primaryColor}
          />
        </svg>
      ),
    };

    return icons[service] as React.ReactElement;
  }
);
ServiceIcon.displayName = "ServiceIcon";

// ============================================
// Service labels (for convenience)
// ============================================

export const serviceLabels: Record<ServiceType, { sk: string; en: string }> = {
  diagnostika: { sk: "Diagnostika", en: "Diagnostics" },
  exekucia: { sk: "Exekúcia", en: "Execution" },
  strategia: { sk: "Stratégia", en: "Strategy" },
  vzdelavanie: { sk: "Vzdelávanie", en: "Education" },
};

export const serviceDescriptions: Record<ServiceType, { sk: string; en: string }> = {
  diagnostika: {
    sk: "Analyzujeme váš marketing a identifikujeme príležitosti na zlepšenie.",
    en: "We analyze your marketing and identify opportunities for improvement.",
  },
  exekucia: {
    sk: "Realizujeme marketingové kampane a aktivity.",
    en: "We execute marketing campaigns and activities.",
  },
  strategia: {
    sk: "Vytvárame strategické plány pre rast vašej značky.",
    en: "We create strategic plans for your brand growth.",
  },
  vzdelavanie: {
    sk: "Školenia a workshopy pre vaše marketingové tímy.",
    en: "Training and workshops for your marketing teams.",
  },
};

export { ServiceIcon };
