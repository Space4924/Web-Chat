import React from 'react'
import { Box,styled ,Typography} from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../Context/AccountProvider'
const ImageContainer=styled(Box)`
display:flex;
justify-content:center;

`
const BoxWrapper=styled(Box)`
background:#fff;
padding:12px 30px 5px;
box-shadow:0 1px 3px rgba(0,0,0,0.35);
& :first-child{
    font-size:13px;
    font-weight:100;
    color:#009688;
}
& :last-child{
    margin:14px 0;
    color:4A4A4A
}
`

const Image=styled('img')({
    widht:200,
    height:200,
    borderRadius:"50%",
    padding:25
})
const DiscriptionContainer=styled(Box)`
padding:15px 20px 28px 30px;
& >p{
font-size:13px;
color:#8696a0;

}
`
const Profiles = () => {
    const {account}=useContext(AccountContext);
  return (
    <>
    <ImageContainer>
        <Image src={account.picture} alt="" />
    </ImageContainer>
    <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
    </BoxWrapper>
    <DiscriptionContainer>
        <Typography>
            This is not Your username or pin . This name will be visible to your whatsapp Contact
        </Typography>
    </DiscriptionContainer>
    <BoxWrapper>
        <Typography>About</Typography>
        <Typography>This is My ACcount</Typography>
    </BoxWrapper>
    
    </>
  )
}

export default Profiles
