import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/post.dto';
import { PostModule } from './post.module';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async getAllPost(): Promise<Post[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }

  async createPost(CreatePostDTO: CreatePostDTO): Promise<Post> {
    const newPost = await new this.postModel(CreatePostDTO);
    return newPost.save();
  }

  async getPost(postId): Promise<Post> {
    const post = await this.postModel.findById(postId).exec();
    return post;
  }
  async updatePost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    const updatedPost = await this.postModel.findByIdAndUpdate(postID, createPostDTO, {
      new: true,
    });
    return updatedPost;
  }

  async deletePost(postID): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndRemove(postID);
    return deletedPost;
  }
}
