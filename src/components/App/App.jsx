import "./App.css";
import Profile from "../Profile/Profile";
import userData from "../../userData.json";

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
    </>
  );
};

export default App;
