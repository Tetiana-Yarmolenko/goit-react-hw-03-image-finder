import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

import imagesAPI from '../../service/imagesApi';
import ImageGallery from '../ImageGallary/ImageGallery';
import Button from '../Button/Button';
import LoaderPreview from '../Loader/Loader';




export default class ImageGalleryInfo extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    status: 'idle',
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    
    if (prevName !== nextName) {
     this.setState({images: [], page: 1})
    }
    
    if (prevName !== nextName || prevPage !== nextPage) {
      this.searchMoreImages(nextName, nextPage);
      }
  }

  searchMoreImages(nextName, nextPage) {
    this.setState({ status: 'pending' });

    imagesAPI
        .fetchImage(nextName, nextPage)
        .then(images => {
          if (images.total === 0) {
            toast.dark('No images. Please try another query!');
            this.setState({status: 'rejected'})
            return;
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
            status: 'resolved',
          }));
        })
    .catch(error => this.setState({ error, status: 'rejected' }))
    .finally(() => {
        window.scrollTo({
       top: document.documentElement.scrollHeight,
       behavior: 'smooth',
      });
      });
  }
    

   onClickLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
 

  render() {
    const { images, status } = this.state;

    return (
      <>
        {status === 'idle' && (
          <div
            style={{
              margin: '20px auto',
              textAlign: 'center',
              fontSize: '40px',
            }}
          >
            Please, enter a query!
          </div>
        )}
         {status === 'pending' && (
            <LoaderPreview />  
        )}
        {(images.length > 0 ||  status === 'resolved') && (
          <>
            <ImageGallery images={images} />
            <Button onClickLoadMore={this.onClickLoadMore} />
          </>
        )}
        {status === 'rejected' && null}
      </>
    );
  }
}

ImageGalleryInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
}