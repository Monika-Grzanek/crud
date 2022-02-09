import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import {getPostByCategory} from './../../../redux/postsRedux';
import { getCategoryById } from './../../../redux/categoriesRedux';
import CategoryHome from '../../views/CategoryHome/CategoryHome';
import { Container, Row } from 'react-bootstrap';

const Category = () => {
    const {titleCat} = useParams();
    
    const postCat = useSelector(state => getPostByCategory(state, titleCat));
    const categoryData = useSelector(state => getCategoryById(state, titleCat));
    console.log(postCat);
    if(postCat === null) return <h6>This category is empty</h6>;
    return (
        <>
            <h1>Category: {categoryData.title}</h1>
            <Container>
                <Row >
                    {postCat.map(post => <CategoryHome key={post.id} {...post} titleCategory={categoryData.title} /> )}
                </Row> 
            </Container>
        </>
    )
}

export default Category;