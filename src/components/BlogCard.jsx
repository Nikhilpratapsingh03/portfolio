import styles from "../styles/blog.module.scss";

const Blog = ({item}) => {
    return (
        <div className={styles.blogCard}>
            <div className={styles.blogTitle}>{item.title}</div>
            <div className={styles.blogCont}>
                <div className={styles.blogTime}>{item.date}</div>
                <div className={styles.blogLine}>|</div>
                <div className={styles.blogDesg}>{item.designation}</div>
            </div>
            <div className={styles.blogDesc}>{item.desc}</div>
        </div>
    )
}


export default Blog;