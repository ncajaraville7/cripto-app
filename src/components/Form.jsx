import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import useSelectCoin from "../hooks/useSelectCoin";
import { coins } from '../data/coins';
import Error from './Error';

const InputForm = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #7A7DFE;
    }

`

const Form = ({ setCoins }) => {

    const [ criptos, setCriptos ] = useState([]);
    const [ error, setError ] = useState(false);

    const [ coin, SelectCoin ] = useSelectCoin('Elige tu moneda', coins);
    const [ criptoCoin, SelectCriptoCoin ] = useSelectCoin('Elige tu criptomoneda', criptos);

    useEffect( ()=> {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const answer = await fetch(url);
            const result = await answer.json();

            const arrayCripto = result.Data.map( cripto => {

                const obj = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }
                return obj;
            })

            setCriptos(arrayCripto);
        }
        consultAPI();
    }, [])

    SelectCoin();

    const handleSubmit = e => {
        e.preventDefault();
        
        if(!coin || !criptoCoin) {
            setError(true);
        } else {
            setError(false);
            setCoins({
                coin,
                criptoCoin
            })
        }
    }

  return (
      <form
        onSubmit={handleSubmit}
      >
          <SelectCoin />
          <SelectCriptoCoin />
          <InputForm 
            type="submit"
            value="Cotizar"
            />

            {error && <Error>Debes completar todos los campos</Error>}
      </form>
  );
};

export default Form;
