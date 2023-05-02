import {Typography, Space, Card, Statistic, Table} from 'antd'
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, DollarCircleOutlined} from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { getOrders } from '../../API';

import { 
    Chart as ChartJS,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale
 } from 'chart.js'
 import { Bar } from 'react-chartjs-2'

 ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
 )

const Dashboard = () => {
    return ( 
        <div>
            <Space size={12} direction='vertical'>
              <Typography.Title level={4}>Dashboard</Typography.Title>
              <Space direction='horizontal'>
                <DahboardCard icon={<ShoppingCartOutlined style={{color: "red",
                  background:'rgba(0, 55, 255, 0.15)',
                   borderRadius: 12, fontSize: 24, padding: 8}}/>}
                 title={'Appointments'}
                  value={12345}/>

                <DahboardCard
                 icon={<ShoppingOutlined style={{color: "green",
                  background:'rgba(0, 255, 0, 0.25)',
                   borderRadius: 12, fontSize: 24, padding: 8}}/>} 
                 title={'Inventory'}
                  value={12345}/>

                <DahboardCard 
                icon={<UserOutlined style={{color: "orange",
                background:'rgba(0, 0, 55, 0.25)',
                 borderRadius: 12, fontSize: 24, padding: 8}}/>} 
                title={'Profile'}
                 value={12345}/>

                {/* <DahboardCard 
                icon={<DollarCircleOutlined style={{color: "crimson",
                background:'rgba(0, 0, 255, 0.25)',
                 borderRadius: 12, fontSize: 24, padding: 8}}/>}
                 title={'Revenue'}
                  value={12345}/> */}

            </Space>
            <Space>
                <RecentOrders/>
                {/* <DashboardChart/> */}
            </Space>
            </Space>
        </div>
     );
}


function RecentOrders(){
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getOrders().then(res => {
            setDataSource(res.products.splice(0,3))
            setLoading(false)
        })
    }, [])
   return 
    <>
     <Typography.Text>Recent Orders</Typography.Text>
   <Table
   columns={[
    {
    title: 'Title',
    dataIndex: 'title'
   },
    {
    title: 'Quantity',
    dataIndex: 'quantity'
   },
    {
    title: 'Price',
    dataIndex: 'discountedprice'
   }
]}
loading={loading}
dataSource={dataSource}
pagination={false}
></Table>
</>
}
 
const DahboardCard = ({title, value, icon}) => {
    return ( 
        <Card>
                    <Space direction='horizontal'>
                     {icon}
                      <Statistic title={title} value={value} />
                    </Space>
                </Card>
     );
}
 

function DashboardChart(){ 
     const options = { 
        responsive: true,
        plugins: { 
            legend:{ 
                position: 'bottom',
             },
             title: { 
                display: true,
                text: 'Order Revenue'
              }
         }
     }

     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
                     'September', 'October', 'November', 'December']

     const data = { 
        labels,
        datasets:[
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.random()*1000),
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => Math.random()*1000),
                backgroundColor: 'rgba(53, 162, 235, 0.5)'

            }
        ] 
      }
    return (
        <Card style={{width: 500, height: 250}}>
          < Bar options={options} data={data} />
        </Card>
    )
 }
// export default DahboardCard;
export default Dashboard;