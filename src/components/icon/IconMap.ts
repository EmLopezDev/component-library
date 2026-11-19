import { Star } from "lucide-react";
import { GithubIcon, LinkedInIcon, InstagramIcon, XIcon } from "./CustomIcons";

export const iconRegistry = {
    github: GithubIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    x: XIcon,
    star: Star,
} as const;

export type IconName = keyof typeof iconRegistry;
