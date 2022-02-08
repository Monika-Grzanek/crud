import { useParams } from 'react-router';

const Category = () => {
    const {titleCat} = useParams();
    return (
        <h1>Category: {titleCat}</h1>
    )
}

export default Category;