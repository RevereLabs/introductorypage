import React from 'react'
import styles from './styles/Button.module.css'


function Button({Content,Link}) {
  return (
    <a href={Link} className={styles.button}>
        {Content}
    </a>
  )
}

export default Button