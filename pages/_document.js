import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        //挂载 styled-components
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => (props) =>
                // App挂载样式
                sheet.collectStyles(<App {...props} />)
        })
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            )
        }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta name="referrer" content="never" />
                    <link rel="icon" href="https://pic.imgdb.cn/item/5f3216b814195aa5948051bf.png" />
                </Head>
                <body>
                    <style global jsx>{`
                          * {
                            margin: 0;
                            padding: 0;
                          }
                          html {
                            font-size: 16px;
                            box-sizing: border-box;
                          }
                          body {
                            font-size: 1rem;
                            background: #ffffff;
                            -webkit-font-smoothing: antialiased;
                            box-sizing: border-box;
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                          }
                          ::-webkit-scrollbar 
                          {
                            width: 7px;
                            height: 10px;
                          }
        
                          ::-webkit-scrollbar-track 
                          {
                            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                            border-radius: 0px;
                            background: white;
                          }
        
                          ::-webkit-scrollbar-thumb 
                          {
                            border-radius: 5px;
                            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                            background: #c1c1c1;
                          }
        
                          ::-webkit-scrollbar-thumb:hover
                          {
                            border-radius: 5px;
                            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                            background: #c1c1c1;
                          }
                          ::-webkit-scrollbar-corner {
                            background-color: #fff;
                          }
                    `}</style>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}