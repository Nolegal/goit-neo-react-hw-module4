import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div onClick={onImageClick}>
      <img
        className={css.imageCard}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;