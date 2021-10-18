import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
export declare const footerLinks: FooterLinkType[];
export declare const socials: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
})[];
export declare const langs: Language[];
