import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import styles from "./styles/footer.module.scss";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerComp}>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/share/1G1dGgrcFW/" >
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a>
                            <FaInstagramSquare />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/RoyaL_Raj03" target="_blank" >
                            <FaSquareXTwitter />
                        </a>
                    </li>
                    <li>
                        <a>
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;