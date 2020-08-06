import Head from 'next/head'
import { withTranslation } from '../i18n'
import { ContentBox } from '../components/common'

const About = () => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <title>琴吹め / Yume Kotobuki🍭 - about</title>
        </Head>
        <ContentBox>
            comming soon...
        </ContentBox>
    </>
)

About.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header']
})

export default withTranslation('common')(About)
