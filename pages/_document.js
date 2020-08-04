import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { CssBaseline } from '@zeit-ui/react'

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        //挂载 zeit-ui
        const styles = CssBaseline.flush()
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
                    {styles}
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
                </Head>
                <body>
                    <style global jsx>{`
                          * {
                            margin: 0;
                            padding: 0;
                          }
                          html {
                            font-size: 16px;
                          }
                          body {
                            font-size: 1rem;
                            -webkit-font-smoothing: antialiased;
                            box-sizing: border-box;
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                          }
                    `}</style>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}