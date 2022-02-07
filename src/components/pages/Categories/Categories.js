import { ListGroup} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';


const Categories = () => {
    const {titleCat} = useParams;
    return (
        <div>
            <h1>All categories</h1>
        
            <ListGroup>
                <ListGroup.Item action as={Link} to={`/categories/${titleCat}`}>
                    News
                </ListGroup.Item>
                <ListGroup.Item action as={Link} to={`/categories/${titleCat}`} >
                    Sport   
                </ListGroup.Item>
                <ListGroup.Item action as={Link} to={`/categories/${titleCat}`} >
                    Movies
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Categories;