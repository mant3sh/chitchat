import React from "react";
import "./sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

import HeadphonesIcon from "@mui/icons-material/Headphones";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/slices/userSlice";
import { setChannel } from "../features/slices/appSlice";
import { auth, db } from "../firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from "firebase/firestore";
import { resetChannel } from "../features/slices/appSlice";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  const ref = collection(db, "channels");
  const [channel, loading, error] = useCollection(ref);
  const user = useSelector((state) => state.user.user);
  const handelAddChannel = async () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName && channelName !== "") {
      const newchannel = {
        name: channelName,
        createdBy: user.dispalyName,
      };
      const update = await addDoc(ref, newchannel);
    }
  };

  const dispatch = useDispatch();
  const handellogout = () => {
    auth.signOut();

    dispatch(logout());
    dispatch(resetChannel());
  };
  const handelsetchannel = (id, name) => {
    let selectedchannel = {
      id: id,
      name: name,
    };
    dispatch(setChannel(selectedchannel));
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>ChitChat</h3>
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
          {channel?.docs.map((doc, idx) => (
            <div
              onClick={() => {
                handelsetchannel(doc.id, doc.data().name);
              }}
              key={idx}
            >
              <SidebarChannel id={doc.id} channel={doc.data().name} />
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
          <LogoutIcon onClick={handellogout} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
