import { ListGroup} from "react-bootstrap";
import { useSelector } from 'react-redux';
import {getAllCategories} from './../../../redux/categoriesRedux'
import CategoriesHome from "../../views/CategoriesHome/CategoriesHome";

const Categories = () => {
    const categories = useSelector(getAllCategories);
    return (
        <div>
            <h1>All categories</h1>
        
            <ListGroup>
                {categories.map(category => <CategoriesHome key={category.idCat} {...category} /> )}
            </ListGroup>
        </div>
    )
}

export default Categories;