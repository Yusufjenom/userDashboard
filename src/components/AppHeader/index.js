import {Image, Typography, Space, Badge, Drawer, List, Avatar} from 'antd'
import {MailOutlined, BellFilled} from '@ant-design/icons'
import { useEffect, useState, useContext } from 'react';
import { getComments, getOrders } from '../../API';
import { AppContext } from '../../App';

const AppHeader = () => {
    const [comments, setComments] = useState([])
    const [orders, setOrders] = useState([])
    const [commentsOpen, setCommentsOpen] = useState(false)
    const [notificationOpen, setNotificationOpen] = useState(false)
    const { globalUserName, setGlobalUserName } = useContext(AppContext)

    useEffect(() => { 
        getComments().then(res => { 
          setComments(res.comments)
         })
        getOrders().then(res => { 
          setOrders(res.products)
         })
     }, [] )
    return ( <div className="AppHeader">
        <Avatar width={40} style={{background:'#f85376', color:'#a1e9ff', fontWeight:'bold'}} >
        {globalUserName.split('')[0]}
        </Avatar>
        <Typography.Title>Welcome to {globalUserName}'s Dashboard </Typography.Title>
        <Space>
            <Badge count={comments.length} dot>
               <MailOutlined style={{fontSize:24}} 
               onClick={() => {
                   setCommentsOpen(true)
               }}
               />
            </Badge>
            <Badge count={orders.length}>
               <BellFilled style={{fontSize:24}} 
               onClick={() => {
                   setNotificationOpen(true)
               }}
               />
            </Badge>
        </Space>
        <Drawer title='Comments'
         open={commentsOpen} 
         onClose={() => {
            setCommentsOpen(false)
        }} 
        maskClosable
        >
            <List dataSource={comments} renderItem={(item) =>{
              return  <List.Item>{item.body}</List.Item>
            }}></List>
        </Drawer>

        <Drawer title='Notifications'
         open={notificationOpen} 
         onClose={() => {
            setNotificationOpen(false)
        }} 
        maskClosable
        > 
         <List dataSource={orders} renderItem={(item) =>{
              return  <List.Item><Typography.Text strong>
                {item.title}
                </Typography.Text>{" "} has been ordered!</List.Item>
            }}></List>
        </Drawer>
    </div> );
}
 
export default AppHeader;