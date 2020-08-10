import Head from 'next/head'
import { withTranslation } from '../i18n'
import { ContentBox } from "../components/common"


const Comment = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <title>琴吹め / Yume Kotobuki 🍭 - comment</title>
            </Head>
            <ContentBox style={{paddingLeft: '10px'}}>
                评论功能重构为留言板，开发进行中
            </ContentBox>
        </>
    )
}


Comment.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header']
})

export default withTranslation('common')(Comment)
