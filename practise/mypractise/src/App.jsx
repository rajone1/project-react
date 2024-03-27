import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="text-red-400 text-4xl">practise</h1>
        <Name></Name>
        <Name></Name>
        <Name></Name>
      </div>
    </>
  );
}

function Name() {
  let name = "shaon";
  let information = {
    age: 32,
    address: "rajshahi",
  };

  return (
    <div>
      <h1>my name is {name}</h1>
      <h2>
        my age is {information.age} and i live in {information.address}
      </h2>
    </div>
  );
}

export default App;
