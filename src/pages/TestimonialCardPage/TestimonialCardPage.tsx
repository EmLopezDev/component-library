import TestimonialCard from "../../components/testimonial-card/TestimonialCard";
import { testimonialCardData } from "../../components/testimonial-card/data";
import "./TestimonialCardPage.css";

const singelCardData = testimonialCardData[2];

const TestimonialCardPage = () => {
    return (
        <section className="testimonial__page">
            <h2>Single Card</h2>
            <div className="testimonial__single">
                <TestimonialCard
                    key={singelCardData.id}
                    id={singelCardData.id}
                    firstName={singelCardData.firstName}
                    lastName={singelCardData.lastName}
                    userName={singelCardData.userName}
                    avatarUrl=""
                    comment={singelCardData.comment}
                />
            </div>
            <h2>Grid Layout Cards</h2>
            <div className="testimonial__container">
                {testimonialCardData.map((entry) => {
                    return (
                        <TestimonialCard
                            key={entry.id}
                            id={entry.id}
                            firstName={entry.firstName}
                            lastName={entry.lastName}
                            userName={entry.userName}
                            avatarUrl={entry.avatarUrl}
                            comment={entry.comment}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default TestimonialCardPage;
