import {Typography, Space, Button, Avatar, Rate, Card} from 'antd'
// import { useEffect } from 'react'
import { getCustomers } from '../../API'
// import { useState, useEffect } from 'react'
import CreateProfile from '../CreateProfile'
import { AppContext } from '../../App'
import { React, useState, useContext, useEffect } from 'react'

// const { Meta } = Card

const Profile = () => {
  const { globalUserName, setGlobalUserName } = useContext(AppContext)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [avatar, setAvatar] = useState("")

  const handleEdit = () => { 
    setEditing(true)
   }

  const handleCancel = () => { 
    setEditing(false)
    setName(name)
    setEmail(email)
    setAvatar(avatar)
   }

  const handleSave = () => { 
    //saving changes to backend
    setEditing(false)
   }

  const handleNameChange = (e) => { 
    setName(e.target.value)
    setGlobalUserName(name)
   }

  const handleEmailChange = (e) => { 
    setEmail(e.target.value)
   }

  const handleAvatarChange = (e) => { 
    setAvatar(e.target.value)
   }
 
    // }, [])

    return ( 
        <div>
          <Space size={12} direction='vertical'>
            <Avatar style={{background:'#f85376', color:'#a1e9ff', fontWeight:'bolder'}}>
            {globalUserName.split('')[0]}
            </Avatar>
            <h2>Nice to see you {globalUserName}</h2>
            
              {/* <CreateProfile/> */}
              
            

            <Card>
              <Avatar size={128} src={avatar}>{globalUserName}</Avatar>
              <Space direction='vertical' style={{width:'100%'}}>
                  {editing?(
                    <>
                     <input type='text' placeholder='User Name' value={name}
                     onChange={handleNameChange}/>
                     <input type='email' placeholder='Email' value={email}
                     onChange={handleEmailChange}/>
                     <input type='url' value={avatar}
                     onChange={handleAvatarChange}/>
                    </>
                  ):(
                    <>
                      <h1>{name}</h1>
                      <p>{email}</p>
                    </>
                  )}
                  <Button type='primary'
                   onClick={editing? handleSave:handleEdit}>
                    {editing?'Save':'Edit'}
                   </Button>
                   {editing && (
                    <Button type='ghost'
                    onClick={handleCancel}>
                      Cancel
                    </Button>
                   )}
              </Space>
            </Card>
            
         </Space>

            
        </div>
     );
}


 
export default Profile;