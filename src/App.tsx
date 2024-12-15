import './App.css';

function App() {
  // grid-cols-4 grid-rows-4
  return (
    <div className="grid  gap-6">
      <div className="bg-yellow-100 row-span-2 ">Create</div>
      <div className="bg-purple-500 col-span-2 h- ">Social Media</div>
      <div className="bg-lime-200 row-span-3 ">Schedule</div>
      <div className="bg-yellow-500 row-start-3 row-span-2 ">Write</div>
      <div className="bg-white ">Manage</div>
      <div className="bg-yellow-500 ">Maintain</div>
      <div className="bg-white row-start-4 ">Faster</div>

      <div className="bg-purple-500 row-start-4 col-span-2 ">Grow</div>

    </div>
  );
}

export default App;
