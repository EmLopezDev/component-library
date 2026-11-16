import { type BlogCardProps } from "./BlogCard";
import livingroomImg from "../../assets/blog-card/interior.jpg";
import workspaceImg from "../../assets/blog-card/workspace.webp";
import kitchenImg from "../../assets/blog-card/kitchen.webp";
import bedroomImg from "../../assets/blog-card/bedroom.webp";
import organizationImg from "../../assets/blog-card/organization.webp";
import bathroomImg from "../../assets/blog-card/bathroom.webp";

export const blogCardData: BlogCardProps[] = [
    {
        id: 1,
        category: "Interior",
        imageUrl: livingroomImg,
        title: "Top 5 Living Room Inspirations",
        bodyText:
            "Discover vibrant colors, cozy textures, and timeless accents that make your living room feel effortlessly inviting.",
    },
    {
        id: 2,
        category: "Workspace",
        imageUrl: workspaceImg,
        title: "Create Your Dream Home Office",
        bodyText:
            "Transform your workspace with smart storage, calming colors, and simple details that inspire productivity.",
    },
    {
        id: 3,
        category: "Kitchen",
        imageUrl: kitchenImg,
        title: "A Beautifully Organized Kitchen",
        bodyText:
            "Make everyday cooking easier with clever storage ideas, open shelving, and stylish countertop essentials.",
    },
    {
        id: 4,
        category: "Bedroom",
        imageUrl: bedroomImg,
        title: "Simple Ways to Refresh Your Bedroom",
        bodyText:
            "Layer soft fabrics, warm lighting, and natural textures to create a peaceful retreat you'll love coming home to.",
    },
    {
        id: 5,
        category: "Organization",
        imageUrl: organizationImg,
        title: "Declutter Your Closet in Style",
        bodyText:
            "Turn a crowded closet into a functional space with thoughtful layouts, matching baskets, and easy organizing habits.",
    },
    {
        id: 6,
        category: "Bathroom",
        imageUrl: bathroomImg,
        title: "Small Bathroom, Big Style",
        bodyText:
            "Maximize every inch with space-saving shelves, elegant accessories, and practical storage that looks beautiful.",
    },
];
