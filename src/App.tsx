import './App.css';

function App() {
  // grid-cols-4 grid-rows-4
  return (
    <div className="grid gap-3 grid-cols-[auto_auto_auto_auto] grid-rows-[70px_50px_50px]">
      <div className="bg-yellow-100 h-[90px]  ">Create</div>
      <div className="bg-purple-500 col-span-2 h- ">Social Media</div>
      <div className="bg-lime-200 row-span-2 col-start-4 ">Schedule</div>
      <div className="bg-yellow-500 h-[90px] col-start-1 row-start-2 mt-5  ">Write</div>
      <div className="bg-white row-start-2 col-start-2 ">Manage</div>
      <div className="bg-yellow-500 row-start-2 col-start-3 ">Maintain</div>
      <div className="bg-white row-start-3 col-start-2 ">Faster</div>

      <div className="bg-purple-500 row-start-3 col-start-3 col-span-2 ">Grow</div>

    </div>
  );
}

export default App;
