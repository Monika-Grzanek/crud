import { getAllCategories } from '../../redux/categoriesRedux.js';
import { useSelector } from 'react-redux';
import PostHome from './../../views/PostHome/PostHome.js';
import { Row, Container } from 'react-bootstrap';

const CategoryPost = () => {
    const categories = useSelector(getAllCategories);
    return (
        <Container>
            <Row >
                {categories.map(category => <PostHome key={category.id} {...category} /> )}
            </Row> 
        </Container>
    )
}

export default CategoryPost;
