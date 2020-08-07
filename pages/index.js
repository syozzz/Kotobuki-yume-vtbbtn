import Head from 'next/head'
import { withTranslation } from '../i18n'
import { ContentBox } from '../components/common'
import Info from '../components/info'
import Btn from "../components/btn";

const Home = () => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <title>琴吹め / Yume Kotobuki 🍭 - btn</title>
        </Head>
        <ContentBox>
            <Info/>
        </ContentBox>
        <Btn/>
    </>
)

Home.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header', 'info']
})

export default withTranslation('common')(Home)