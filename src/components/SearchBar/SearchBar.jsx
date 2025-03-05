import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";

import toast, { Toaster } from 'react-hot-toast';

import { IoIosSearch } from "react-icons/io";

const notify = () => {
  toast.error('Please type something');
};

const SearchBar = ({ onSearchBtn }) => {
  
  const onSubmit = (values, actions) => {
    if (!values.query.trim()) {
      notify();
  
      return;
    }
    onSearchBtn(values.query);
    actions.resetForm();
  };

  return (<>
       <Toaster position="top-center" />
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
   
  </>
  
  );
};

export default SearchBar;