import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import AuthContext from "./context/AuthContext";

const Header = () => {
  const user = useContext(AuthContext);
  const nav = useNavigate();
  return (
    <>
      <div className="bg-blue-900  text-white flex-1 w-full flex justify-between items-center py-5 px-4 md:px-10">
        <div className="text-2xl font-bold">
          <p>Chat App</p>
        </div>
        {user?.uid ? (
          <div className="flex gap-5 items-center">
            <p>{user?.displayName}</p>

            <p
              onClick={() => signOut(auth)}
              className="cursor-pointer py-2 px-4 rounded-md bg-black"
            >
              Logout
            </p>
          </div>
        ) : (
          <p
            onClick={() => nav("/")}
            className="cursor-pointer py-2 px-4 rounded-md bg-black"
          >
            Login
          </p>
        )}
      </div>
    </>
  );
};

export default Header;
