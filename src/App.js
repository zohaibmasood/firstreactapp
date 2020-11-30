import Test from "./components/Test";

function App() {
  const name = ["Zohaib", "Aziz", "Chandu", "Faraaz", "Sai", "Ahmad"];
  const random = Math.floor(Math.random() * name.length);

  return (
    <div className="App">
      <h1>Hello there.!!!!</h1>
      <Test name={name[random]} />
    </div>
  );
}

export default App;
