import { ListGroup} from "react-bootstrap";
import {Link} from 'react-router-dom';


const CategoriesHome = ({...category}) => {
    return (
        <ListGroup.Item action as={Link} to={`/categories/${category.id}`}>
            {category.title}
        </ListGroup.Item>
    )
}

export default CategoriesHome;