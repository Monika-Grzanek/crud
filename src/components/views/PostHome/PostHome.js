import { Card, Button, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const PostHome = ({...post}) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card >
                <Card.Body>
                    <Card.Title>
                        {post.title}
                    </Card.Title>
                    <p>
                        <b>Author:</b> {post.author}
                    </p>
                    <p>
                        <b>Published:</b> {post.publishedDate}
                    </p>
                    <Card.Text>
                        {post.shortDescription}
                    </Card.Text>
                    <Button as={NavLink} to={`/post/${post.id}`} variant="primary">Read more</Button>
                </Card.Body>    
            </Card>
        </Col>
    )
}

export default PostHome;