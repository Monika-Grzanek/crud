import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { getAllCategories } from '../../redux/categoriesRedux.js';
import { useSelector } from 'react-redux';

// CSS Modules, react-datepicker-cssmodules.css



const PostForm = ({action, actionText, ...props}) => {
    const categories = useSelector(getAllCategories);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '' );
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        setContentError(!content)
        setDateError(!publishedDate)
        if(content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content});
        }
    }

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" {...register("title", { required: true, minLength: 3 })} value={title} onChange={e => setTitle(e.target.value)} />
                {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3 signs)</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter author" {...register("author", { required: true, minLength: 3 })} value={author} onChange={e => setAuthor(e.target.value)} />
                {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3 signs)</small>}
            </Form.Group>
            <Form.Label>Published</Form.Label>
            <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
            {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            <p></p>
            <Form.Select aria-label="Default select example">
                <option>Select category...</option>
                {categories.map(category => <option value={category.idCat}>{category.titleCat}</option>  )}
            </Form.Select>
            <p></p>
            <Form.Group className="mb-3" controlId="formBasicComment">
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Leave a comment here" {...register("shortDescription", { required: true, minLength: 20 })} value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20 signs)</small>}
            </Form.Group>
            <ReactQuill theme="snow" value={content} onChange={setContent}/> 
            {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            <p/>
            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    )
}

export default PostForm;