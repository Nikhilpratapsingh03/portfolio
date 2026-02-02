import { Route, Routes } from "react-router-dom";
import IntroSection from "./IntroSection";
import BlogRoute from "./components/BlogRoute";
const Layout = () => {
    return (
        <Routes>
            <Route path="/" element={<IntroSection />} />
            <Route path="/blog" element={<BlogRoute />} />
            <Route path="/work" element={<div> Work </div>} />
        </Routes>
    )
}
export default Layout;