import { withTranslation } from '../../i18n'
import styles from '../../styles/info.module.css'
import styled from 'styled-components'
import { Row, Col, Avatar, Typography } from 'antd'
import {
    TwitterOutlined,
    YoutubeOutlined
} from '@ant-design/icons'
import NotifyBox from '../notify'

const { Text } = Typography

const BiliIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("/images/bilibili-fill.png") no-repeat center center;
  background-size: contain;
  position: absolute;
  top: -1px;
`

const ALink = styled.a`
  text-decoration: none;
  padding-right: 8px;
  
  &.top {
    position: relative;
    bottom: 2px;
  }
`

const Info = ({ t }) => (

    <Row justify="center">
        <Col xs={24} sm={12}>
            <Row justify="center">
                <Col span={11} className={styles.avatarBox}>
                    <Avatar src="https://pic.imgdb.cn/item/5f26c4b214195aa594996403.jpg" size={88} />
                </Col>
                <Col span={13}>
                    <div className={styles.descBox}>
                        <h4>{t('name')}</h4>
                            <p style={{fontSize: '14px'}}>
                                {t('alias_key')}：
                                {t('alias_del') ?
                                    <Text  delete>
                                        {`${t('alias_del')||''} `}
                                    </Text> : null
                                }
                                <span>
                                {t('alias')}
                            </span>
                            </p>
                            <p style={{fontSize: '14px'}}>
                                {t('birthday_key')}：
                                {t('birthday')}
                            </p>
                            <p style={{marginTop: '3px', position: 'relative'}}>
                                <ALink href="https://twitter.com/KotobukiYume" target="_blank">
                                    <TwitterOutlined style={{color: '#1da1f2', fontSize: '20px'}}/>
                                </ALink>
                                <ALink href="https://www.youtube.com/channel/UCezfmwKc2B8dtVIAgRHXrKQ" target="_blank">
                                    <YoutubeOutlined style={{color: 'red', fontSize: '20px'}}/>
                                </ALink>
                                <ALink className="top" href="https://space.bilibili.com/442426299" target="_blank">
                                    <BiliIcon/>
                                </ALink>
                            </p>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col xs={24} sm={12} >
            <Row justify="center">
                <Col span={11}>
                    <NotifyBox/>
                </Col>
            </Row>
        </Col>
    </Row>
)

export default withTranslation('info')(Info)
