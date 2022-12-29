import React from "react";
import "./chat.css";
import Chatheader from "./Chatheader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";
function Chat() {
  return (
    <div className="chat">
      <Chatheader />
      <div className="chat__messages">
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input type="text " placeholder="enter the message" />
          <button className="chatinput__buttn" type="submmit">
            send message
          </button>
        </form>
        <div className="chat__inouticons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
