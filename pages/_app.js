import App from 'next/app'
import { appWithTranslation } from '../i18n'
import { StickyContainer, Sticky } from 'react-sticky'
import Header from '../components/header'
import Tabs from '../components/tabs'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'


Router.onRouteChangeStart = url => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

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
            <ZeitProvider>
                <CssBaseline />
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
            </ZeitProvider>
        )
    }
}

export default appWithTranslation(MyApp)