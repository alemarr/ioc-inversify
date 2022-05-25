import 'reflect-metadata';
import PostRepositoryInterface from '../../../../src/domain/repositories/post-repostitory.interface';
import Post from '../../../../src/domain/entities/post';
import LoggerInterface from '../../../../src/infrastructure/services/logger/logger.interface';
import PostRepository from '../../../../src/infrastructure/repositories/post-repository';
import PostServiceInterface from '../../../../src/domain/services/post-service.interface';
import PostService from '../../../../src/domain/services/post-service';
import MemoryStorage from '../../../../src/infrastructure/database/memory-storage';
import ConsoleLogger from '../../../../src/infrastructure/services/logger/console-logger';
import DatabaseStorage from '../../../../src/infrastructure/database/database-storage.interface';

jest.mock('../../../../src/infrastructure/repositories/post-repository');
jest.mock('../../../../src/infrastructure/services/logger/console-logger');
jest.mock('../../../../src/infrastructure/database/memory-storage');

describe('PostService', () => {
    let storage: DatabaseStorage;
    let repository: PostRepositoryInterface<Post>;
    let logger: LoggerInterface;
    let service: PostServiceInterface;
    const postMock = {
        getId: () => 1,
        getTitle: () => 'Testing post',
        getDescription: () => 'Post description'
    };

    beforeEach(() => {
        storage = new MemoryStorage();
        repository = new PostRepository(storage);
        logger = new ConsoleLogger();
        
        service = new PostService(
            repository,
            logger
        );
    });

    it('Create Post', () => {
        storage.insert = jest.fn().mockImplementation(() => postMock);
        repository.save = jest.fn().mockImplementation(() => new Post(
            postMock.getTitle(),
            postMock.getDescription(),
            1)
        );

        const post = service.create(postMock.getTitle(), postMock.getDescription());

        expect(post).toBeDefined();
    });

    it('Get Posts List', () => {
        storage.fetchAll = jest.fn().mockImplementation(() => [postMock]);
        repository.getPosts = jest.fn().mockImplementation(() => [
            new Post(postMock.getTitle(), postMock.getDescription(), 1)
        ]);

        const posts = service.getPosts();

        expect(posts).toBeDefined();
        expect(posts.length).toBe(1);
    });
});