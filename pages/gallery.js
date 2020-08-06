import Head from "next/head"
import { withTranslation } from '../i18n'
import {ContentBox} from "../components/common";

const Gallery = () => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <title>琴吹め / Yume Kotobuki🍭 - gallery</title>
        </Head>
        <ContentBox>
            comming soon...
        </ContentBox>
    </>
)

Gallery.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header']
})

export default withTranslation('common')(Gallery)