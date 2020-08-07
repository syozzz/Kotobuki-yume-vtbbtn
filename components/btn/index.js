import styled from 'styled-components'
import { ContentBox } from '../common'
import { Grid, Row, Col, Text } from '@zeit-ui/react'

const Box = styled.div`
  margin-top: 100px;
  height: 2000px;
  background: #F9F9F9;

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
        padding: 13px 0;
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

const Btn = () => (
    <Box>
        <ContentBox>
            <Grid.Container justify="center">
                <Grid xs={24} sm={13} style={{position: 'relative'}}>
                    <Row justify="center">
                        <Col span={22}>
                            <div className="container">
                                <div className="inner-box">
                                    <div className="content">

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
                                        语音11111111111111
                                    </div>
                                    <div className="list-item">
                                        语音22222222222222
                                    </div>
                                    <div className="list-item">
                                        语音33333333333333
                                    </div>
                                    <div className="list-item">
                                        语音44444444444444
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
        </ContentBox>
    </Box>
)

export default Btn