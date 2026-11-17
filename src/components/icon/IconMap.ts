import { GithubIcon, LinkedInIcon, InstagramIcon, XIcon } from "./CustomIcons";

export const iconRegistry = {
    github: GithubIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    x: XIcon,
} as const;

export type IconName = keyof typeof iconRegistry;
