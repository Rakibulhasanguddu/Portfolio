import 'animate.css';
import Skill from '../component/Skill';
import Portfolio from '../component/Portfolio';
import Contact from '../component/Contact';

const Home = () => {
  return (
    <div>
    <div className="lg:flex justify-center items-center  mt-10">
      <div>
        <h1 className="ml-5">HELLO, MY NAME IS</h1>
        <h1 className="lg:text-6xl text-4xl  font-bold lg:mt-5 mt-1 ml-5">Rakibul  Hasan</h1>
        <h1 className="mt-5 text-xl text-yellow-400 font-bold ml-5">I AM Web Developer</h1>
        <h1 className="mt-5 font-bold lg:w-[600px] ml-5">From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at WordPress. I love to talk with you about your unique. </h1>
        <button className="btn bg-yellow-400 hover hover:bg-green-500 text-white font-bold text-xl mt-10 ml-5">Contact</button>
      </div>
      <div>
        <img src="https://i.postimg.cc/5tV9bYLp/ali-min.png" alt="" />
        <div className="lg:flex">
          <div className="lg:relative -top-44 right-28 mt-6 ">
            <h1 className="lg:w-[330px] lg:h-[120px] h-[120px]  border-2 border-yellow-500 bg-blue-950 rounded-3xl animate__animated animate__bounce animate__delay-3s">
              <h1 className="pl-2 lg:pt-4 pt-5 text-center text-3xl font-bold"> 1+<br /> Year of Experience
              </h1>
            </h1>
          </div>
          <div className="lg:relative -top-20 mt-5">
            <h1 className="lg:w-[330px] lg:h-[120px] h-[120px]  border-2 border-yellow-500 bg-blue-950 rounded-3xl">
              <h1 className="pl-2 lg:pt-4 pt-5 text-center text-3xl font-bold"> 13+<br /> Complete Project
              </h1>
            </h1>
          </div>
        </div>

      </div>

      
    </div>

    <Skill></Skill>
    <Portfolio></Portfolio>
    <Contact></Contact>
    </div>
  );
};

export default Home;