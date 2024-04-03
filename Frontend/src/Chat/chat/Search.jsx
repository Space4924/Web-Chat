import React from 'react'
import { Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
const Container = styled(Box)`
display:flex;
align-items:center;
height:45px;
border-bottom:1px solid #F2F2F2;
`
const Wrapper = styled(Box)`
background-color:#f0f2f5;
position:relative;
margin: 0 13px;
width:100%;
border-radius:8px
`
const Icon = styled(Box)`
position:absolute;
height:100%;
padding:8px;
color:#919191;

`
const InputField = styled(InputBase)`
height:20px;
padding:16px;
padding-left:50px;
width:100%;
font-size:14px;
border-radius:10px;
`
const Search = ({setText}) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Icon>
                        <SearchIcon fontSize='sm'/>
                    </Icon>
                    <InputField
                        placeholder='Search or Start a New Chat'
                        onChange={(e)=>{setText(e.target.value)}}
                    />
                </Wrapper>
            </Container>
        </>

    )
}

export default Search
