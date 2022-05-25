import { Container } from 'inversify';

import TYPES from './application/constants/types';
import PostServiceInterface from './domain/services/post-service.interface';
import PostRepositoryInterface from './domain/repositories/post-repostitory.interface';
import DatabaseStorage from './infrastructure/database/database-storage.interface';
import LoggerInterface from "./infrastructure/services/logger/logger.interface";
import Post from './domain/entities/post';

import PostRepository from './infrastructure/repositories/post-repository';
import PostService from './domain/services/post-service';
import MemoryStorage from './infrastructure/database/memory-storage';
import ConsoleLogger from "./infrastructure/services/logger/console-logger";

import './api/controllers/post.controller';

const container = new Container();

container.bind<DatabaseStorage>(TYPES.DatabaseStorage).to(MemoryStorage).inSingletonScope();
container.bind<PostRepositoryInterface<Post>>(TYPES.PostRepository).to(PostRepository);
container.bind<PostServiceInterface>(TYPES.PostService).to(PostService);
container.bind<LoggerInterface>(TYPES.Logger).to(ConsoleLogger);

export default container;