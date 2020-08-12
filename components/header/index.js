import styled from 'styled-components'
import { withTranslation, i18n } from '../../i18n'
import { Popover, Space } from 'antd'
import styles from '../../styles/header.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

const FunsBox = styled.div`
  position: fixed;
  display: inline-block;
  z-index: 1001;
  height: 30px;
  width: auto;
  line-height: 30px;
  padding: 0 10px;
  color: white;
  border-left: none;
  font-size: 14px;
  left: 0;
  font-weight: bold;
  border-top-right-radius: 5px;  
  -moz-border-radius-topright: 5px;
  border-bottom-right-radius: 5px;
  -moz-border-radius-bottomright: 5px;
  
  &.bilibox {
      background: #1da1f2;
      top: 100px;
  }
  
  &.ytbbox {
      background: red;
      top: 135px;
  }
`

const TopBox = styled.div`
  height: 60px;
  max-width: 1000px;
  user-select: none;
  padding: 0px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  
  @media(max-width: 999px) {
    padding: 0 10px;
  }
  
  .title-box {
    flex: 1 1;
    color: #000000;
    position: relative;
    
    .icon {
      display: inline-block;
      position: relative;
      top: 3px;
      padding-right: 3px;
      width: 16px;
      height: 16px;
      background: url("https://pic.imgdb.cn/item/5f2f9d3614195aa594c92bcf.jpg") no-repeat center center;
      background-size: contain;
    }
  }
  
  .tools-box {
    flex: 0 0 auto;
    transition: color 0.2s ease 0s;
  }
`

const languageChangeHandler = (value) => {
    i18n.changeLanguage(value)
}

const popContent = () => (
    <div>
        <Space direction="vertical">
            <span className={styles.topLink} onClick={() => {languageChangeHandler('cn')}}>简体中文</span>
            <span className={styles.topLink} onClick={() => {languageChangeHandler('en')}}>English</span>
            <span className={styles.topLink} onClick={() => {languageChangeHandler('jp')}}>日本語</span>
        </Space>
    </div>
)

const Header = ({ t }) => {

    const [ biliFuns, setBiliFuns ] = useState(0)
    const [ ytbFuns, setYtbFuns ] = useState(0)
    const [ hide, setHide ] = useState(false)

    useEffect(() => {
        axios.get('/api/funs-bili')
            .then(function (response) {
                if (response.data.code === 0) {
                    setBiliFuns(response.data.data.follower)
                }
            }).catch(function (e) {
                console.error('/api/funs-bili 异常')
            })
        setTimeout(function () {
            setHide(true)
        }, 4000)
    }, [])

    useEffect(() => {
        axios.get('/api/funs-ytb')
            .then(function (response) {
                if (response.data.code === 0) {
                    if (response.data.items[0]) {
                        setYtbFuns(response.data.items[0].statistics.subscriberCount)
                    }
                }
            }).catch(function (e) {
                console.error('/api/funs-ytb 异常')
            })
    }, [])

    return (
        <TopBox>
            <div className="title-box">
                <span className="icon"></span>{t('title')}
            </div>
            <div className="tools-box">
                <Popover className={styles.topLink} content={popContent}>{t('language')}</Popover>
                <a target="_blank" className={styles.topLink}
                   href="https://github.com/syozzz/Kotobuki-yume-vtnbtn">{t('repo')}</a>
            </div>
            <FunsBox className={`bilibox ${hide ? 'animate__animated animate__lightSpeedOutLeft' : ''}`}>
                bilibili fans: {biliFuns > 0 ? biliFuns : '-'}
            </FunsBox>
            <FunsBox className={`ytbbox ${hide ? 'animate__animated animate__lightSpeedOutLeft' : ''}`}>
                youtube fans: {ytbFuns > 0 ? ytbFuns : '-'}
            </FunsBox>
        </TopBox>
    )

}

export default withTranslation('header')(Header)