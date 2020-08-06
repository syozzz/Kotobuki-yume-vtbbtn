import App from 'next/app'
import { appWithTranslation } from '../i18n'
import { StickyContainer, Sticky } from 'react-sticky'
import Header from '../components/header'
import Tabs from "../components/tabs"

class MyApp extends App {

    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <StickyContainer>
                <Header/>
                <Sticky topOffset={60}>
                    {({
                          style
                      }) => (
                        <div
                            style={{
                                ...style,
                                zIndex: 1000,
                                background: '#ffffff'
                            }}
                        >
                            <Tabs style={{...style}}/>
                        </div>
                    )}
                </Sticky>
                <Component {...pageProps} />
            </StickyContainer>
        )
    }
}

export default appWithTranslation(MyApp)