import Head from 'next/head'
import Header from '../components/header'
import styled from 'styled-components'

const Box = styled.div`
  color: red;
`;


const Home = () => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <title>琴吹め / Yume Kotobuki🍭 - btn</title>
        </Head>
        <Header/>
        <Box>vtb-btn</Box>
    </>
);

export default Home;