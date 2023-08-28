import { ConnectWallet } from "@thirdweb-dev/react"
import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"


export function Navbar() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
      
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/" className={styles.link}>
              MIRAC.ETH
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
        </div>
      </nav>
    </div>
  )
}
