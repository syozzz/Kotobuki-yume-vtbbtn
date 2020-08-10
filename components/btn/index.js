import styled from 'styled-components'
import { ContentBox } from '../common'
import { useState } from 'react'
import { Row, Col, Badge, Divider, Button, notification } from 'antd'
import styles from '../../styles/btn.module.css'

const Box = styled.div`
  margin-top: 50px;
  background: #F9F9F9;
  padding-bottom: 20px;

  @media(max-width: 999px) {
    padding: 0 10px;
  }
  
  .container {
    background: #ffffff;
    border-radius: 8px;
    position: relative;
    z-index: 100;
    top: -25px;
    box-shadow: 0 4px 8px rgba(0,0,0,.12);
    
    .inner-box {
      padding: 34px;
      
      .content {
        border-radius: 8px;
        border: 1px dashed #000000;
        min-height: 135px;
        padding: 3px;
        display: flex;
        align-items: center;
      }
    }
  }
  
  .histroy-box {
    position: relative;
    
    @media (min-width: 650px) {
          top: -20px;
    }
    
    .histroy-list {
      color: #444;
      font-size: 14px;
      max-height: 220px;
      overflow: auto;
      margin-top: 10px;
      
      .list-item {
        padding: 13px 0 13px 5px;
        border-bottom: 1px solid rgb(234,234,234);
      }
    }
    
    .clearBtn {
      margin-top: 20px;
      color: #0070f3;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
    
  }
`

const Btn = () => {

    const [ count, setCount ] = useState(0)

    const clickHandler = () => {
        setCount(count + 1);
        if (count <= 2) {
            notification.info({
                key: 'test-alert',
                message: '喂，别点了啊，铁咩！音声都还没呢',
                placement: 'bottomRight'
            })
        } else {
            notification.error({
                key: 'test-alert',
                message: '你再点爷摸了',
                placement: 'bottomRight'
            })
        }
    }

    return (
        <Box>
            <ContentBox>
                <Row justify="center">
                    <Col xs={24} sm={13} style={{position: 'relative'}}>
                        <Row justify="center">
                            <Col span={22}>
                                <div className="container">
                                    <div className="inner-box">
                                        <div className="content">
                                            播放器按钮界面 头秃施工中...
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={11}>
                        <Row justify="center">
                            <Col offset={2} span={20}>
                                <div className="histroy-box">
                                    <h5>
                                        最近播放
                                    </h5>
                                    <div className="histroy-list">
                                        <div className="list-item">
                                            <Badge status="processing" text="语音11111111"/>
                                        </div>
                                        <div className="list-item">
                                            <Badge status="processing" text="语音2222222"/>
                                        </div>
                                        <div className="list-item">
                                            <Badge status="processing" text="语音3333333"/>
                                        </div>
                                        <div className="list-item">
                                            <Badge status="processing" text="语音4444444"/>
                                        </div>
                                    </div>
                                    <div className="clearBtn">
                                        清空
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop: '20px'}}>
                    <Col span={24} style={{position: 'relative'}}>
                        <h3>
                            萌
                        </h3>
                        <Divider />
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声1
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声2
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声3
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声4
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声5
                        </Button>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop: '20px'}}>
                    <Col span={24} style={{position: 'relative'}}>
                        <h3>
                            叫声
                        </h3>
                        <Divider />
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声1
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声2
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声3
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声4
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声5
                        </Button>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop: '20px'}}>
                    <Col span={24} style={{position: 'relative'}}>
                        <h3>
                            打招呼
                        </h3>
                        <Divider />
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声1
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声2
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声3
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声4
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声5
                        </Button>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop: '20px'}}>
                    <Col span={24} style={{position: 'relative'}}>
                        <h3>
                            语气
                        </h3>
                        <Divider />
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声1
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声2
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声3
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声4
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声5
                        </Button>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop: '20px'}}>
                    <Col span={24} style={{position: 'relative'}}>
                        <h3>
                            其他
                        </h3>
                        <Divider />
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声1
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声2
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声3
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声4
                        </Button>
                        <Button className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler()}}>
                            测试音声5
                        </Button>
                    </Col>
                </Row>
            </ContentBox>
        </Box>
    )
}



export default Btn