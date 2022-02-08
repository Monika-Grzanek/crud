import { Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { DateToStr } from '../../../utils/DateToString';


const CategoryHome = ({...props}) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card >
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <p>
                        <b>Author:</b> {props.author}
                    </p>
                    <p>
                        <b>Published:</b> {DateToStr(props.publishedDate)}
                    </p>
                    <p>
                        <b>Category: </b> {props.titleCategory}
                    </p>
                    <Card.Text>
                        {props.shortDescription}
                    </Card.Text>
                    <Button as={Link} to={`/post/${props.id}`} variant="primary">Read more</Button>
                </Card.Body>    
            </Card>
        </Col>
    )
}

export default CategoryHome;