import Alert from "./components/Alert";


function App() {
   

    return( <div className="alert alert-primary"> 
        <Alert>
            hello <span>world</span>

       ,<br></br> testing <strong>Alert</strong>
        </Alert>
         </div> 

);
}

export default App;