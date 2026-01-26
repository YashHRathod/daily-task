import React from 'react'
import {Flex,Space,Table,Tag} from 'antd';
import "./Tablebox.css"

const coloums=[
        {
            title:'Name',
            dataIndex:'name',
            key:'name',
            render: text => <a >{text}</a>,
            sorter:(a,b)=>a.name.localeCompare(b.name)
        },
        {
            title:'Age',
            dataIndex:'age',
            key:'age',
        
            sorter:(a,b)=> a.age-b.age
        },
        {
            title:'Address',
            dataIndex:'address',
            key:'address'
        },
        {
            title:'Tags',
            data:'tags',
            key:'tags',
            render:(_,{tags})=>(
                <Flex gap="small" align="center" wrap>
                    {
                        tags.map(tag=>{
                            let color=tag.length>5?'green':'blue'
                            if(tag=='loser'){
                                color='red';
                            }
                            return(
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            )
                        })

                    }

                </Flex>
            )
        },
        {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  

]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 3,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const Tablebox=()=><div className="red-table"><Table  columns={coloums} dataSource={data} /></div>
export default Tablebox;