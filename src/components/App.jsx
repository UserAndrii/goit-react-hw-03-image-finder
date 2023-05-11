import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import galleryAPI from '../services/galleryAPI';
import errorImg from '../images/oops-error.jpg';

import { Container } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import HandleError from './HandleError/HandleError';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    pageCount: 0,
    images: [],
    largeImageURL: '',
    loading: false,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, images, searchValue } = this.state;

    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      try {
        this.setState({ loading: true, error: false });
        const response = await galleryAPI(searchValue, page);
        const { total, hits, totalHits } = response.data;

        if (total === 0) {
          this.setState({ error: true });
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }

        this.setState({
          images: [...images, ...hits],
          pageCount: Math.ceil(totalHits / 12),
        });
      } catch (error) {
        this.setState({ error: true });
        toast.error(
          'Oops, something went wrong 🙁. Please try reloading the page and try again.'
        );
        console.log(error.message);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = searchValue => {
    if (searchValue === this.state.searchValue) {
      toast.error(
        'You have already searched for this keyword. Please try another one.'
      );
      return;
    }
    this.setState({ searchValue, page: 1, images: [], pageCount: 0 });
  };

  handleLoadMoreClick = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  calculatePageCount = (totalItems, itemsPerPage) => {
    return Math.ceil(totalItems / itemsPerPage);
  };

  handleImageClick = ({ target: { dataset } }) => {
    const largeImageURL = dataset.largeimg;
    this.setState({ largeImageURL });
  };

  onCloseModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { images, loading, page, pageCount, error, largeImageURL } =
      this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}

        {images.length > 0 && (
          <ImageGallery
            images={images}
            handleImageClick={this.handleImageClick}
          />
        )}

        {page < pageCount && <Button onClick={this.handleLoadMoreClick} />}

        {largeImageURL && (
          <Modal onClose={this.onCloseModal} largeImageURL={largeImageURL} />
        )}

        {error && (
          <HandleError imageURL={errorImg} alt={'Something went wrong'} />
        )}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
          }}
        />
      </Container>
    );
  }
}
