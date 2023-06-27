import {FormRow, FormRowSelect} from "../../components"; 
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearValues, createUser, editUser, handleChange } from "../../features/user/userSlice";
import { createBook, editBook } from "../../features/book/bookSlice";
import { Link } from "react-router-dom";


const AddBook = () => {

  const {
    isbn13,
    isbn10,
    title,
    subTitle,
    authors,
    categories,
    thumbnail,
    description,
    publishedYear,
    averageRating,
    copies,
    ItemStatus,
    isLoading,
    isEditing,
    editBookId,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const statusList = ['available', 'unavailable','in_reserve'];
  const handleSubmit = (event) =>{
    event.preventDefault();
    if( 
      !isbn13 ||
      !isbn10 ||
      !title ||
      !subTitle ||
      !authors ||
      !categories ||
      !thumbnail ||
      !description ||
      !publishedYear ||
      !averageRating ||
      !copies){
      toast.error("Please fill out all fields");
      return;
    }
    
    if(isEditing){
      dispatch(editBook({bookId: editBookId, book:{  isbn13,
        isbn10,
        title,
        subTitle,
        authors,
        categories,
        thumbnail,
        description,
        publishedYear,
        averageRating,
        copies,
        ItemStatus}}));
      return;
    }
    dispatch(createBook({ 
      isbn13,
      isbn10,
      title,
      subTitle,
      authors,
      categories,
      thumbnail,
      description,
      publishedYear,
      averageRating,
      copies,
      ItemStatus
    }));
  };

  const handleChangeInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    dispatch(handleChange({name, value}));
  }

  

  return (
    <Wrapper>
      <form className="form" >
        <h3>{isEditing ? 'edit book' : 'add book'}</h3>
        <div className="form-center">

          <FormRow 
                type='text'
                name='isbn13'
                value={isbn13}
                handleChange={handleChangeInput}
            />
            <FormRow 
            type='text'
            name='isbn10'
            value={isbn10}
            handleChange={handleChangeInput}
        />
        <FormRow 
            type='text'
            name='title'
            value={title}
            handleChange={handleChangeInput}
        />
         <FormRow
            labelText='subtitle' 
            type='text'
            name='subTitle'
            value={subTitle}
            handleChange={handleChangeInput}
        />
        <FormRow
            type='text'
            name='authors'
            value={authors}
            handleChange={handleChangeInput}
        />
        <FormRow
            type='text'
            name='authors'
            value={authors}
            handleChange={handleChangeInput}
        />
        <FormRow
            type='text'
            name='categories'
            value={categories}
            handleChange={handleChangeInput}
        />
                <FormRow
            type='text'
            name='thumbnail'
            value={thumbnail}
            handleChange={handleChangeInput}
        />
       <FormRow
            type='text'
            name='description'
            value={description}
            handleChange={handleChangeInput}
        />
      <FormRow
            type='text'
            name='publishedYear'
            value={publishedYear}
            handleChange={handleChangeInput}
        />
      <FormRow
            type='text'
            name='averageRating'
            value={averageRating}
            handleChange={handleChangeInput}
        />
        <FormRow
            type='text'
            name='copies'
            value={copies}
            handleChange={handleChangeInput}
        />
           <FormRowSelect 
           labelText='item status'
           name='ItemStatus'
           value={ItemStatus}
           handleChange={handleChangeInput}
           list={statusList}
         />

          <div className="btn-container">
            <button
              type="button" 
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}>
              clear
            </button>
            <button
              type="submit" 
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}>
              submit
            </button>

            <Link
              type="button" 
              to={`/book-list`}
              className="btn btn-block clear-btn">
              More
            </Link>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddBook