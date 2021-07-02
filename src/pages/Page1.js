import React, { useState, useEffect } from 'react';
import Table from '../components/Table'
import { fetchUserData } from '../actions/index'
import { Link } from 'react-router-dom';



const column = [
    { name: 'userId', label: 'User ID' },
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'Title' },
    { name: 'completed', label: 'Completed' }
]


const URL = "https://jsonplaceholder.typicode.com/users/1/todos"


const Page1 = () => {
    const [finalRow, setFinalRow] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        ( async () => {
            try {
                const res = await fetchUserData(URL);
                setFinalRow(res.data);
                setLoading(false)
            
            } catch (error) {
                console.log("something went wrong!")    
            }

        })()
    }, [finalRow])
    
    return (
        <>
            {
                loading ? 'loading...'
                : (
                    <div className="container">
                        <div className="header">
                            <h1>Todo List</h1>
                            <Link to="/page2"> page2 </Link>
                        </div>
                        <Table row={finalRow} column={column} />
                    </div>
                )
            }
        </>
    )
};


export default Page1;
