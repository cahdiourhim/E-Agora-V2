import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";


  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}

  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
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
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ flexDirection: "column" })}

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
    ${mobile({ flexDirection: "column" })}

  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  

  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>E-AGORA</Logo>
          <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Liens utiles</Title>
          <List>
            <ListItem>Accueil</ListItem>
            <ListItem>Panier</ListItem>
            <ListItem>Mode homme</ListItem>
            <ListItem>Mode femme</ListItem>
            <ListItem>Accessoires</ListItem>
            <ListItem>Mon compte</ListItem>
            <ListItem>Mes achats</ListItem>
            <ListItem>Favories</ListItem>
            <ListItem>Favoris</ListItem>
            <ListItem>Conditons</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contacts</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/>Lorem ipsum dolor sit amet
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +33 3 33 33 33
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@E-AGORA.fr
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;