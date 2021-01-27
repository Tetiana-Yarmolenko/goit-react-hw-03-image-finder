import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClickLoadMore }) {
  return (
    <div className={s.Container}>
      <button type="button" className={s.Button} onClick={onClickLoadMore}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};