import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.scss'

export default function Navbar() {
  return (
    <nav>
      <menu className={styles.main}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav>
  )
}
