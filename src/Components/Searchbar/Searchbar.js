import { Component } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';


class Searchbar extends Component {
     state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase()});
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.error('Please, enter something!');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            type="text"
            name="imageName"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            className={s.SearchFormInput}
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  imageName: PropTypes.string,
};
export default  Searchbar