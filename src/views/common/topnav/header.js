import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TopnavLogo from "./topnav_logo";
import HeaderMenu from "./header_menu";
import ProfileMenu from "../../../assets/menulist/MenuList";



//const Header = props => {
  export default function Header(){
  return (
    <React.Fragment>
      <AppBar component="navbar" color="none" position="static" elevation={0}>
        <Toolbar className="toolbar" p={0}>

          {/* Logo */}
          <TopnavLogo />

          {/* Menu */}
          <HeaderMenu />

          {/* Profile Menu */}
          <ProfileMenu />
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}