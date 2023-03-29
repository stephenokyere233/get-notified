import React from 'react'
import NotifyMe from 'get-notified'
import 'get-notified/dist/index.css'

const App = () => {
  return <NotifyMe message='This is a test' hasCta={false} linkText='reply' link="" position="bottom-left" />
}

export default App
