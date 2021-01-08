import { PostService } from './post.service';
import { CreatePostDTO } from './dto/post.dto';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getAllPost(res: any): Promise<any>;
    addPost(res: any, createPostDTO: CreatePostDTO): Promise<any>;
    getCustomer(res: any, postID: any): Promise<any>;
    updatePost(res: any, postID: any, createPostDTO: CreatePostDTO): Promise<any>;
    deletePost(res: any, postID: any): Promise<any>;
}
