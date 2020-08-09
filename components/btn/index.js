import styled from 'styled-components'
import { ContentBox } from '../common'
import { useState } from 'react'
import { Grid, Row, Col, Text, Badge, Divider, Button, Spacer, useToasts } from '@zeit-ui/react'
import styles from '../../styles/btn.module.css'

const Box = styled.div`
  margin-top: 50px;
  background: #F9F9F9;
  padding-bottom: 20px;

  @media (max-width: 649px) {
    padding-left: 5px;
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
        padding: 13px 0 13px 15px;
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

    const [toasts, setToast] = useToasts()

    const [ count, setCount ] = useState(0)

    const clickHandler = () => {
        setCount(count + 1);
        if (count <= 2) {
            setToast({
                text: '喂，别点了啊，铁咩！音声都还没呢',
                type: 'warning'
            })
        } else {
            setToast({
                text: '你再点爷摸了',
                type: 'warning'
            })
        }
    }

    return (
        <Box>
            <ContentBox>
                <Grid.Container justify="center">
                    <Grid xs={24} sm={13} style={{position: 'relative'}}>
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
                    </Grid>
                    <Grid xs={24} sm={11}>
                        <Row justify="center">
                            <Col offset={2} span={20}>
                                <div className="histroy-box">
                                    <Text h5>
                                        最近播放
                                    </Text>
                                    <div className="histroy-list">
                                        <div className="list-item">
                                            <Badge.Anchor placement="topLeft">
                                                <Badge size="mini" type="error" dot style={{
                                                    position: 'absolute',
                                                    top: '7px', left: '-15px', backgroundColor: '#7BDFC3'
                                                }}/>
                                                语音11111111111111
                                            </Badge.Anchor>
                                        </div>
                                        <div className="list-item">
                                            <Badge.Anchor placement="topLeft">
                                                <Badge size="mini" type="error" dot style={{
                                                    position: 'absolute',
                                                    top: '7px', left: '-15px', backgroundColor: '#7BDFC3'
                                                }}/>
                                                语音22222222222222
                                            </Badge.Anchor>
                                        </div>
                                        <div className="list-item">
                                            <Badge.Anchor placement="topLeft">
                                                <Badge size="mini" type="error" dot style={{
                                                    position: 'absolute',
                                                    top: '7px', left: '-15px', backgroundColor: '#7BDFC3'
                                                }}/>
                                                语音33333333333333
                                            </Badge.Anchor>
                                        </div>
                                        <div className="list-item">
                                            <Badge.Anchor placement="topLeft">
                                                <Badge size="mini" type="error" dot style={{
                                                    position: 'absolute',
                                                    top: '7px', left: '-15px', backgroundColor: '#7BDFC3'
                                                }}/>
                                                语音44444444444444
                                            </Badge.Anchor>
                                        </div>
                                    </div>
                                    <div className="clearBtn">
                                        清空
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Grid.Container>
                <Grid.Container justify="center" style={{marginTop: '20px'}}>
                    <Grid xs={24} style={{position: 'relative'}}>
                        <Row justify="center">
                            <Col span={24}>
                                <Text h3>
                                    萌
                                </Text>
                                <Divider y={1}/>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声1</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声2</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声3</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声4</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声5</Button>
                            </Col>
                        </Row>
                        <Row justify="center" style={{marginTop: '20px'}}>
                            <Col span={24}>
                                <Text h3>
                                    叫声
                                </Text>
                                <Divider y={1}/>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声1</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声2</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声3</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声4</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声5</Button>
                            </Col>
                        </Row>
                        <Row justify="center" style={{marginTop: '20px'}}>
                            <Col span={24}>
                                <Text h3>
                                    打招呼
                                </Text>
                                <Divider y={1}/>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声1</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声2</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声3</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声4</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声5</Button>
                            </Col>
                        </Row>
                        <Row justify="center" style={{marginTop: '20px'}}>
                            <Col span={24}>
                                <Text h3>
                                    语气
                                </Text>
                                <Divider y={1}/>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声1</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声2</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声3</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声4</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声5</Button>
                            </Col>
                        </Row>
                        <Row justify="center" style={{marginTop: '20px'}}>
                            <Col span={24}>
                                <Text h3>
                                    其他
                                </Text>
                                <Divider y={1}/>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声1</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声2</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声3</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声4</Button>
                                <Button className={styles.voiceBtn}
                                        auto ghost type="success"
                                        onClick={() => {clickHandler()}}>测试音声5</Button>
                            </Col>
                        </Row>
                    </Grid>
                </Grid.Container>
            </ContentBox>
        </Box>
    )
}



export default Btn