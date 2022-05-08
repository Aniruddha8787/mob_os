import "./App.css";

function App() {
  const oper_system_arr = ["Android", "Blackberry", "IPhone", "Window Phone"];
  const Mobile_manufact_arr = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <Main heading="Mobile Operating System" items={oper_system_arr} />
      <Main heading="Mobile Manufactures" items={Mobile_manufact_arr} />
    </div>
  );
}

function Main(props) {
  return (
    <div>
      <h2>{props.heading}</h2>
      <ul>
        {props.items.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
