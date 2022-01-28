import styled from "@emotion/styled";

const Container = styled.div`
    color: #FFFF;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 25px;
    span {
        font-weight: 700;
    }
`

const Img = styled.img`
    display: block;
    width: 150px;
`

const Result = ({ result }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;
  return (
    <Container>
        <Img src={`https://www.cryptocompare.com//${IMAGEURL}`} alt="Cripto Coin" />
        <div>
            <Price>El precio es de: <span>{PRICE}</span></Price>
            <Text>El precio mas alto del día es: <span>{HIGHDAY}</span></Text>
            <Text>El precio mas bajo del día es: <span>{LOWDAY}</span></Text>
            <Text>Variación de las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>última actualización: <span>{LASTUPDATE}</span></Text>
        </div>
    </Container>
  );
};

export default Result;
