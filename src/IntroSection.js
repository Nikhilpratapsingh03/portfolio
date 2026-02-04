import Work from './components/Work';
import WorkRoute from './components/WorkRoute';
import { FeaturedWork } from './data/FeaturedWorks';
import Footer from './Footer';
import Header from './Header';
import './intro.css';

function IntroSection() {
  return (
    <>
      <Header />
      <div className="intro">
        <div className="cont">
          <div className='name-cont'>
            <p>
              Hi, I am Nikhil Pratap Singh, <br />Frontend Developer
            </p>
            <p className='desc'>
              A passionate Front-End Developer skilled in building responsive, user-friendly, and visually appealing web  applications using HTML, CSS, JavaScript, and modern frameworks. <br /> Focused on clean code, performance optimization, and creating seamless user experiences across all devices. Always eager to learn new technologies and improve design-to-code implementation.
            </p>
            <button className='btn'>Download Resume</button>
          </div>
          <div className='img-cont'>
            <img className="img1" src="https://i.pinimg.com/736x/66/b8/21/66b821927b7605b5c92fd0471019968f.jpg" width={200} height={200} alt='train-img' />
          </div>
        </div>
        <div className='cont2'>
          <div className='box1'>
            <h3>Recent posts</h3>
            <h4>View all</h4>
          </div>
          <div className='main'>
            <div className='box2'>
              <div className='heading4'>Making a design system from scratch</div>
              <div className='cont3'>
                <div className='date'>12 Feb 2020</div>
                <div className='date'>Design,Pattern</div>
              </div>
              <div className='desc1'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis <br /> enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
            <div className='box3'>
              <div className='heading5'>Creating pixel perfect icons in Figma</div>
              <div className='cont3'>
                <div className='date'>12 feb 2020</div>
                <div className='date'>Figma,Icon Design</div>
              </div>
              <div className='desc1'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat<br /> duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="work-card-cont" >
        {FeaturedWork.map((work, index) => (
          <Work work={work} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default IntroSection;
