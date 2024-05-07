
function ListGroup() {
        let items = ['New york', 'New Jersey', 'New Mexico', 'New Hampshire', 'New Delhi'];  
    // items =[];
    

    
    return(
    <>
            
            <h1>List</h1>
            
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" key={item} onClick={(

                    ) => console.log(item, index)}>
                        {item}
                    </li>
                ))}
            </ul>
            </>
            );

}


export default ListGroup;