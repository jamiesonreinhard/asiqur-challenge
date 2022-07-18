import "../styles/users.css";

const Users = ({users}) => {
  return (
    <div class="parent-wrapper">
      <div class="parent">
        {users.map((user, index) => (
          <div className={index == 0 ? "child first" : "child"} key={index}>
            <img src={user.avatar} alt="user picture" />
            <h2>{user.first_name + " " + user.last_name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

