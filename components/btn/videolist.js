import {Badge, Col, Popover, Row} from "antd";
import {useEffect, useState} from 'react'
import axios from 'axios'

const Vlist = React.memo(() => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        axios.get('/api/video-bili')
            .then(function (response) {
                if (response.data.code === 0) {
                    setData(response.data.data.list.vlist)
                }
            }).catch(function (e) {
                console.error('/api/video-bili 异常')
            })
    }, [])

    const buildList = (arr) => {
        return (
            arr.map(item => {
                return (
                    <div key={item.bvid} className="list-item">
                        <Popover placement="top" content={
                            <div style={{
                                height: '150px',
                                width: '250px',
                                background: `url(http:${item.pic}) no-repeat center center`,
                                backgroundSize: 'contain'
                            }}></div>
                        }>
                            <Badge status="processing" text={<a style={{color: 'rgba(0,0,0,.6)'}} href={`https://www.bilibili.com/video/${item.bvid}`} target="_blank">{item.title}</a>} />
                        </Popover>
                    </div>
                )
            })
        )
    }

    return (
        <Row justify="center">
            <Col span={20}>
                <div className="histroy-box">
                    <h5>
                        最新投稿
                    </h5>
                    <div className="histroy-list">
                        {
                            data.length > 0 ? buildList(data) :
                                <div key="nond-vlist" className="list-item">
                                    <Badge status="default" text="暂无数据"/>
                                </div>
                        }

                    </div>
                    <a className="clearBtn" href="https://space.bilibili.com/442426299/video" target="_blank">
                        更多
                    </a>
                </div>
            </Col>
        </Row>
    )

})

export default Vlist