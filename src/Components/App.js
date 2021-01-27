import { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import './App.css';


import Searchbar from './Searchbar/Searchbar'
import ImageGalleryInfo from './ImageGalleryInfo/ImageGalleryInfo'


class App extends Component {
  state = {
    imageName: '',
  };

  handleSearchForm = imageName => {
    this.setState({ imageName });
  };
  
  render() {
   
    return (
     <>
      <Searchbar onSubmit={this.handleSearchForm} />
        <ImageGalleryInfo imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
        </>
    );
  }
}

export default App;
