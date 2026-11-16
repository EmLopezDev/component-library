import BlogCard from "../../components/blog-card/BlogCard";
import { blogCardData } from "../../components/blog-card/blog-data";
import "./BlogCardPage.css";

const firstBlock = blogCardData[0];

const BlogCardPage = () => {
    return (
        <section className="blog__page">
            <h2>Single Blog Card</h2>
            <div className="blog__single">
                <BlogCard
                    id={firstBlock.id}
                    imageUrl={firstBlock.imageUrl}
                    category={firstBlock.category}
                    title={firstBlock.title}
                    bodyText={firstBlock.bodyText}
                />
            </div>
            <h2>Grid Layout Cards</h2>
            <div className="blog__grid__container">
                {blogCardData.map((entry) => {
                    return (
                        <BlogCard
                            key={entry.id}
                            id={entry.id}
                            imageUrl={entry.imageUrl}
                            category={entry.category}
                            title={entry.title}
                            bodyText={entry.bodyText}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default BlogCardPage;
