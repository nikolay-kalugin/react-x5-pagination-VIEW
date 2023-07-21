import React from 'react';

const Pagination = ({lastPage, paginate}) => {

    const pageNumbers = []

    
    for (let i=1; i <= lastPage ; i++ ) {
        pageNumbers.push(i)
    }


    return (
   
        <ul>
            {
                pageNumbers.map( number => 
                
                    
                    <li key={number} 
                        style={{
                                display:'inline-block', 
                                margin:'10px',
                                textAlign:'center',
                            }}>

                        <button  
                            style={{
                                width:'30px',
                                cursor: 'pointer'
                            
                            }}
                            onClick={() => paginate(number)}
                            >
                                {number}
                        </button>
                    </li>
                )
            }
        </ul>

    )

};

export default Pagination;