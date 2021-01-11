import React from 'react'
import NavBar from '@components/Navbar/Navbar'
import styles from './layout.module.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
