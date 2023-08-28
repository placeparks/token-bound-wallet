import {
	ThirdwebProvider,
	coinbaseWallet,
	metamaskWallet,
	walletConnect,paperWallet,smartWallet, localWallet
  } from "@thirdweb-dev/react"
  import "../styles/globals.css"
  import { Navbar } from "../components/Navbar/Navbar"
  import { TWApiKey, activeChain } from "../const/constants"
  
  function MyApp({ Component, pageProps }) {
	const paperClientId = process.env.NEXT_PUBLIC_PAPER_CLIENT_ID;
	const uri = process.env.NEXT_PUBLIC_URI;
	return (

	  <ThirdwebProvider
	  sdkOptions={{
		gasless: {
		  openzeppelin: {
			relayerUrl: uri,
		  },
		},
	  }}
		activeChain={activeChain}
		supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(), paperWallet({paperClientId: paperClientId, gasless: true}), smartWallet(), localWallet()]}
		clientId={TWApiKey}
		secretKey={process.env.NEXT_PUBLIC_TEMPLATE_SECRET_KEY}
	  >
		<Navbar />
		<Component {...pageProps} />
	  </ThirdwebProvider>

	)
  }
  
  export default MyApp
  
