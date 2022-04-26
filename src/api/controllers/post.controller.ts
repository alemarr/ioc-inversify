import { Request, Response } from 'express';
import { controller, httpGet, httpPost, interfaces, request, requestBody, response } from "inversify-express-utils";
import { inject } from 'inversify';

import PostServiceInterface from '../../domain/services/post-service.interface';
import Post from "../../domain/entities/post";
import TYPES from "../../application/constants/types";
import { CreatePostRequest } from "../../application/requests/create-post.request";

@controller('/posts')
export class PostController implements interfaces.Controller {

    constructor(@inject(TYPES.PostService) private readonly postService: PostServiceInterface) {}

    @httpPost('/')
    private async create(@requestBody() body: CreatePostRequest, @response() res: Response): Promise<Response> {
        const post = this.postService.create(body.title, body.description);

        return res.json({
            id: post.getId(),
            title: post.getTitle(),
            description: post.getDescription()
        });
    }

    @httpGet('/')
    private list(@request() req: Request, @response() res: Response): Response {
        const posts = this.postService.getPosts();

        return res.json(posts.map((post: Post) => {
            return {
              id: post.getId(),
              title: post.getTitle(),
              description: post.getDescription()
            }
        }));
    }
}