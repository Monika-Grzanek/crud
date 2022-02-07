import { Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { DateToStr } from '../../../utils/DateToString';

const PostHome = ({...post}, {...category}) => {
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
                        <b>Published:</b> {DateToStr(post.publishedDate)}
                    </p>
                    <p>
                        <b>Category: </b> {category.title}
                    </p>
                    <Card.Text>
                        {post.shortDescription}
                    </Card.Text>
                    <Button as={Link} to={`/post/${post.id}`} variant="primary">Read more</Button>
                </Card.Body>    
            </Card>
        </Col>
    )
}

export default PostHome;