import React from "react";
import "./message.css";
import { Avatar } from "@mui/material";
function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          hello<span className="message__timestamp">this is time stamp</span>
        </h4>
        <p>this is actual message</p>
      </div>
    </div>
  );
}

export default Message;
