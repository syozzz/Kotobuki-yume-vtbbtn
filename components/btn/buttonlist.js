import {Button, Col, Divider, Row} from "antd";
import styles from "../../styles/btn.module.css";
import { withTranslation } from '../../i18n'

const List = React.memo(({ t, data, radio }) => {

    const clickHandler = (voice) => {
        radio.current.src = voice.path
        radio.current.play()
    }

    return (
        data.map(item => (
            <Row key={item.group_key} justify="center" style={{marginTop: '30px'}}>
                <Col span={24} style={{position: 'relative'}}>
                    <h4>
                        {t(item.group_key)}
                    </h4>
                    <Divider  />
                    {item.voice_list.map(voice => (
                        <Button key={voice.voice_key} className={styles.voiceBtn} type="primary" shape="round" size="large" onClick={() => {clickHandler({...voice})}}>
                            {t(voice.voice_key)}
                        </Button>
                    ))}
                </Col>
            </Row>
        ))
    )
})

export default withTranslation('voice')(List)