import React,{memo} from 'react'
import { Box, styled, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MoreVert from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { AccountContext } from '../../Context/AccountProvider';
const Component = styled(Box)`
display:flex;
height:44px;
background:#ededed;
padding:8px 16px;
margin-top:30px;
align-items:center;
`
const StyledBox = styled(Box)`
margin-left:auto;
&>*{
    margin-left:2px;
    padding:10px;
    color:#000;
};`
const Container = styled(Box)`
display:flex;
padding:10px;
align-items:center;

`
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: "10%",
    objectFit: 'cover'

});
const Status = styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgb(0,0,0,0.6);
`
const Name = styled(Typography)`
margin-left:12px !important;
font-size:16px;
`
const ChatHeader = ({person}) => {
const {activeUser}=useContext(AccountContext);
   console.log("hello")
    return (
        <>
            <Component>
                <Container>
                    <Image src={person.picture} alt="" />
                    <Box>
                        <Name>{person.name}</Name>
                        {
                            person.sub=="886482492412345678910"?
                            <Status>{'How Can I Help You'}</Status>:
                            <Status>
                            {
                                activeUser?.find(user=>user.sub==person.sub)?'Online':'Offline'
                            }
                        </Status>
                        }
                       
                    </Box>
                </Container>
                <StyledBox>
                    <SearchIcon />
                    <MoreVert />
                </StyledBox>
            </Component>
        </>
    )
}

export default memo(ChatHeader);
