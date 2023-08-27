import {
	ThirdwebProvider,
	coinbaseWallet,
	metamaskWallet,
	walletConnect
  } from "@thirdweb-dev/react"
  import "../styles/globals.css"
  import { Navbar } from "../components/Navbar/Navbar"
  import { TWApiKey, activeChain } from "../const/constants"
  
  function MyApp({ Component, pageProps }) {
	return (
		
	  <ThirdwebProvider
		activeChain={activeChain}
		supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
		clientId={TWApiKey}
		secretKey={process.env.NEXT_PUBLIC_TEMPLATE_SECRET_KEY}
	  >
		<Navbar />
		<Component {...pageProps} />
	  </ThirdwebProvider>
	)
  }
  
  export default MyApp
  