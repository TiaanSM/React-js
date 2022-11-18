import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px; 
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 100%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
                There are many variations of passages of lorem ipsum available, but 
                the majority have suffered alteration ins ome form, by injected humour
                , or randomised words which don't look even slightly believable.            
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                   FACEBOOK
                </SocialIcon>
                <SocialIcon color="e4405f">
                   INSTAGRAM
                </SocialIcon>
                <SocialIcon color="55acee">
                   TWITTER
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Usefull Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Wishlist</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                420 cannalane , California Missisipi
            </ContactItem>
            <ContactItem>
                +23 456 789 1011
            </ContactItem>
            <ContactItem>
                contact@manON.mars
            </ContactItem>
            <Payment src="https://google/images/273942874/random?/230480293" />
        </Right>
    </Container>
  )
}

export default Footer