import React from 'react'
import styles from '../styles/Button.module.css'


function Button({Content, onClick}) {
  return (
    <div>
      <a onClick={onClick} className={styles.button}>
          {Content}
      </a>
    </div>
  )
}

export default Button