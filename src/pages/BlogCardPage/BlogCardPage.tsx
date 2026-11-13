import BlogCard from "../../components/blog-card/BlogCard";
import { blogCardData } from "../../components/blog-card/blog-data";

const firstBlock = blogCardData[0];

const BlogCardPage = () => {
    return (
        <section>
            <h2>Single Blog Card</h2>
            <BlogCard
                id={firstBlock.id}
                imgUrl={firstBlock.imgUrl}
                category={firstBlock.category}
                title={firstBlock.title}
                bodyText={firstBlock.bodyText}
            />
        </section>
    );
};

export default BlogCardPage;
