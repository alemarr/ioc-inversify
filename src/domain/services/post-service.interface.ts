import Post from "../entities/post";

export default interface PostServiceInterface {
  getPosts(): Post[];
  create(title: string, description: string): Post;
}