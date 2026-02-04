import { FeaturedWork } from "../data/FeaturedWorks";
import Footer from "../Footer";
import Header from "../Header";
import Work from "./Work";

const WorkRoute = () => {
    return (
        <>
            <Header />
            <div className="work-rout" >
                <div className="work-header" >Work</div>
                <div className="work-card-cont" >
                    {FeaturedWork.map((work, index) => (
                        <Work work={work} key={index} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default WorkRoute;