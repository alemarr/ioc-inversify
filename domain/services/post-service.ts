import Post from "../entities/post";

interface PostServiceInterface {
  getPosts(): Post[];
  create(title: string, description: string): Post;
}

export default PostServiceInterface;