import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    margin-left: 25px;
    padding: 5px;
`;

const Search = styled.span`
    font-weight: bold;
    cursor: pointer;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    width: 33.3%;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search>O</Search>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>LAMA.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>[||||]</MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar