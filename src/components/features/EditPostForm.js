import PostForm from "./PostForm";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { editPost, getPostById } from '../../redux/postsRedux';
import { useParams } from 'react-router';

const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const post = useSelector(state => getPostById(state, id));
    if(!id) return <Navigate to="/" />;

    const handleSubmit = post => {
        dispatch(editPost({...post, id}));
        navigate('/');
    }

    return (
        <div>
            <PostForm action={handleSubmit} actionText='Edit post' title={post.title} author={post.author} publishedDate={post.publishedDate} shortDescription={post.shortDescription} content={post.content} />
        </div>
    )
}

export default EditPostForm;