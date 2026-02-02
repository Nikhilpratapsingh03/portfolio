import Work from './components/Work';
import { FeaturedWork } from './data/FeaturedWorks';
import './intro.css';


function RecentPost() {

  return (
    <div className='maincont'>
      <div className='work'>
        <div className='posts'>Featured works</div>

        {FeaturedWork.map((work, index) => (
          <Work work={work} key={index} />
        ))}

      </div>
      <div>

      </div>
    </div>
  );
}

export default RecentPost;