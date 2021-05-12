import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
     <SidebarRow
        src="https://images.carandbike.com/bike-images/large/bmw/s-1000-rr/bmw-s-1000-rr.webp?v=7"
        title="sujai"
      />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
}

export default Sidebar;
