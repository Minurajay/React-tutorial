import ListGroup from "./components/ListGroup";
function App() {
    let items = ['New york', 'New Jersey', 'New Mexico', 'New Hampshire', 'New Delhi'];  

    return <div> <ListGroup items={items} heading="Cities"/> </div> ;
}

export default App;