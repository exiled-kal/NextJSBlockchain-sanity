import styled from 'styled-components';
import {useWeb3} from '@3rdweb/hooks';


export default function Home() {
  const {address, connectWallet} = useWeb3();
  
  return (
    <Wrapper>
      <button onClick={() =>connectWallet('injected')}>Connect Wallet</button>
    </Wrapper>
    
  )
}

const Wrapper = styled.div `
display:flex;
height:100vh;
max-width:100vw;
background-color:#0a0b0d;
color: white;
display:grid;
place-items:center;
`

const Button = styled.div`
border: 1px solid #282b2f;
padding: 0.8rem;
font-size:1.3rem;
font-weight: 500;
border-radius: 0.5rem;
background-color:#3773f5;
color: #
`