import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { fetchPictures } from './services/PicturesApi';
import scrollPageDown from './helpers/scrollPageDown';
import Loader from 'react-loader-spinner';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
    state = {
        searchQuery: '',
        page: 1,
        images: [],
        loading: false,
        showModal: false,
        largeImage: {},
    };

    componentDidUpdate(prevProps, prevState) {
        const { searchQuery } = this.state;

        if (searchQuery !== prevState.searchQuery) {
            this.fetchImages()
                .catch(error => console.log(error))
                .finally(() => this.setState({ loading: false }));
        }
    }

    fetchImages = () => {
        const { searchQuery, page } = this.state;

        this.setState({ loading: true });

        return fetchPictures(searchQuery, page).then(images => {
            console.log(images);
            this.setState(prevState => ({
                images: [...prevState.images, ...images],
                page: prevState.page + 1,
            }));
        });
    };

    handlerFormSubmit = searchQuery =>
        this.setState({ searchQuery, page: 1, images: [] });

    handleOpenModal = largeImage => {
        this.setState({ largeImage });
        this.toggleModal();
    };

    handleOnLoadClick = () => {
        this.setState({ loading: true });
        this.fetchImages()
            .then(() => scrollPageDown())
            .catch(error => console.log(error))
            .finally(() => this.setState({ loading: false }));
    };

    toggleModal = () =>
        this.setState(({ showModal }) => ({ showModal: !showModal }));

    hideLoaderInModal = () => this.setState({ loading: false });

    render() {
        const {
            handlerFormSubmit,
            handleOpenModal,
            handleOnLoadClick,
            toggleModal,
            hideLoaderInModal,
        } = this;
        const { images, loading, showModal, largeImage } = this.state;

        return (
            <>
                <ToastContainer autoClose={3000} />
                <Searchbar onSubmit={handlerFormSubmit} />
                {loading && (
                    <Loader
                        className="spinner"
                        type="Circles"
                        color="#00BFFF"
                        height={300}
                        width={300}
                    />
                )}
                {images.length !== 0 && (
                    <ImageGallery
                        images={images}
                        onOpenModal={handleOpenModal}
                    />
                )}
                {loading && !showModal && (
                    <Loader
                        className="spinner"
                        type="Circles"
                        color="#00BFFF"
                        height={300}
                        width={300}
                    />
                )}

                {!loading && images[0] && (
                    <Button onClick={handleOnLoadClick} />
                )}

                {showModal && (
                    <Modal onClose={toggleModal}>
                        {loading && (
                            <Loader
                                className="spinner"
                                type="Circles"
                                color="#00BFFF"
                                height={300}
                                width={300}
                            />
                        )}
                        <img
                            src={largeImage.largeImageURL}
                            alt={largeImage.tags}
                            onLoad={hideLoaderInModal}
                        />
                    </Modal>
                )}
            </>
        );
    }
}

export default App;
