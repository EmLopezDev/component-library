import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/HomePage/HomePage.tsx";

const TestimonialCardPage = lazy(
    () => import("./pages/TestimonialCardPage/TestimonialCardPage.tsx"),
);
const BlogCardPage = lazy(() => import("./pages/BlogCardPage/BlogCardPage.tsx"));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/components/testimonial-card"
                        element={<TestimonialCardPage />}
                    />
                    <Route
                        path="/components/blog-card"
                        element={<BlogCardPage />}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
