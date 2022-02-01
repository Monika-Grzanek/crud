import { useParams } from 'react-router';
import { getPostById } from './../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button, Card} from "react-bootstrap";
import {Link} from 'react-router-dom';
import ModalPage from './../../features/ModalPage.js';

const Post = () => {
    const {id} = useParams();
    const postData = useSelector(state => getPostById(state, id));
    if(!postData) return <Navigate to="/" />
    return (
        <div className="posts-navi d-flex justify-content-around" >
            <Card style={{border: 'white'}} >
                <Card.Body>
                <Card.Title>{postData.title}</Card.Title>
                <Card.Text>
                    <p><b>Author: </b>{postData.author}</p>
                    <p><b>Published: </b>{postData.publishedDate}</p>
                    <p>{postData.content}</p>
                </Card.Text>
                </Card.Body>
            </Card>
            <div>
                <Button as={Link} to={`/post/edit/${id}`} size="sm" variant="outline-info" >Edit</Button>{' '}
                <ModalPage id={postData.id}/>
            </div>
        </div>
    )
}

export default Post;