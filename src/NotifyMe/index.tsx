import React, { FC, useEffect, useState } from 'react'
import styles from '../styles.module.css'
import { INotifyMe, IPostition } from '../types'

const NotifyMe: FC<INotifyMe> = ({ message, link, linkText, position }) => {
  const [notificationPosition, setPosition] = useState<IPostition>({
    top: "0",
    left: "50%",
    transform: "translateX(-50%)"
  })

  useEffect(() => {
    if (position === "top-center") {
      setPosition({
        top: "0",
        left: "50%",
        transform: "translateX(-50%)"
      })
    }
    else if (position === "top-left") {
      setPosition({
        top: "0",
        left: "0",
      })

    }
    else if (position === "top-right") {
      setPosition({
        top: "0",
        right: "0",
      })
    }
    else if (position === "bottom-center") {
      setPosition({
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)"
      })
    }
    else if (position === "bottom-left") {
      setPosition({
        bottom: "0",
        left: "0",
      })

    }
    else if (position === "bottom-right") {
      setPosition({
        bottom: "0",
        right: "0",
      })
    }

  }, [position])

  return (
    <div style={notificationPosition} className={styles.wrapper}>
      <p>{message}</p>
      <div style={{}} className={styles.ctaTab}>
        <a href={link}>
          {linkText}
        </a>
      </div>
    </div>
  )
}

export default NotifyMe
