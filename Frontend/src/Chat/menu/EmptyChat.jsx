import React from 'react'
import { Box, Divider, styled, Typography } from '@mui/material'
import { emptyChatImage } from '../../Constants/data'
const Image = styled('img')({
  width:400
});
const Container=styled(Box)`
height:100%;
background:#f8f9fa;
padding:30px 0;
text-align:center;
`
const Title=styled(Typography)`
font-size:32px;
margin:25px 0 10px 0;
font-family:inherit;
font-weight:300;
color:#41525d
`
const SubTitle=styled(Typography)`
font-size:14px;
color:#667781;
font-weight:400;
font-family:inherit;
`
const Compound=styled(Box)`
padding:0 200px;
margin-top:100px;
`
const StyledDivider=styled(Divider)`
margin:20px 0 10px 0;
opacity:0.4;
`
const EmptyChat = () => {
  return (
    <>
      <Container>
        <Compound>
          <Image src={emptyChatImage} alt="" />
          <Title>WhatsApp Web</Title>
          <SubTitle>Connect With Your Friends and Your Family Through a New Platform Whenever You Want 
            Whenever You need Ask Anything you want and Do it on your Own
          </SubTitle>
            <StyledDivider/>
          <SubTitle>consectetur adipisicing elit. reprehenderit!</SubTitle>
        </Compound>
      </Container>
    </>
  )
}

export default EmptyChat
