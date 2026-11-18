import { type ProfileCardProps } from "./ProfileCard";
import marcus from "../../assets/profile-card/marcus-chen.webp";
import olivia from "../../assets/profile-card/olivia-bennett.webp";
import javier from "../../assets/profile-card/javier-rodriguez.webp";
import priya from "../../assets/profile-card/priya-patel.webp";
import theo from "../../assets/profile-card/theo-brooks.webp";
import amara from "../../assets/profile-card/amara-okafor.webp";
import sarah from "../../assets/profile-card/sarah-dole.webp";

const email = "emlopezdev@gmail.com";
const instagram =
    "https://www.instagram.com/emlopezdev?fqnt=MTV0Nm5jYnBlNmxtbw%3D%3D&utm_source=qr";
const x = "https://x.com/emlopezdev";
const linkedin = "https://www.linkedin.com/in/emlopezdev/";
const github = "https://github.com/EmLopezDev";

export const profileCardData: ProfileCardProps[] = [
    {
        id: 1,
        name: "Sarah Dole",
        role: "Front End Engineer",
        company: "Microsoft",
        avatar: sarah,
        email,
        description:
            "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
        socialMedia: {
            github,
            linkedin,
            instagram,
            x,
        },
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "Senior Front End' Engineer",
        company: "Spotify",
        avatar: marcus,
        description:
            "I write CSS until it behaves. Powered by iced coffee, questionable playlists, and the occasional successful deploy.",
        socialMedia: {
            github,
            linkedin,
        },
    },
    {
        id: 3,
        name: "Olivia Bennett",
        role: "UX Designer",
        company: "Figma",
        avatar: olivia,
        email,
        description:
            "Making pixels pretty and buttons impossible to ignore. I have 47 unfinished side projects and zero regrets.",
        socialMedia: {
            github,
            linkedin,
            x,
        },
    },
    {
        id: 4,
        name: "Javier Alejandro Fernandez Rodriguez",
        role: "Full Stack Developer",
        company: "Airbnb",
        avatar: javier,
        email,
        description:
            "Professional bug creator and part-time bug exterminator. My code works perfectly... until someone watches.",
        socialMedia: {
            github,
        },
    },
    {
        id: 5,
        name: "Priya Patel",
        role: "AI Research Engineer",
        company: "Google DeepMind",
        avatar: priya,
        email,
        description:
            "Teaching computers to think while forgetting where I put my keys. Currently debugging both problems.",
        socialMedia: {
            linkedin,
        },
    },
    {
        id: 6,
        name: "Theo Brooks",
        role: "DevOps Engineer",
        company: "Netflix",
        avatar: theo,
        description:
            "It works on my machine. Unfortunately, my machine isn't production. Kubernetes whisperer, allegedly.",
        socialMedia: {
            github,
            linkedin,
            instagram,
            x,
        },
    },
    {
        id: 7,
        name: "Amara Okafor",
        role: "Creative Developer & Motion Designer",
        company: "Adobe",
        avatar: amara,
        email,
        description:
            "I make websites dance, buttons bounce, and browsers occasionally question their life choices. Animation is my cardio.",
        socialMedia: {
            github,
            instagram,
            x,
        },
    },
];
