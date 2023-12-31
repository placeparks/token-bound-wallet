import React from "react"
import styles from "./Skeleton.module.css"

// Skeleton component shows a loading animation for when data is loading.
export default function Skeleton({ height, width }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "inherit"
      }}
      className={styles.skeleton}
    />
  )
}
