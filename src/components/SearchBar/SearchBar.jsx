import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
// import searchIcon from "../../assets/search.svg";

import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSearchBtn }) => {
  const onSubmit = (values, actions) => {
    onSearchBtn(values.query);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        query: "",
      }}
      onSubmit={onSubmit}
    >
      <Form className={css.searchBar}>
        <Field name="query" className={css.searchInput} />
        <button className={css.searchBtn} type="submit">
          <IoIosSearch/>
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;