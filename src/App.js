import { useState } from 'react';
import './App.css';
import AddList from './Components/AddLIst/AddList';
import Modal from './Components/Modal/Modal';

const data =[
  {
    id: 1,
    title:"I love HTML",
    startDate:"20/10/2018"
  },
  {
    id: 2,
    title:"I love CSS",
    startDate:"25/1/2019"
  },
  {
    id: 3,
    title:"I love JAVASCRIPT",
    startDate:"2/12/2020"
  },
  {
    id: 4,
    title:"I love REACT",
    startDate:"01/O5/2021"
  }
  ]


function App() {
  const [list, setList] =useState(data)
  const [showModal, setShowModal] = useState(false)
  const handleDelate = (id)=>{
   const filterList =  list.filter(item=>item.id !== id)
   setList(filterList);
  }
 
  return (
    <div className="App">
      {
        list.map(item=>(
          <div onClick={()=>handleDelate(item.id)} key={item.id} className='card'>
          <h2>{item.title}</h2>
          <p>{item.startDate}</p>
          </div>
        ))
      }
      <div className="btn-container">
         <button className='add-list' onClick={(e)=>setShowModal(true)}> <h1>Add List</h1></button>
      </div>
      {
        showModal && <Modal>
        <AddList setList={setList} setShowModal = {setShowModal}/>
        <button onClick={(e)=>setShowModal(false)}>Close Modal</button>
        </Modal>
      } 
    </div>
  );
}

export default App;
