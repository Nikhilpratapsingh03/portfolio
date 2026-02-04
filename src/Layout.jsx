import { Route, Routes } from "react-router-dom";
import IntroSection from "./IntroSection";
import BlogRoute from "./components/BlogRoute";
import WorkRoute from "./components/WorkRoute";
const Layout = () => {
    return (
        <Routes>
            <Route path="/" element={<IntroSection />} />
            <Route path="/blog" element={<BlogRoute />} />
            <Route path="/work" element={<WorkRoute/>} />
        </Routes>
    )
}
export default Layout;