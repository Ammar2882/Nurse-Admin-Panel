import React, { useEffect, useState } from "react";
import './SendMessage.css'
import axios from 'axios'

const SendMessage = () => {
  const [members, setMembers] = useState([])
  useEffect(() => {
    try {
      const data = axios.get()
    }
    catch (e) {
      console.log(e)
    }
  }, [])
  return (
    <div>
      <div className="message-main">
        Send Messages
      </div>

    </div>
  )
};

export default SendMessage;
