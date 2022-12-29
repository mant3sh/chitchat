import React, { useEffect, useState } from "react";
import "./sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/slices/userSlice";
import { auth, db } from "../firebaseConfig";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  // useEffect(() => {
  //   db.collection("channels").onSnapshot((snapshot) =>
  //     setChannels(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         channel: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);
  const handelAddChannel = () => {
    const channelName = prompt("Enter a new channel name");
  };
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handellogout = () => {
    auth.signOut();
    dispatch(logout());
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>mahantesha</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handelAddChannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          {channels.map((i, idx) => (
            <div key={idx}>
              <SidebarChannel />
            </div>
          ))}
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src={user.photo} />
        <div className="sidebar__profileinfo">
          <h3>{user.dispalyName}</h3>
          <p>#{user.uid.slice(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadphonesIcon />
          <SettingsIcon onClick={handellogout} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
