import { useParams } from 'react-router';
import { getPostById } from './../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button, Card } from "react-bootstrap";
import {NavLink} from 'react-router-dom';


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
                <Button as={NavLink} to={`/post/edit/${id}`} size="sm" variant="outline-info">Edit</Button>{' '}
                <Button as={NavLink} to="/post/add" size="sm" variant="outline-danger">Remove</Button>
            </div>
        </div>
    )
}

export default Post;