import styles from "../styles/Main.module.css"
import NFTGrid from "../components/NFT/NFTGrid"
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useOwnedNFTs,
  useTransferNFT
} from "@thirdweb-dev/react"
import { nftDropAddress } from "../const/constants"
import Container from "../components/Container/Container"
import toast from "react-hot-toast"
import toastStyle from "../util/toastConfig"
import { useState } from "react"

/**
 * The home page of the application.
 */
const Home = () => {
  const [transferTo, setTransferTo] = useState("");
  const [tokenId, setTokenId] = useState("");


  const address = useAddress()
  const { contract: nftDropContract } = useContract(nftDropAddress, "nft-drop")
  const { data: nfts, isLoading } = useOwnedNFTs(nftDropContract, address)
  const { mutate: transfer, isLoading: transferLoading } = useTransferNFT(nftDropContract);
  return (
    <div className={styles.mainPage}>
    <Container maxWidth="lg" >
      {address ? (
        <div className={styles.container}>
          <h1>Your NFTs</h1>
          <p>
          Browse NFTs in Your Personal Wallet, Link Up with a Token-Bound Smart Wallet, and Uncover Its Wealth at a Glance!
          </p>
          <NFTGrid
            nfts={nfts}
            isLoading={isLoading}
            emptyText={
              "Looks like you don't own any NFTs."
            }
          />
          <div className={styles.btnContainer}>
            <Web3Button
              contractAddress={nftDropAddress}
              action={async contract => await contract?.erc721.claim(1)}
              onSuccess={() => {
                toast("NFT Claimed!", {
                  icon: "✅",
                  style: toastStyle,
                  position: "bottom-center"
                })
              }}
              onError={e => {
                console.log(e)
                toast(`NFT Claim Failed! Reason: ${e.message}`, {
                  icon: "❌",
                  style: toastStyle,
                  position: "bottom-center"
                })
              }}
            >
              Claim NFT
            </Web3Button>
  
          </div>
          <div className={styles.row_center} style={{ width: "50vh" }}>
      <input
           className={styles.input}
           style={{ borderRadius: "5px 0 0 5px" }}
        type="text"
        placeholder="Transfer To Address"
        value={transferTo}
        onChange={e => setTransferTo(e.target.value)}
      />
      <input
           className={styles.input}
           style={{ borderRadius: "5px 0 0 5px" }}
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={e => setTokenId(e.target.value)}
      />
      <button
      className={styles.button}
      style={{
        marginTop: 0,
        width: "130px",
        borderRadius: "0 5px 5px 0"
      }}
        onClick={() =>
          transfer(
            {
              to: transferTo,
              tokenId: tokenId,
              amount: 1
            },
            {
              onSuccess: () => {
                toast("NFT Transferred!", {
                  icon: "✅",
                  style: toastStyle,
                  position: "bottom-center"
                });
              },
              onError: e => {
                console.log(e);
                toast(`NFT Transfer Failed! Reason: ${e.message}`, {
                  icon: "❌",
                  style: toastStyle,
                  position: "bottom-center"
                });
              }
            }
          )
        }
      >
        Transfer
      </button>
    </div>
        </div>
      ) : (
        <div className={styles.container}>
          <h2 style={{marginTop:"9vh", fontFamily:"Montserrat"}}>Connect Your Wallet, Claim a Unique Token-Wallet, and Mint, Manage, or Transfer Your Digital Identity with a Single NFT!</h2>
         
        </div>
      )}
    </Container>
    </div>
  )
}

export default Home
