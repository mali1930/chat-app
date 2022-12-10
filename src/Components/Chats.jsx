import React, { useContext, useRef, useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import AuthContext from "./context/AuthContext";
import axios from "axios";

const Chats = () => {
  const user = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      nav("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "7b88ad74-591e-4179-b839-bd4f8bd86c40",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
        });
        axios
          .post("https://api.chatengine.io/users", formdata, {
            headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY },
          })
          .then(() => setLoading(false))
          .catch((error) => console.log(error));
      });
  }, [user, nav]);
  if (!user || loading)
    return (
      <div className="text-5xl bg-blue-200 text-white flex justify-center h-screen items-center">
        Loading...
      </div>
    );
  return (
    <div>
      <Header />
      <div>
        <ChatEngine
          height="82vh"
          projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
          userName={user?.email}
          userSecret={user?.uid}
        />
      </div>
    </div>
  );
};

export default Chats;
