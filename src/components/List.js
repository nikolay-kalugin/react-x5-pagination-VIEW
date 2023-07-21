import React from 'react';

const List = ({users, loading}) => {

    // Рендерим Loading
    if(loading)
    {
        return <p style={{ display:'block', height:'380px'}}>loading...</p>
    } 

    // Рендерим список
    return (
        <>
            <ul style={{ display:'block', height:'380px'}}>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </>

    )

};

export default List;