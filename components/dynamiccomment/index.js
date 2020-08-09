import Head from 'next/head'
import { Grid } from '@zeit-ui/react'

const DyComment = () => {

    return (
        <>
            <Head>
                <script key="twitter-call" type="text/javascript" src="/scripts/twitter-widgets.js"></script>
                <script key="valine-call" type="text/javascript" src="/scripts/valine-init.js"></script>
            </Head>
            <Grid.Container justify="center">
                <Grid xs={24} sm={12} style={{maxHeight: '550px', overflow: 'auto'}}>
                    <a className="twitter-timeline" href="https://twitter.com/KotobukiYume?ref_src=twsrc%5Etfw">Tweets
                        by KotobukiYume(需翻墙)</a>
                </Grid>
                <Grid id="comment-box" xs={24} sm={12} style={{maxHeight: '550px', overflow: 'auto'}}>
                    <div className="kycomment"></div>
                </Grid>
            </Grid.Container>
        </>
    )
}

export default DyComment