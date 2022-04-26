import 'reflect-metadata';
import MemoryStorage from "../../../../src/infrastructure/database/memory-storage";
import PostRepository from "../../../../src/infrastructure/repositories/post-repository";
import PostRepositoryInterface from "../../../../src/domain/repositories/post-repostitory";
import Post from "../../../../src/domain/entities/post";

describe('In-memory storage', () => {
    let repository: PostRepositoryInterface<Post>;

    beforeEach(() => {
        repository = new PostRepository(new MemoryStorage());
    });

    it('Save new post', () => {
        const post = repository.save(new Post('Post title', 'Description'));

        expect(post.getId()).toBe(1);
        expect(post.getTitle()).toBe('Post title');
        expect(post.getDescription()).toBe('Description');
    });

    it('Get all posts', () => {
        const post = repository.save(new Post('Post title', 'Description'));

        const posts = repository.getPosts();

        expect(post.getId()).toBe(1);
        expect(post.getTitle()).toBe('Post title');
        expect(post.getDescription()).toBe('Description');

        expect(posts).toBeDefined();
        expect(posts.length).toBe(1);
    });
});