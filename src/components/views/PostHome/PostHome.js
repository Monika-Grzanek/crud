import { Card, Button } from 'react-bootstrap';

const PostHome = ({...post}) => {
    return (
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
                <Button href={`/post/${post.id}`} variant="primary">Read more</Button>
            </Card.Body>    
        </Card>
    )
}

export default PostHome;