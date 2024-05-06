import Message from "./message";

function App() {
  //jsx javascript xml
  const name = "World";
  if (name === "World") {
    return <Message />
  } else {
    return <h1> Hello {name} </h1>
  }
}

export default App;