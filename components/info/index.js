import { withTranslation } from '../../i18n'
import styles from '../../styles/info.module.css'
import styled from 'styled-components'
import { Row, Col, Avatar, Typography } from 'antd'

import {
    TwitterOutlined,
    YoutubeOutlined
} from '@ant-design/icons'

import Icon from '@ant-design/icons/lib/components/Icon'

import NotifyBox from '../notify'

const { Text } = Typography

const BiliIconSvg = (props) => (
    <svg viewBox="0 0 1024 1024" fill="currentColor"
         width="1em" height="1em">
        <path
            d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"
            p-id="1780"></path>
    </svg>
)

const BiliIcon = props => <Icon component={BiliIconSvg} {...props} />

const ALink = styled.a`
  text-decoration: none;
  padding-right: 8px;
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
                            <p style={{position: 'relative'}}>
                                <ALink href="https://twitter.com/KotobukiYume" target="_blank">
                                    <TwitterOutlined style={{color: '#1da1f2', fontSize: '20px'}}/>
                                </ALink>
                                <ALink href="https://www.youtube.com/channel/UCezfmwKc2B8dtVIAgRHXrKQ" target="_blank">
                                    <YoutubeOutlined style={{color: 'red', fontSize: '20px'}}/>
                                </ALink>
                                <ALink href="https://space.bilibili.com/442426299" target="_blank">
                                    <BiliIcon style={{color: '#1da1f2', fontSize: '22px'}} />
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
