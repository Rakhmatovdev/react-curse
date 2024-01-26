import "./App.css";

function App() {
  let name = "Jasur"
  
  const handleClick = () => {
    name = "Farrux"
    console.log(name)
  }
  return (
    <div className="App">
      <div className="App-header">
      <h1>My name is {name}</h1>
        <button onClick={handleClick}>Change name</button>
      </div>
    </div>
  );
}
export default App;

