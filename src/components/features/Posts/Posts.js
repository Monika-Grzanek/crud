import {getAllPosts} from './../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import PostHome from './../../views/PostHome/PostHome.js';
import { CardGroup } from 'react-bootstrap';

const Posts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <CardGroup >
            {posts.map(post => <PostHome key={post.id} {...post} /> )}
        </CardGroup> 
    )
}

export default Posts;
