import Head from 'next/head'
import { withTranslation } from '../i18n'
import { ContentBox } from "../components/common"
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(import('../components/dynamiccomment'), {
    ssr: false
})

const Comment = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <title>琴吹め / Yume Kotobuki 🍭 - comment</title>
            </Head>
            <ContentBox>
                占位 页面说明或者肥梦图片
            </ContentBox>
            <ContentBox>
                <DynamicComponentWithNoSSR/>
            </ContentBox>
        </>
    )
}


Comment.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header']
})

export default withTranslation('common')(Comment)
