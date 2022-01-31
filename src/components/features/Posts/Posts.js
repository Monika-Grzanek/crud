import {getAllPosts} from './../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import PostHome from './../../views/PostHome/PostHome.js';
import { Row, Container } from 'react-bootstrap';

const Posts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <Container>
            <Row >
                {posts.map(post => <PostHome key={post.id} {...post} /> )}
            </Row> 
        </Container>
    )
}

export default Posts;
