import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PostForm = ({action, actionText, ...props}) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPublished">
                <Form.Label>Published</Form.Label>
                <Form.Control type="text" placeholder="Enter published" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicComment">
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Main content</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Leave a main text here" value={content} onChange={e => setContent(e.target.value)} />            
            </Form.Group>
            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    )
}

export default PostForm;