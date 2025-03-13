import "./App.css";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import userData from "../../userData.json";
import friends from "../../friends.json";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        status={userData.status}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
