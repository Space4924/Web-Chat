import React,{memo} from 'react'
import { Toolbar, AppBar, styled, Box } from '@mui/material';
import LoginDialog from './Accounts/LoginDialog';
import ChatDialog from '../Chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from '../Context/AccountProvider';
// import Login from './Login/Login';
// import Register from './Login/Register';
const Component = styled(Box)`
height:100vh;
// background-color:#dcdcdc;`
const LoginHeader = styled(AppBar)`
   height:200px;
   background-color:#00bfa5;
   box-shadow:none;  `

const ChatHeader = styled(AppBar)`
   height:125;
   background-color:#00bfa5;
   box-shadow:none;  `

const Messenger = () => {
  const { account } = useContext(AccountContext);
  console.log("messenger infinite loop");

  return (
    <>
      <Component>
        {account ?
          <>
            <ChatHeader>
              <Toolbar>

            <ChatDialog />
              </Toolbar>
            </ChatHeader>
          </>
          :
          <>
          {/* <Register/> */}
            <LoginDialog />
            <LoginHeader>
              <Toolbar>

              </Toolbar>
            </LoginHeader>
          </>
        }
      </Component>
    </>

  )
}

export default memo(Messenger)
