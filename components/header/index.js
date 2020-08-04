import styled from 'styled-components'
import { withTranslation, i18n } from '../../i18n'
import { Popover, Spacer, Link } from '@zeit-ui/react'
import styles from '../../styles/header.module.css'

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
  }
  
  .tools-box {
    flex: 0 0 auto;
    transition: color 0.2s ease 0s;
  }
`
const languageChangeHandler = (value) => {
    i18n.changeLanguage(value)
    return false
}

const popContent = () => (
    <div>
        <Link href="#" className={styles.topLink} onClick={() => {languageChangeHandler('cn')}}>简体中文</Link>
        <Spacer y={.25} />
        <Link href="#" className={styles.topLink} onClick={() => {languageChangeHandler('en')}}>English</Link>
        <Spacer y={.25} />
        <Link href="#" className={styles.topLink} onClick={() => {languageChangeHandler('jp')}}>日本語</Link>
    </div>
)

const Header = ({ t }) => {

    return (
        <>
            <TopBox>
                <div className="title-box">
                    {t('title')}
                </div>
                <div className="tools-box">
                    <Popover trigger="hover"  className={styles.topLink} content={popContent}>{t('language')}</Popover>
                    <Link className={styles.topLink} href="#">{t('about')}</Link>
                </div>
            </TopBox>
        </>
    )

}

export default withTranslation('header')(Header)