import styled from 'styled-components';
import {useWeb3} from '@3rdweb/hooks';


export default function Home() {
  const {address, connectWallet} = useWeb3();
  
  return (
    <div>
      <button onClick={() =>connectWallet('injected')}>Connect Wallet</button>
    </div>
  )
}

const wrapper = styled.div `
display:flex;
height:100vh;
max-width:100vw;
backg


`