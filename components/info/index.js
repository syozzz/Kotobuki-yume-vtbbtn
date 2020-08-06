import { withTranslation } from '../../i18n'
import { Grid, Row, Col, Avatar, Text } from '@zeit-ui/react'
import styles from '../../styles/info.module.css'
import { Twitter, Youtube, Tv } from '@zeit-ui/react-icons'
import styled from 'styled-components'

const ALink = styled.a`
  text-decoration: none;
  padding-right: 8px;
  
  &.top {
    position: relative;
    bottom: 2px;
  }
`;

const Info = ({ t }) => (
    <Grid.Container gap={2} justify="center">
        <Grid xs={24} sm={12}>
            <Row justify="center">
                <Col span={11} className={styles.avatarBox}>
                    <Avatar src="https://pic.imgdb.cn/item/5f26c4b214195aa594996403.jpg" size="large" />
                </Col>
                <Col span={13}>
                    <div className={styles.descBox}>
                        <Text h4>{t('name')}</Text>
                        <Text p size={14}>
                            {t('alias_key')}：
                            {t('alias_del') ?
                                <Text span del>
                                    {`${t('alias_del')||''} `}
                                </Text> : null
                            }
                            <Text span>
                                {t('alias')}
                            </Text>
                        </Text>
                        <Text p size={14}>
                            {t('birthday_key')}：
                            {t('birthday')}
                        </Text>
                        <Text p style={{marginTop: '3px'}}>
                            <ALink href="https://twitter.com/KotobukiYume" target="_blank">
                                <Twitter size={18} color="#1da1f2" />
                            </ALink>
                            <ALink href="https://www.youtube.com/channel/UCezfmwKc2B8dtVIAgRHXrKQ" target="_blank">
                                <Youtube size={18} color="red" />
                            </ALink>
                            <ALink className="top" href="https://space.bilibili.com/442426299" target="_blank">
                                <Tv size={18} color="#1D97CE" />
                            </ALink>
                        </Text>
                    </div>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={8}>
                </Col>
            </Row>
        </Grid>
        <Grid xs={24} sm={12}>

        </Grid>
    </Grid.Container>
)

export default withTranslation('info')(Info)
