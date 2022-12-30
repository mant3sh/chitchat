import React, { useState, useRef } from "react";
import "./chat.css";
import Chatheader from "./Chatheader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";

import SendIcon from "@mui/icons-material/Send";
import {
  query,
  collection,
  addDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";

function Chat() {
  const scroll = useRef(0);
  const [chat, setChat] = useState("");
  const channel = useSelector((state) => state.app);
  const user = useSelector((state) => state.user);
  const refference = collection(db, "channels", channel?.channelId, "messages");
  const q1 = query(refference, orderBy("time"));
  const [message, loading, error] = useCollection(q1, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const handelchatsubmit = async (e) => {
    e.preventDefault();
    if (chat !== "") {
      const ref = collection(db, "channels", channel?.channelId, "messages");
      const sendmessage = {
        message: chat,
        user: user,
        time: Date.now(),
        timeStamp: serverTimestamp(),
      };
      const update = await addDoc(ref, sendmessage);
      setChat("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="chat">
      <Chatheader chatname={channel?.channelName} />
      <div className="chat__messages">
        {message?.docs.map((doc) => (
          <div key={doc.id}>
            <Message
              timestamp={doc.data().timeStamp}
              user={doc.data().user}
              message={doc.data().message}
            />
          </div>
        ))}
        <span ref={scroll}></span>
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form onSubmit={handelchatsubmit}>
          <input
            type="text "
            value={chat}
            onChange={(e) => {
              setChat(e.target.value);
            }}
            placeholder="enter the message"
          />
          <button
            disabled={!channel.channelName}
            className="chatinput__buttn"
            type="submit"
          >
            <SendIcon />
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
