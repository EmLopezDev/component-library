import { type TestimonialCardProps } from "./TestimonialCard";
import sarahImage from "../../assets/testimonial_card/sarah.webp";
import marcusImage from "../../assets/testimonial_card/marcus.webp";
import emilyImage from "../../assets/testimonial_card/emily.webp";
import danielImage from "../../assets/testimonial_card/daniel.webp";
import sophiaImage from "../../assets/testimonial_card/sophia.webp";
import jamesImage from "../../assets/testimonial_card/james.webp";

export const testimonialCardData: TestimonialCardProps[] = [
    {
        id: 1,
        firstName: "Sarah",
        lastName: "Dole",
        userName: "@sarahdole",
        avatarUrl: sarahImage,
        comment:
            "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    },
    {
        id: 2,
        firstName: "Marcus Alexander",
        lastName: "Johnson",
        userName: "@marcus",
        avatarUrl: marcusImage,
        comment: "Amazing!",
    },
    {
        id: 3,
        firstName: "Emily",
        lastName: "Carter",
        userName: "@emily_carter_the_creative_designer_and_visual_artist",
        avatarUrl: emilyImage,
        comment:
            "I've tried several platforms over the years, but this one really stands out. The quality of the images is fantastic, the selection is constantly growing, and I love how easy it is to discover new artists. It's become an essential part of my creative workflow, and I honestly can't imagine going back to my old process.",
    },
    {
        id: 4,
        firstName: "Daniel Christopher",
        lastName: "Rivera-Smith",
        userName: "@danielriverasmith",
        avatarUrl: danielImage,
        comment: "Great experience!",
    },
    {
        id: 5,
        firstName: "Sophia",
        lastName: "Chen",
        userName: "@s",
        avatarUrl: sophiaImage,
        comment:
            "As someone who works with clients from different industries, finding the right visual assets can sometimes take hours. This platform has saved me so much time. I especially appreciate the variety of styles and the attention to detail in the artwork. Whether I'm working on a minimalist branding project or a more experimental digital campaign, I can always find something inspiring here. The experience has been consistently excellent, and I'd happily recommend it to other designers.",
    },
    {
        id: 6,
        firstName: "James",
        lastName: "Wilson",
        userName: "@james_wilson_design_studio_creative_director_2026",
        avatarUrl: jamesImage,
        comment: "Good.",
    },
];
