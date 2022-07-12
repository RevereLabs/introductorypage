import React from 'react'
import styles from '../styles/Button.module.css'


function Button({Content, onClick, Link='#'}) {
  return (
    <div>
      <a onClick={onClick} className={styles.button} href={Link}>
          {Content}
      </a>
    </div>
  )
}

export default Button