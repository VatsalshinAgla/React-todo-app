import React from 'react'

import './style/ListItems.css'

function ListItems(props) {
    // const data = [

    //     { id: 1, task: "buy a tshirt" },
    
    //     { id: 2, task: "read newspaper and books" },
    
    //     { id: 3, task: "go for adventure" },
    //     { id: 1, task: "buy a tshirt" },
    
    //     { id: 2, task: "read newspaper and books" },
    
    //     { id: 3, task: "go for adventure" }
    //   ];
    
   
  

    return (
      <div className='user'>

        <p>{props.title}</p>
        <input type='radio' className='radiobtn'/>
      </div>
    );
  };

export default ListItems