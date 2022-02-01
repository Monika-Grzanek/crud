import { Button } from "react-bootstrap";
import Posts from "./../../features/Posts/Posts";
import {Link} from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <div className="posts-navi d-flex justify-content-between" >
                <h1>All Posts</h1>
                <Button as={Link} to="/post/add" size="sm" style={{height: '35px'}}  variant="outline-info">Add post</Button>
            </div>
            <Posts />
        </div>
    )
}

export default Home;