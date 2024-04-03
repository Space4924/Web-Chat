import { Dialog, Box, Typography } from '@mui/material'
import { List, ListItem } from '@mui/material'
import { qrCodeImage } from '../../Constants/data'
import styled from '@emotion/styled'
import {GoogleLogin} from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";
import { useContext } from 'react'
import { AccountContext } from '../../Context/AccountProvider'
import { addUser } from '../../service/api'
const Component=styled(Box)`
display:flex;
`
const Container=styled(Box)`
padding: 56px 0 56px 56px;
`
const QrCode=styled('img')({
  height:264,
  width:264,
  margin:'50px'
})

const Title=styled(Typography)`
font-size:22px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:20px;
`
const styledialog={
   maxWidth:"100%",
   width:"100%",
   height:"96%",
   maxHeight:"100%"
}
const StyledList=styled(List)`
&>li{
  font-size:15px;
  padding-left:0;
}

`
const LoginDialog = () => {
  const {setAccount}=useContext(AccountContext);

  const onLoginSuccess=async(res)=>{
    const clone=jwtDecode(res.credential);
    console.log("loginSuccesfully",clone);
    setAccount(clone);
    await addUser(clone);
  }
  const OnLoginError=(res)=>{
    console.log("error");
  }
  return (
    <>
      <Dialog open={true} 
        style={styledialog}
      >
        <Component>
          <Container>
            <Title>
              To use WhatsApp on your Computer:
            </Title>
            <StyledList>
              <ListItem>
                Open Whatsapp on your Phone
              </ListItem>
              <ListItem>
                Tap Menu Setting <b>:</b> or Setting and select Linked Devices.
              </ListItem>
              <ListItem>
                Point your phone to this screen to capture the code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{position:'relative'}}>
            <QrCode src={qrCodeImage} alt="QR CODE " width="100%" />
             <Box style={{position:'absolute',top:'30%' ,left:'25%'}}>
                <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={OnLoginError}
                />
             </Box>
          </Box>
        </Component>

      </Dialog>
    </>
  )
}

export default LoginDialog
