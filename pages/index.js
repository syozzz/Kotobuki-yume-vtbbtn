import Head from 'next/head'
import Header from "../components/header";

const Home = () => (
    <>
        <Head>
            <title>琴吹ゆめ / Yume Kotobuki🍭 - btn</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta charSet="utf-8" />
            <meta name="referrer" content="never" />
        </Head>
        <Header/>
        <div>vtb-btn</div>
    </>
);

export default Home;