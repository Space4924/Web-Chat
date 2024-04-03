import { Dialog, Box, styled } from '@mui/material'
import React,{memo} from 'react'
import EmptyChat from './menu/EmptyChat'
import Chat from './chat/Chat'
import Chatbox from './menu/Chatbox'
import { useContext } from 'react'
import { AccountContext } from '../Context/AccountProvider'
const StyleDialog = {
    maxHeight: "100%",
    height: "100%",
    maxWidth: "100%",
    width: "100%",
    boxShadow: "none",
    borderRadius: "0px",
    overflow: "hidden"

}
const Container = styled(Box)`
display:flex;
width:100%;
maxWidth:100%;
overflow:hidden;
`
const FirstPart = styled(Box)`
min-Width:450px;
`
const Secondpart = styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.16)

`


const ChatDialog = () => {
    const {person}=useContext(AccountContext);
    console.log("chatdialog is also redering infinite time");
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Dialog open={true} PaperProps={{ sx: StyleDialog }} maxWidth="xlg"
            >
                <Container>
                    <FirstPart>
                        <Chat />
                    </FirstPart>
                    <Secondpart>
                        {Object.keys(person).length ?
                            <Chatbox /> :
                            <EmptyChat />
                        }
                    </Secondpart>
                </Container>

            </Dialog>
        </div>
    )
}

export default memo(ChatDialog)
