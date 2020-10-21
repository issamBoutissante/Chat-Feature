import axios from "axios";
axios.defaults.baseURL = "https://message-137c6.firebaseio.com/";

const loginFunctions = {
  signIn: function (name) {
    loginFunctions.isAccountExist(name).then((value) => {
      value
        ? alert("this account exist ")
        : alert("this account doesnt exist...create an account...");
    });
  },
  signUp: function (name) {
    if (name.length <= 3) {
      alert("the name must be at least 3 caracters");
      return;
    }
    loginFunctions.addAccount(name);
  },
  addAccount: function (name) {
    loginFunctions.isAccountExist(name).then((res) => {
      if (res) {
        alert("this name is already used choose another one");
        return;
      }
      const info = {
        name: name,
        friends: "Null",
        chats: "Null",
      };
      axios.post("/accounts.json", info).then((res) => {
        alert("you are signed in");
      });
    });
  },
  isAccountExist: function (name) {
    let isExist = axios.get("./accounts.json").then((res) => {
      for (const key in res.data) {
        if (name == res.data[key].name) {
          return true;
        }
      }
      return false;
    });
    return isExist;
  },
};
export default loginFunctions;
