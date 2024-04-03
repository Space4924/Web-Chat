import React from 'react'
import { Drawer,Typography ,styled} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Box} from '@mui/material'
import Profiles from './Profiles';


const drawerStyle={
   left:20,
   top:17,
   height:"95%",
   width:"30%"
}
const Component=styled(Box)`
background:#F3EEEA;
height:90%;
`
const ProfileBlock=styled(Box)`
background:#008069;
display:flex;
height:100px;
color:#FFFFFF;
&>svg,&>p{
  margin-top:auto;
  padding:12px;
  font-weight:600;
}

`
const InfoDrawer = ({open,setOpen}) => {
    const handlClose=()=>{
        setOpen(false);
    }
  return (
    <>
     <Drawer
      open={open}
      onClose={handlClose}
      PaperProps={{sx:drawerStyle}}
      style={{zIndex:1500}}
    >
        <ProfileBlock>
            <ArrowBackIcon onClick={handlClose} />
            <Typography>Profile</Typography>
        </ProfileBlock>
        <Component>
            <Profiles/>
        </Component>
    </Drawer>
    </>
  )
}

export default InfoDrawer
