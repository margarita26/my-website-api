import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dto/post.dto';

@Controller('blog')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPost(@Res() res) {
    const posts = await this.postService.getAllPost();
    console.log(posts);
    return res.status(HttpStatus.OK).json(posts);
  }

  @Post('/create')
  async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
    const post = await this.postService.createPost(createPostDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been created successfully',
      post,
    });
  }

  @Get(':postID')
  async getCustomer(@Res() res, @Param('postID') postID) {
    const post = await this.postService.getPost(postID);
    if (!post) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json(post);
  }

  @Put('/update')
  async updatePost(@Res() res, @Query('postID') postID, @Body() createPostDTO: CreatePostDTO) {
    const post = await this.postService.updatePost(postID, createPostDTO);
    if (!post) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      post,
    });
  }

  @Delete('/delete')
  async deletePost(@Res() res, @Query('postID') postID) {
    const post = await this.postService.deletePost(postID);
    if (!post) throw new NotFoundException('Post does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted',
      post,
    });
  }
}
