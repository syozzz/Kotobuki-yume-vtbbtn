import styled from 'styled-components'
import styles from "../../styles/info.module.css";
import {
    ClockCircleOutlined
} from '@ant-design/icons'

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

const Notify = () => (
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
    </div>
)

export default Notify