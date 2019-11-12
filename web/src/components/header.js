import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}
        </Link>
   


      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/nyheter/'>Nyheter</Link>
          </li>
          <li>
            <Link to='/info/'>Info</Link>
          </li>
           <li>
            <Link to='/skjema/'>Skjema</Link>
          </li>
          <li>
            <Link to='/vedtekter/'>vedtekter</Link>
          </li>
          
          <li>
            <Link to='/om/'>Om Øreåsen borettslag</Link>
          </li>
             <li>
            <Link to='/kontakt/'>Kontakt</Link>
          </li>

        </ul>
      </nav>
    </div>
  </div>
)

export default Header
