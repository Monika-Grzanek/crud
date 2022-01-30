import { Button } from "react-bootstrap";
import Posts from "./../../features/Posts/Posts";

const Home = () => {
    
    return (
        <div>
            <div className="posts-navi d-flex justify-content-between" >
                <h1>All Posts</h1>
                <Button href="/post/add" variant="outline-info">Add post</Button>
            </div>
            <Posts />
        </div>
    )
}

export default Home;