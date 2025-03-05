import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMoreBtnClick }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onLoadMoreBtnClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;