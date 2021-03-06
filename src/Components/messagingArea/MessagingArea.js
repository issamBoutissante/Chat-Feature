import React, { useState } from "react";
import "./index.css";
import axios from "axios";
axios.defaults.baseURL = "https://message-137c6.firebaseio.com/";
//the best thing to do is to comment 😂

const nothing = null;

const MessaginArea = (props) => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    const messages = document.querySelector(".messages");
    console.log(messages);
    let el = document.createElement("li");
    el.classList.add("messageStyle");
    let t = document.createTextNode(message);
    el.appendChild(t);
    messages.appendChild(el);
    axios
      .post("/messages.json", {
        date: new Date(),
        message: message,
      })
      .then(() => {})
      .catch((err) => {
        alert("not done");
        console.log(err);
      });
  };

  let [data, setData] = useState(null);
  if (!data) {
    axios
      .get("/messages.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {
        alert("not done");
        console.log(err);
      });
  }
  const done = () => {
    let messagesData = [];
    for (const key in data) {
      messagesData.push(data[key]);
    }
    return messagesData;
  };
  return (
    <form>
      <div className="messages_area">
        <ul className="messages">
          {done().map((info) => (
            <li key={info.message} className="messageStyle">
              {info.message}
            </li>
          ))}
        </ul>
      </div>
      <section className="writing_messages_area">
        <input typename="text" onChange={(e) => setMessage(e.target.value)} />
        <span onClick={sendMessage}>Send</span>
      </section>
    </form>
  );
};

export default MessaginArea;
