import Link from "next/link"
import React from "react"
import { nftDropAddress } from "../../const/constants"
import Skeleton from "../Skeleton/Skeleton"
import NFT from "./NFT"
import styles from "../../styles/Main.module.css"

// NFTGrid component shows a grid of the connected wallet's owned NFTs.
export default function NFTGrid({
  isLoading,
  nfts,
  emptyText = "No owned NFTS."
}) {
  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(5)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={"100%"} height="312px" />
          </div>
        ))
      ) : nfts && nfts.length > 0 ? (
        nfts.map(nft => (
          <Link
            href={`/token/${nftDropAddress}/${nft.metadata.id}`}
            key={nft.metadata.id}
            className={styles.nftContainer}
          >
            <NFT nft={nft} />
          </Link>
        ))
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  )
}
