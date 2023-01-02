import React from "react";
import "./message.css";
import { Avatar } from "@mui/material";
function Message({ timestamp, user, message }) {
  return (
    <div className="message">
      <Avatar src={`${user.user.photo}`} sx={{ width: 24, height: 24 }} />
      <div className="message__info">
        <h6>
          {user.user.dispalyName ? user.user.dispalyName : "user"}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h6>

        <p className="actual__chat">{message}</p>
      </div>
    </div>
  );
}

export default Message;
