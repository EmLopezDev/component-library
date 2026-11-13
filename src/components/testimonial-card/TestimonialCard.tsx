import "./TestimonialCard.css";
import defaultAvatart from "../../assets/testimonial-card/defaultAvatar.webp";

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
    const displayName = firstName + lastName || "User";
    return (
        comment && (
            <article className="testimonial__card">
                <div className="testimonial__header">
                    <img
                        className="testimonial__avatar"
                        src={avatarUrl || defaultAvatart}
                        alt={`${displayName} avatar`}
                    />
                    <div className="testimonial__meta-data">
                        <span className="testimonial__name">{displayName}</span>
                        <span className="testimonial__user-name">{userName}</span>
                    </div>
                </div>
                <p className="testimonial__comment">{comment}</p>
            </article>
        )
    );
};

export default TestimonialCard;
