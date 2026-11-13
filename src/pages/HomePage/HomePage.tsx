import { Link } from "react-router";

const Home = () => {
    return (
        <section>
            <h1>Component Library</h1>
            <ul>
                <li>
                    <Link to="/components/testimonial-card">Testimonial Card</Link>
                </li>
            </ul>
        </section>
    );
};

export default Home;
