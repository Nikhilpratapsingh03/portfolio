import { parsePath } from "react-router-dom";
import { BlogsData } from "../data/BlogData";
import styles from "../styles/blog.module.scss";
import Blog from "./BlogCard";
import Header from "../Header";

const BlogRoute = ({ params }) => {
    return (
        <>
            <Header />
            <div>
                <div className={styles.blogHeading}>Blog: {params}</div>
                <div className={styles.blogCardCont}>
                    {BlogsData.map((item, index) => (
                        <Blog item={item} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default BlogRoute;