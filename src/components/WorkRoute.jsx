import { FeaturedWork } from "../data/FeaturedWorks";
import Work from "./Work";

const WorkRoute = () => {
    return (
        <div className="work-rout" >
            <div className="work-header" >Work</div>
            <div className="work-card-cont" >
                {FeaturedWork.map((work, index) => (
                    <Work work={work} key={index} />
                ))}
            </div>
        </div>
    )
}

export default WorkRoute;