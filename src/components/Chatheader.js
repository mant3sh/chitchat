import React from "react";
import "./chatheader.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

function Chatheader() {
  return (
    <div className="chatheader">
      <div className="chatheader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
        </h3>
      </div>
      <div className="chatheader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleAltIcon />
        <div className="chatheader__search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default Chatheader;
