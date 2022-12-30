import React, { useEffect } from "react";
import "./message.css";
import { Avatar } from "@mui/material";
function Message({ timestamp, user, message }) {
  return (
    <div className="message">
      <Avatar src={user.user.photo} />
      <div className="message__info">
        <h4>
          {user.user.dispalyName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
