import React from "react";
import "./sidebarchannel.css";
function SidebarChannel({ id, channel }) {
  return (
    <div className="sidebarchannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel}
      </h4>
    </div>
  );
}

export default SidebarChannel;
