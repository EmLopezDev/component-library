import TestimonialCard from "./components/testimonial-card/TestimonialCard";
import { testimonialCardData } from "./components/testimonial-card/data";

const singelCardData = testimonialCardData[2];

const App = () => {
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
                    avatarUrl={singelCardData.avatarUrl}
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

export default App;
