import {Typography, Space, Table, Avatar, Rate} from 'antd'
// import { useEffect } from 'react'
import { getInventory } from '../../API'
import { useState, useEffect } from 'react'

const Inventory = () => {
    const [loading, setLoading] = useState(false)
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        setLoading(true)
        getInventory().then(res => {
            setDataSource(res.products)
            setLoading(false)
        })
    }, [])

    return ( 
        <div>
            <Space size={20} direction="vertical">
              <Typography.Title level={4}>Inventory</Typography.Title>
              <Table 
               loadind={loading}
              columns={[
                {
                    title: 'Thumbnail',
                    dataIndex: 'thumbnail',
                    render: (link) => {
                        return <Avatar src={link} />
                    }
                  },
                {
                  title: 'Title',
                  dataIndex: 'title'
                },
                {
                  title: 'Price',
                  dataIndex: 'price',
                  render: (value) => <span>${value}</span>
                },
                {
                  title: 'Rating',
                  dataIndex: 'rating',
                  render: (rating) => {
                    return <Rate value={rating} allowHalf disabled/>
                  }
                },
                {
                  title: 'Brand',
                  dataIndex: 'brand'
                },
                {
                  title: 'Category',
                  dataIndex: 'category'
                },
                
              ]}

              dataSource={dataSource}
              pagination={{
                pageSize:5
              }}
              
              ></Table>
            </Space>
            
        </div>
     );
}
 
export default Inventory;