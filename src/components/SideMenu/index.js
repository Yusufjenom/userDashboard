import {Menu} from 'antd'
import {AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'

const SideMenu = () => {
    const navigate = useNavigate()
    return ( 
     <div className="SideMenu">
        <Menu 
        className="SideMenuVertical"
         mode='vertical'
           onClick={(item) =>{
              navigate(item.key)
          }} 
           items={[
            
            {
            label: 'Dahboard',
            icon: <AppstoreOutlined/>,
            key: '/'
            },
            {
            label: 'Inventory',
            icon: <ShopOutlined/>,
            key: '/inventory'
            },
            {
            label: 'Book Appointment',
            icon: <ShoppingCartOutlined/>,
            key: '/appointments'
            },
            {
            label: 'Profile',
            key: '/profile',
            icon: <UserOutlined/>
            }
]}>

        </Menu>
    </div> );
}
 
export default SideMenu;