import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/post.dto';
export declare class PostService {
    private readonly postModel;
    constructor(postModel: Model<Post>);
    getAllPost(): Promise<Post[]>;
    createPost(CreatePostDTO: CreatePostDTO): Promise<Post>;
    getPost(postId: any): Promise<Post>;
    updatePost(postID: any, createPostDTO: CreatePostDTO): Promise<Post>;
    deletePost(postID: any): Promise<any>;
}
