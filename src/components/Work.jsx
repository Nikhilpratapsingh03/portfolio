import styles from "../styles/work.module.scss"

const Work = ({ work }) => {
    return (
        <div className={styles.workCont} >
            <div>
                <img className={styles.workImg} src={work.img} height={200} width={200} alt='design' />
            </div>
            <div className={styles.workDesc}>
                <div className={styles.workTitle}>{work.title}</div>
                <div className={styles.workYear}>{work.year}</div>
                <div className={styles.workDesc}>{work.desc}</div>
            </div>
        </div >
    )
}

export default Work;