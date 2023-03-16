import axios from "axios";
import { useEffect, useState } from "react";
import FriendsList from "./components/FriendsList";

function App() {
  const [dataBase, setDataBase] = useState(null);
  const [statePage, setStatePage] = useState("friendsCon");
  const [currentData, setCurrentData] = useState(null);
  // console.log(currentData)

  const handaleFriend = () => {
    console.log("clicked");
    const friendList = document.querySelector(".friends-list");
    friendList.style.display = "block";
  };

  const handleClick = (data) => {
    setStatePage("friendsList");

    {
      dataBase.map((datas) =>
        datas.cell === data.cell ? setCurrentData(datas) : null
      );
    }
  };

  useEffect(() => {
    async function dataFetch() {
      const response = await axios.get("https://randomuser.me/api/?results=20");

      // console.log(response.data)
      setDataBase(response.data.results);
    }

    dataFetch();
  }, []);

  return (
    <div className="App">
      {statePage === "friendsCon" ? (
        <>
          <h1 onClick={handaleFriend}>Friends</h1>
          <div className="friends-list">
            {dataBase !== null
              ? dataBase.map((data) => (
                  <ul className="friendsCard-Container">
                    <li
                      key={data.id.name}
                      onClick={() => handleClick(data)}
                      className="card"
                    >
                      <img src={data.picture.thumbnail}></img>
                      <p> {data.id.name}</p>
                    </li>
                  </ul>
                ))
              : null}
          </div>
        </>
      ) : null}

      {statePage === "friendsList" ? (
        <FriendsList statePage={statePage} currentData={currentData} />
      ) : null}
    </div>
  );
}

export default App;
