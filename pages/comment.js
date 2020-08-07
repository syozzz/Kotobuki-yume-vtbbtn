import Head from 'next/head'
import { withTranslation } from '../i18n'
import {ContentBox} from "../components/common";

const Comment = () => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <title>琴吹め / Yume Kotobuki 🍭 - comment</title>
        </Head>
        <ContentBox>
            comming soon...
        </ContentBox>
    </>
)

Comment.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header']
})

export default withTranslation('common')(Comment)
