import styles from '../styles/Home.module.css'
import { FC } from 'react'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
import Image from "next/image"

export const AppBar:FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src="/solana.webp"height={60} width={150} alt='solana_logo'/>
            <span>Wallet-Adapter</span>
            <WalletMultiButton />

        </div>
    )
}