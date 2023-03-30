import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Titre = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-Articles: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Produit = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProduitDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProduitNom = styled.span``;

const ProduitId = styled.span``;

const ProduitColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProduitTaille = styled.span``;

const PrixDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-Articles: center;
  justify-content: center;
`;

const ProduitQuantitéContainer = styled.div`
  display: flex;
  align-Articles: center;
  margin-bottom: 20px;
`;

const ProduitQuantité = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProduitPrix = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Résumé = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const RésuméTitre = styled.h1`
  font-weight: 200;
`;

const RésuméArticle = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const RésuméArticleText = styled.span``;

const RésuméArticlePrix = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Panier = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Titre>Votre panier</Titre>
        <Top>
          <TopButton>Continuer vos achats</TopButton>
          <TopTexts>
            <TopText>Votre panier(2)</TopText>
            <TopText>Favoris (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Passer au paiement</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Produit>
              <ProduitDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                <Details>
                  <ProduitNom>
                    <b>Produit:</b> Lorem ipsum
                  </ProduitNom>
                  <ProduitId>
                    <b>ID:</b> 93813718293
                  </ProduitId>
                  <ProduitColor color="noir" />
                  <ProduitTaille>
                    <b>Taille:</b> 37
                  </ProduitTaille>
                </Details>
              </ProduitDetail>
              <PrixDetail>
                <ProduitQuantitéContainer>
                  <Add />
                  <ProduitQuantité>2</ProduitQuantité>
                  <Remove />
                </ProduitQuantitéContainer>
                <ProduitPrix>€ 30</ProduitPrix>
              </PrixDetail>
            </Produit>
            <Hr />
            <Produit>
              <ProduitDetail>
                <Image src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png" />
                <Details>
                  <ProduitNom>
                    <b>Produit:</b> Lorem ipsum
                  </ProduitNom>
                  <ProduitId>
                    <b>ID:</b> 93813718293
                  </ProduitId>
                  <ProduitColor color="gris" />
                  <ProduitTaille>
                    <b>Taille:</b> M
                  </ProduitTaille>
                </Details>
              </ProduitDetail>
              <PrixDetail>
                <ProduitQuantitéContainer>
                  <Add />
                  <ProduitQuantité>1</ProduitQuantité>
                  <Remove />
                </ProduitQuantitéContainer>
                <ProduitPrix>€ 20</ProduitPrix>
              </PrixDetail>
            </Produit>
          </Info>
          <Résumé>
            <RésuméTitre>Résumé</RésuméTitre>
            <RésuméArticle>
              <RésuméArticleText>Sous-total</RésuméArticleText>
              <RésuméArticlePrix>€ 80</RésuméArticlePrix>
            </RésuméArticle>
            <RésuméArticle>
              <RésuméArticleText>Livraison</RésuméArticleText>
              <RésuméArticlePrix>€ 5.90</RésuméArticlePrix>
            </RésuméArticle>
            <RésuméArticle>
              <RésuméArticleText>Réduction</RésuméArticleText>
              <RésuméArticlePrix>€ -5.90</RésuméArticlePrix>
            </RésuméArticle>
            <RésuméArticle type="total">
              <RésuméArticleText>Total</RésuméArticleText>
              <RésuméArticlePrix>€ 80</RésuméArticlePrix>
            </RésuméArticle>
            <Button>Passer au paiement</Button>
          </Résumé>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Panier;