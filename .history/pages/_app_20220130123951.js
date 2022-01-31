import '../styles/globals.css'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import 'react-'

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [4];

  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;