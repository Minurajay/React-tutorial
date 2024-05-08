import React, { useState } from 'react';

//{items : [], heading : string}
interface Props {
    items: string[];
    heading: string;
//(item: string) => void
     onSelectItem: (item: string) => void;

}
function ListGroup({items, heading, onSelectItem}: Props) {
    // items =[];


    const [seletectedIndex, setSeletectedIndex] = useState(-1);
    
    //event handler
    // const handleClick = (event: MouseEvent) => console.log(event)

    
    return(
    <>
            
            <h1>{heading}</h1>
            {items.length === 0 && <p>There are no items in the list</p>}
            
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={seletectedIndex== index ? 'list-group-item active': 'list-group-item' } key={item} onClick={() => {setSeletectedIndex(index); onSelectItem(item);}}>
                        {item}
                    </li>
                ))}
            </ul>
            </>
            );

}


export default ListGroup;