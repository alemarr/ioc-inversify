import http from 'http';

import express, { Request, Response, NextFunction } from 'express';

import container from './container/container';
import TYPES from './container/types';
import PostServiceInterface from './domain/services/post-service';
import Post from './domain/entities/post';

const app = express();
const server = http.createServer(app);

const service = container.get<PostServiceInterface>(TYPES.PostService);

app.get('/post', (_req: Request, res: Response, _next: NextFunction) => {
  const posts = service.getPosts();

  return res.json(posts.map((post: Post) => {
    return {
      id: post.getId(),
      title: post.getTitle(),
      description: post.getDescription()
    }
  }));
});

app.get('/post/add', (_req: Request, res: Response, _next: NextFunction) => {
  const title = Math.random().toString(36).substring(7);
  const description = 'Lorem ipsum'

  const post = service.create(title, description);

  return res.json({
    id: post.getId(),
    title: post.getTitle(),
    description: post.getDescription()
  })
});

server.listen(3010, () => {
  console.log('Demo running');
});