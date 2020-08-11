import styled from 'styled-components'
import { ContentBox } from '../common'
import {useRef, useState} from 'react'
import { Row, Col, Badge, Divider, Button, notification } from 'antd'
import styles from '../../styles/btn.module.css'
import data from '../../public/data/voice.json'
import { withTranslation } from '../../i18n'

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

const Btn = ({ t }) => {

    const [ currentVoice, setCurrentVoice ] = useState(null)

    const radio = useRef(null)

    const clickHandler = (voice) => {
        radio.current.src = voice.path
        radio.current.play()
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
                                            <audio ref={radio} src={currentVoice} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={11}>
                        <Row justify="center">
                            <Col span={20}>
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
                {
                    data.map(item => (
                        <Row key={item.group_key} justify="center" style={{marginTop: '30px'}}>
                            <Col span={24} style={{position: 'relative'}}>
                                <h4>
                                    {t(item.group_key)}
                                </h4>
                                <Divider  />
                                {item.voice_list.map(voice => (
                                    <Button key={voice.voice_key} className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler({...voice})}}>
                                        {t(voice.voice_key)}
                                    </Button>
                                ))}
                            </Col>
                        </Row>
                    ))
                }
            </ContentBox>
        </Box>
    )
}


export default withTranslation('voice')(Btn)

