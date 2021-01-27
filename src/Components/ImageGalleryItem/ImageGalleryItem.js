import { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
    state = {
        showModal: false,
 }
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
  }

    render() {
        const { webformatURL, tags, largeImageURL} = this.props;
        const { showModal } = this.state;

        return (
            <li className={s.ImageGalleryItem}>
                <img
                    src={webformatURL}
                    alt={tags}
                    className={s.ImageGalleryItemImage}
                    onClick={this.toggleModal}
                />
                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img
                            style={{
                                display: 'block',
                                maxWidth: '800px',
                                height: 'auto',
                            }}
                    src={largeImageURL}
                            alt={tags}
                    />    
                    </Modal>
               )}          
            </li>); 
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired 
}