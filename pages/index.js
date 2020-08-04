import Head from 'next/head'
import Header from '../components/header'
import { withTranslation } from '../i18n'

const Home = () => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <title>琴吹め / Yume Kotobuki🍭 - btn</title>
        </Head>
        <Header/>
    </>
)

Home.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header'],
})

export default withTranslation('common')(Home)