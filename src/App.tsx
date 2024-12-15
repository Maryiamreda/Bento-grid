import './App.css';

function App() {
  // grid-cols-4 grid-rows-4
  return (
    <div className="grid gap-6  grid-cols-4-cols-18vw grid-rows-[250px_190px_190px]">
      <div className="bg-yellow-100 h-[325px]  "></div>
      <div className="bg-purple-500 col-span-2 h- "></div>
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
