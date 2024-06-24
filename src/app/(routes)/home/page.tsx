import GetUserMail from '@/components/GetUserMail'
import React from 'react'
import Logout from '@/components/Logout'

const page = () => {
  return (
    <div>
      <div>
        Your Email address: <strong><GetUserMail></GetUserMail></strong>
      </div>
      <div><Logout></Logout></div>
    </div>
  )
}

export default page