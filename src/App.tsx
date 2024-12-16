import './App.css';
import Create from './assets/illustration-create-post.webp'
import FiveStars from './assets/illustration-five-stars.webp'
import SchedulePosts from './assets/illustration-schedule-posts.webp'
import AI from './assets/illustration-ai-content.webp'
import Multiple from './assets/illustration-multiple-platforms.webp'

function App() {
  // grid-cols-4 grid-rows-4
  return (
    <div className=" container p-5 md:p-0 flex flex-col md:grid gap-6  grid-cols-4-cols-18vw grid-rows-[250px_190px_190px]">
      <div className="bg-yellow-100 md:h-[325px] text-2xl leading-6 font-semibold text-start flex flex-col justify-center pl-7 ">
        Create and <br /> schedule <br /> content<br /> <span className='italic text-purple-500 '>quicker.</span>
        <img src={Create} className='w-40 pt-2' />
      </div>
      <div className="bg-purple-500 col-span-2 text-white flex flex-col justify-center items-center gap-2 ">
        <p className='font-medium text-5xl'>
          Social Media <span className='text-yellow-500'>10x</span><br />
          <span className='italic'>Faster with  AI</span>
        </p>

        <img src={FiveStars} className='w-36' />
        <p className='text-sm opacity-85' >   Over 4,000 5-star reviews
        </p>
      </div>
      <div className="bg-purple-200 row-span-2 col-start-4 text-start overflow-hidden  ">
        <p className='text-2xl  font-semibold leading-5 p-5 '>  Schedule to<br /> social media.
        </p>
        <img src={SchedulePosts}
          className=' w-[280px] max-w-[280px] relative left-[25px] shadow-sm ' />
        <p className='text-sm opacity-85 p-5'>  Optimize post timings <br /> to publish content at <br /> the perfect time for <br /> your audience.
        </p>
      </div>
      <div className="bg-yellow-500 md:h-[325px] col-start-1 row-start-2 mt-20 text-start p-5   ">
        <p className=' text-2xl leading-6 font-semibold '>  Write your<br /> content<br /> using AI.
        </p>
        <img src={AI} className='w-44 max-w-max pt-11' />
      </div>
      <div className="bg-white row-start-2 col-start-2  p-5 overflow-hidden">
        <img src={Multiple} className='w-56 max-w-max' />

        <p className=' text-xl text-start  opacity-90 leading-5 font-semibold '>  Manage<br /> multiple<br /> accounts and <br />platforms.
        </p>
      </div>
      <div className="bg-yellow-500 row-start-2 col-start-3 p-5  overflow-hidden">
        <p className=' text-xl text-start  opacity-90 leading-5 font-semibold '>  Maintain a consistent<br /> posting<br /> schedule.        </p>
        <img src='./assets/illustration-consistent-schedule.webp ' className='w-36 max-w-max md:mt-7' />

      </div>
      <div className="bg-white row-start-3 col-start-2 flex flex-col justify-center items-center gap-2">
        <h1 className='font-medium text-5xl'>&gt;56%</h1>
        <p className='text-sm font-medium opacity-95 p-1'>faster audience growth</p>
        <img src='./assets/illustration-audience-growth.webp ' className='w-32 max-w-max' />

      </div>

      <div className="bg-purple-500 row-start-3 col-start-3 col-span-2 flex gap-2 text-white p-5  ">
        <img src='./assets/illustration-grow-followers.webp ' className='w-44 max-w-max' />
        <h1 className='text-3xl  font-medium leading-7 pt-8 text-start'>Grow followers <br />with non-stop <br />content.</h1>

      </div>

    </div>
  );
}

export default App;
