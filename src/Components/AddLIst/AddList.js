import React, { useState } from 'react';

const AddList = ({setList,setShowModal}) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newList={
            title : title,
            startDate : date,
            id : Date.now()
        }
        console.log(newList);
        setList(prevState=> [...prevState, newList])
        setShowModal(false)

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                 <span>Which programing language do you love?</span>
                 <input type="text" onChange={e=>setTitle(e.target.value)} name="" id="" placeholder=' Your Title' />
            </label>
            <label>
                 <span>When you started to learn this?</span>
                 <input type="date" onChange={e=>setDate(e.target.value)} name="" id="" placeholder='Date' />
            </label> 
            <button>Submit</button> 
        </form>
    );
};

export default AddList;