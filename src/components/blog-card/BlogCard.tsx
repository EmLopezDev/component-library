import "./BlogCard.css";

export type BlogCardProps = {
    id: number;
    category: string;
    imgUrl: string;
    title: string;
    bodyText: string;
};

const BlogCard = ({ category, imgUrl, title, bodyText }: BlogCardProps) => {
    return (
        <article className="blog__card">
            <img
                className="blog__card__image"
                src={imgUrl}
                alt={`${title} image`}
            />
            <div className="blog__card__content">
                <div className="blog__card__content__header">
                    <span className="blog__card__badge">{category}</span>
                    <span className="blog__card__title">{title}</span>
                </div>
                <div className="blog__card__content__body">
                    <p className="blog__card__text">{bodyText}</p>
                    <button className="blog__card__button">Read more &#x2794;</button>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
