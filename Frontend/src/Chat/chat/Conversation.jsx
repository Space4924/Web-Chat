import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../Context/AccountProvider'
import { Box, Typography, styled } from '@mui/material'
import { getConversation, setConversation } from '../../service/api'
import { formatData } from '../../utils/CommonUtils'
const Component = styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;
`
const Image = styled('img')({
    width: 50,
    borderRadius: "50%",
    padding: "0 14px"
})
const RightBox = styled(Box)`
margin:-2px 5px 0 0;
margin-left:auto;
color:green;
font-size:12px;
`
const Last = styled(Box)`
font-size:14px;
color:EEEEEE;
max-width:100%;
widht:100%;
overflow:hidden;
height:20px;
font-weight:400;
font-style:inherit;
`
const Conversation = ({ user  }) => {

    const { setPerson, account ,Nmessage} = useContext(AccountContext);
    const [lastMessage, setLastMessage] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data=await getConversation({ senderId: account.sub, receiverId: user.sub });
            setLastMessage({text:data?.message,timestamp:data?.updatedAt});
        }
        fetchData();
    }, [Nmessage])
    const UserActive = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }
    return (
        <>
            <Component onClick={() => UserActive()}>
                <Box>
                    <Image src={user.picture} alt="" />
                </Box>
                <Box>
                    <Typography>{user.name}</Typography>
                    <Last>{lastMessage?.text}</Last>
                </Box>
                <RightBox>
                    {formatData(lastMessage?.timestamp)}
                </RightBox>


            </Component>

        </>
    )
}

export default Conversation
