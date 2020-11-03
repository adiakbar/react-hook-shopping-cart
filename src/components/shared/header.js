import React, {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'
import {CartIcon} from '../icons';
import {formatNumber} from '../../helpers/utils'
import styles from './header.module.scss';

const Header = () => {
  const {itemCount, totalPrice} = useContext(CartContext)

  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/cart"><CartIcon/> Cart ({itemCount}) ({formatNumber(totalPrice)})</Link>
    </header>
  )
}

export default Header
