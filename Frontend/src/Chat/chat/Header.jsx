import React from 'react'
import { Box,styled } from '@mui/material'
import { useContext ,useState } from 'react'
import { AccountContext } from '../../Context/AccountProvider'
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import InfoDrawer from '../../Components/drawer/InfoDrawer';

const Component=styled(Box)`
display:flex;
height:44px;
background:#ededed;
padding:8px 16px;
// padding-top:60px;
align-items:center;
`
const StyledBox=styled(Box)`
margin-left:auto;
&>*{
    margin-left:2px;
    padding:10px;
};

`


const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:10

})
const Header = () => {
    const {account}=useContext(AccountContext);
    const [openDrawer,setOpenDrawer]=useState(false);
    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }
  return (
    <>
    <Component>
        <Image src={account.picture} alt="DP" onClick={()=>toggleDrawer()} />
        <StyledBox>
            {/* <HistoryToggleOffIcon/> */}
            <ChatIcon onClick={()=>{window.location.href = 'https://drab-seal-sweatsuit.cyclic.app'}}/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/> 
        </StyledBox>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
   </>
  )
}

export default Header
