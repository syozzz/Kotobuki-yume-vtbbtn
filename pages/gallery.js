import Head from "next/head"
import { withTranslation } from '../i18n'
import { ContentBox } from "../components/common"
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '../components/photo'
import { useState, useCallback } from 'react'

const MyGallery = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                <title>琴吹め / Yume Kotobuki 🍭 - gallery</title>
            </Head>
            <ContentBox>
                <div>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: <>{x.title}<br/>{x.author}<br/>{x.date}</>
                                    }))}
                                    styles={{
                                        view: base => ({
                                            ...base,
                                            alignItems: 'center',
                                            display: 'flex ',
                                            height: 'calc(100vh - 54px)',
                                            justifyContent: 'center',
                                            '& > img': {
                                                maxHeight: 'calc(100vh - 90px)',
                                            },
                                        }),
                                    }}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </ContentBox>
        </>
    )
}

Gallery.getInitialProps = async () => ({
    namespacesRequired: ['common', 'header']
})

export default withTranslation('common')(MyGallery)