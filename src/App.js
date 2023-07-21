import React, { useState, useEffect } from 'react';
import List from './components/List';
import Pagination from './components/Pagination';

function App() {

  // States
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)

  const [firstPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  // Подгружаем данные с сервера
  useEffect(() => {

    setLoading(true)

    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`) 
      .then( res => res.json() )
      .then( data => {

          setUsers(data.results);
          setLastPage(data.info.pages);

      })
      .then( () => ( 
          setLoading(false)
          ))

  }, [currentPage]);


  return (
    <div className="container" style={{ width:'500px', margin:'0 auto'}}>

      <h1>Users</h1>
      
      <List users={users} loading={loading} /> 
    
      <button 
        onClick={(event) => setCurrentPage( prev => prev - 1 ) } 
        disabled={currentPage === firstPage ? 1 : 0}
        style={{marginRight: 10, cursor: 'pointer'}}
      >
        prev page
      </button>

      <button 
        onClick={() => setCurrentPage( prev => prev + 1 )}
        disabled={currentPage === lastPage ? 1 : 0}
        style={{cursor: 'pointer'}}
      >
        next page 
      </button>

      <Pagination lastPage={lastPage} paginate={paginate} />

    </div>
  );
}

export default App;


