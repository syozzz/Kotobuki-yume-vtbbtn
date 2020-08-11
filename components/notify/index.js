import styled from 'styled-components'
import styles from '../../styles/info.module.css'
import {
    ClockCircleOutlined
} from '@ant-design/icons'
import {useEffect, useState} from 'react'
import axios from 'axios'

const BiliBiliBox = styled.div`
  position: fixed;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background: #1da1f2;
  color: white;
  border-left: none;
  font-size: 14px;
  left: 0;
  top: 100px;
  border-top-right-radius: 5px;  
  -moz-border-radius-topright: 5px;
  border-bottom-right-radius: 5px;
  -moz-border-radius-bottomright: 5px;
  
  .ant-badge-count {
    box-shadow: 0 0 0 0;
  }
`

const NotifyBox = styled.div`
  color: rgba(0,0,0,.6);
  font-size: 14px;
  position: relative;
  margin-left: 10px;
  margin-top: 5px;
 
  
  @-webkit-keyframes opacity {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
  }
  @keyframes opacity {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
  }
  
  &:before {
    content: '[';
    position: absolute;
    left: -8px;
    top: 1px;
  }
  
  &:after {
    content: ']';
    position: relative;
    left: 3px;
    bottom: 1px;
  }
  
  &:before, &:after {
    color: #16a085;
    animation: 2s linear 0s normal none infinite opacity;
    -webkit-animation: 2s ease-out 0s normal none infinite opacity;
    -moz-animation: 2s ease-out 0s normal none infinite opacity;
    -o-animation: 2s ease-out 0s normal none infinite opacity;
  }
  
`

const Notify = ({follower}) => {

    const [ biliFuns, setBiliFuns ] = useState(0)

    useEffect(() => {
        axios.get('/api/bilifuns')
            .then(function (response) {
                setBiliFuns(response.data.data.follower)
            })
    }, [])

    return (
        <div className={styles.notifyBox}>
            <h4>
            <span style={{position: 'relative', top: '1px', paddingRight: '3px'}}>
                <ClockCircleOutlined style={{fontSize: '18px', color: '#1da1f2'}}/>
            </span>直播动态(beta)
            </h4>
            <NotifyBox>
                【youtube】正在直播...
            </NotifyBox>
            <NotifyBox>
                【bilibili】未开播
            </NotifyBox>
            <BiliBiliBox>
                bilibili fans: {biliFuns > 0 ? biliFuns : '-'}
            </BiliBiliBox>
        </div>
    )

}

export default Notify