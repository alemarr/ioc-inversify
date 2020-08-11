import 'reflect-metadata';
import { Container } from 'inversify';

import TYPES from './types';
import PostServiceInterface from '../domain/services/post-service';
import PostRepositoryInterface from '../domain/repositories/post-repostitory';
import DatabaseStorage from '../domain/database/database-storage';
import Post from '../domain/entities/post';

import PostRepository from '../impl/repositories/post-repository';
import PostService from '../impl/services/post-service';
import MemoryStorage from '../impl/database/memory-storage';

const container = new Container();

container.bind<DatabaseStorage>(TYPES.DatabaseStorage).to(MemoryStorage);
container.bind<PostRepositoryInterface<Post>>(TYPES.PostRepository).to(PostRepository);
container.bind<PostServiceInterface>(TYPES.PostService).to(PostService);

export default container;