import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onCloseModal, isModalOpen }) => {
  if (!image) return null;

  const description = image.description
    ? image.description.substring(0, 140)
    : "No description available";

  return (
    <Modal
      className={css.modal}
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.modalContent} onClick={onCloseModal}>
        <img
          className={css.modalImg}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <p className={css.modalImgDesc}>{description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;