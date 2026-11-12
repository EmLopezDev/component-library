import "./TestimonialCard.css";

export type TestimonialCardProps = {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    avatarUrl: string;
    comment: string;
};

const TestimonialCard = ({
    firstName,
    lastName,
    userName,
    avatarUrl,
    comment,
}: TestimonialCardProps) => {
    return (
        <article className="testimonial__card">
            <div className="testimonial__header">
                <img
                    className="testimonial__avatar"
                    src={avatarUrl}
                    alt={`${firstName} ${lastName} picture`}
                />
                <div className="testimonial__meta-data">
                    <h3 className="testimonial__name">
                        {firstName} {lastName}
                    </h3>
                    <span className="testimonial__user-name">{userName}</span>
                </div>
            </div>
            <p className="testimonial__comment">{comment}</p>
        </article>
    );
};

export default TestimonialCard;
