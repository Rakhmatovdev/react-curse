import { Fragment } from "react";
import "./UserList.css";
const UserList = ({ users,deleteUser }) => {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users &&
          users.map((user) => {
            return (
              <Fragment key={user.id}>
                <div className="card">
                  <div className="card-inner">
                    <img
                      src={user.img}
                      alt={user.name}
                      height={150}
                      width={150}
                    />
                    <h3>
                      {user.name} {user.lastName}, {user.age} age.
                    </h3>
                    <p>From: {user.from}</p>
                    <p>Job: {user.job}</p>
                    <p>Gender: {user.gender}</p>
                    <button onClick={()=>deleteUser(user.id)}>Delete</button>
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default UserList;
