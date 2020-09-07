import styled from 'styled-components'
import { ContentBox } from '../common'
import {useRef, useState} from 'react'
import { Row, Col } from 'antd'
import data from '../../public/data/voice.json'
import { withTranslation } from '../../i18n'
import List from './buttonlist'
import Vlist from './videolist'


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
        height: 135px;
        padding: 3px;
        width: 100%;
        
        .btn {
          cursor: pointer;
        }
        
        .btn:hover {
          
        }
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
      margin-top: 10px;
      
      .list-item {
        padding: 13px 0 13px 5px;
        border-bottom: 1px solid rgb(234,234,234);
      }
    }
    
    .clearBtn {
      display: block;
      margin-top: 20px;
      color: #0070f3;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
    
  }
`

const Btn = ({ t }) => {

    const radio = useRef(null)
    //0顺序播放 1随机播放
    const [ order, setOrder ] = useState(undefined)
    const [ curIndex, setCurIndex ] = useState(0)



    const orderPlayHandler = () => {

    }

    const endedHandler = () => {

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
                                            <Row justify="center" style={{height: '100%'}}>
                                                <Col className="btn" span={8} style={{borderRight: '1px dashed #000000'}}>

                                                </Col>
                                                <Col className="btn" span={8} style={{borderRight: '1px dashed #000000'}}>

                                                </Col>
                                                <Col className="btn" span={8}>

                                                </Col>
                                            </Row>
                                            <audio id="yume-voice" onEnded={endedHandler} ref={radio} src="" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={11}>
                        <Vlist/>
                    </Col>
                </Row>
                <List data={data} radio={radio}/>
                <div style={{height: '10px'}}></div>
            </ContentBox>
        </Box>
    )
}


export default withTranslation('voice')(Btn)

