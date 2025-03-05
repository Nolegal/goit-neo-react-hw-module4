import "./App.css";
import { useEffect, useState } from "react";
import { fetchImages } from "./api/react-pictures";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ToastContainer from "./components/ToastContainer/ToastContainer";
import { toast } from "react-toastify";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showToastContainer, setShowToastContainer] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!searchQuery) return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        const res = data.results;

        setTotalPages(data.total_pages);

        setImages((prevState) => {
          return [...prevState, ...res];
        });
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [page, searchQuery]);

  const onSearchBtn = (query) => {
    if (!query.trim()) {
      toast.error("Please fill in the search field!");

      return;
    }
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setShowToastContainer(true);
  };

  const onLoadMoreBtn = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    } else {
      toast.info("No more images to load.");
    }
  };

  const onImageClick = (image) => {
    setSelectedImage(image);
  };

  const onCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [images, page]);

  useEffect(() => {
    if (selectedImage) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [selectedImage]);

  return (
    <div>
      <SearchBar onSearchBtn={onSearchBtn} />
      {showToastContainer && <ToastContainer />}
      <ImageGallery images={images} onImageClick={onImageClick} />
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage message="Something went wrong. Please try again." />
      )}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn onLoadMoreBtnClick={onLoadMoreBtn} />
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onCloseModal={onCloseModal}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default App;