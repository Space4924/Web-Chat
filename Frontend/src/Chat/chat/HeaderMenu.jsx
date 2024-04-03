

import React, { useState } from 'react'
import MoreVert from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';

const MenuOption=styled(MenuItem)`
font-size:15px;
padding:10px 60px 5px 20px;
color:#4A4A4A
`
const HeaderMenu = ({setOpenDrawer}) => {
    const [open, setOpen]=useState(null);
    const handleClose=()=>{
        console.log("handle Close");
        setOpen(null);
    }
    const Clicked=(e)=>{
        console.log("clicked");
        setOpen(e.currentTarget);
    }
  return (
    <>
      <MoreVert onClick={Clicked}/>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        keepMounted
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuOption onClick={()=>{handleClose();setOpenDrawer(true);}}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  )
}

export default HeaderMenu
