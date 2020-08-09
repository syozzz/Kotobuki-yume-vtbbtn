import styled from 'styled-components'
import { withTranslation, i18n } from '../../i18n'
import { Popover, Spacer, Link } from '@zeit-ui/react'
import styles from '../../styles/header.module.css'
import Head from "next/head";

const TopBox = styled.div`
  height: 60px;
  max-width: 1000px;
  user-select: none;
  padding: 0px 16pt;
  margin: 0 auto;
  display: flex;
  align-items: center;
  
  .title-box {
    flex: 1 1;
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
        <span className={styles.topLink} onClick={() => {languageChangeHandler('cn')}}>简体中文</span>
        <Spacer y={.25} />
        <span className={styles.topLink} onClick={() => {languageChangeHandler('en')}}>English</span>
        <Spacer y={.25} />
        <span className={styles.topLink} onClick={() => {languageChangeHandler('jp')}}>日本語</span>
    </div>
)

const Header = ({ t }) => (
    <TopBox>
        <Head>
            <script key="valine-call" type="text/javascript" src="/scripts/MiniValine.min.js"></script>
        </Head>
        <div className="title-box">
            <span className="icon"></span>{t('title')}
        </div>
        <div className="tools-box">
            <Popover trigger="hover"  className={styles.topLink} content={popContent}>{t('language')}</Popover>
            <Link target="_blank" className={styles.topLink} href="https://github.com/syozzz/Kotobuki-yume-vtnbtn">{t('repo')}</Link>
        </div>
    </TopBox>
)

export default withTranslation('header')(Header)