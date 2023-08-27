import { ThirdwebNftMedia } from "@thirdweb-dev/react"
import React from "react"
import styles from "./NFT.module.css"

// Each NFT component shows the NFT image, name, and token ID.
export default function NFTComponent({ nft }) {
  return (
    <>
      <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftImage} />

      <p className={styles.nftTokenId}>Token ID #{nft.metadata.id}</p>
      <p className={styles.nftName}>{nft.metadata.name}</p>
    </>
  )
}
