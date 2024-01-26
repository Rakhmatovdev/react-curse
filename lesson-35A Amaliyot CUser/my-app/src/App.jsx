import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import UserList from "./components/userList/userList";
import NewUserForm from "./components/newUser/newUserForm";

function App() {
  const [showModal,setShowModal]=useState(false)
  const [users,setUsers]=useState([])

// Delete users
const deleteUser=(id)=>{
setUsers(prev=>prev.filter(e=>e.id !==id))
}

//Close modal
const closeModal=(e)=>{
  {e.target.className === "overlay" && setShowModal(false)}
  {e.key === "Escape" && setShowModal(false)}
}

//add user
const addUser=(data)=>{
setUsers(prev=>([...prev,data]))
setShowModal(false)
}

  return (
    <div className="App" onKeyDown={closeModal} onClick={closeModal}>
<Navbar userLength={users.length}/>
<main>
  <div className="no-users">
    {users.length===0 && <h2>No Users</h2>}
  </div>
  <UserList users={users} deleteUser={deleteUser}/>
</main>
{showModal &&  <NewUserForm addUser={addUser}/>}
<button onClick={()=>setShowModal(true)} className="create-user">Create User</button>
<Footer/>
    </div>
  );
}

export default App;
