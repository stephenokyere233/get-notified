import React, { FC, useEffect, useState } from 'react'
import styles from '../styles.module.css'
import { INotifyMe, IPostition } from '../types'

const NotifyMe: FC<INotifyMe> = ({ message, link, linkText, position, options }) => {
  const [notificationPosition, setPosition] = useState<IPostition>({
    top: "0",
    left: "50%",
    transform: "translateX(-50%)"
  })
  // const [message, setMessage] = useState<string>("")

  const [optionStyles, setOptionStyles] = useState({
    backgroundColor: "#ffffff",
    color: "#000"
  })
  useEffect(() => {
    if (options) {
      setOptionStyles({
        backgroundColor: options.style.backgroundColor,
        color: options.style.color
      })
    }

  }, [options])


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


  // const createNotification = (message: string) => {
  //   setMessage(message)
  //   console.log(message)
  // }

  // useEffect(() => {
  //   createNotification("new message")
  // }, [])




  return (
    <div style={{ ...notificationPosition, ...optionStyles }} className={styles.wrapper}>
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
