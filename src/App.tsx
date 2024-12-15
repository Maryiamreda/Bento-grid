import './App.css';
import Create from '../public/assets/images/illustration-create-post.webp'
function App() {
  // grid-cols-4 grid-rows-4
  return (
    <div className="grid gap-6  grid-cols-4-cols-18vw grid-rows-[250px_190px_190px]">
      <div className="bg-yellow-100 h-[325px] text-2xl  font-semibold text-start flex flex-col justify-center pl-7 ">
        Create and <br /> schedule <br /> content<br /> <span className='italic text-purple-500 '>quicker.</span>
        <img src={Create} className='w-40 pt-2' />
      </div>
      <div className="bg-purple-500 col-span-2 text-white flex flex-col justify-center items-center gap-2 ">
        <p className='font-medium text-5xl'>
          Social Media <span className='text-yellow-500'>10x</span><br />
          <span className='italic'>Faster with  AI</span>
        </p>

        <img src='../public/assets/images/illustration-five-stars.webp' className='w-36' />
        <p className='text-sm opacity-85' >   Over 4,000 5-star reviews
        </p>
      </div>
      <div className="bg-purple-200 row-span-2 col-start-4 "></div>
      <div className="bg-yellow-500 h-[325px] col-start-1 row-start-2 mt-20  "></div>
      <div className="bg-white row-start-2 col-start-2 "></div>
      <div className="bg-yellow-500 row-start-2 col-start-3 "></div>
      <div className="bg-white row-start-3 col-start-2 "></div>

      <div className="bg-purple-500 row-start-3 col-start-3 col-span-2 "></div>

    </div>
  );
}

export default App;
