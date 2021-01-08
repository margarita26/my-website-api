"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const post_dto_1 = require("./dto/post.dto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async getAllPost(res) {
        const posts = await this.postService.getAllPost();
        console.log(posts);
        return res.status(common_1.HttpStatus.OK).json(posts);
    }
    async addPost(res, createPostDTO) {
        const post = await this.postService.createPost(createPostDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Post has been created successfully',
            post,
        });
    }
    async getCustomer(res, postID) {
        const post = await this.postService.getPost(postID);
        if (!post)
            throw new common_1.NotFoundException('Post does not exist!');
        return res.status(common_1.HttpStatus.OK).json(post);
    }
    async updatePost(res, postID, createPostDTO) {
        const post = await this.postService.updatePost(postID, createPostDTO);
        if (!post)
            throw new common_1.NotFoundException('Post does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Post has been successfully updated',
            post,
        });
    }
    async deletePost(res, postID) {
        const post = await this.postService.deletePost(postID);
        if (!post)
            throw new common_1.NotFoundException('Post does not exist');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Post has been deleted',
            post,
        });
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getAllPost", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, post_dto_1.CreatePostDTO]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addPost", null);
__decorate([
    common_1.Get(':postID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('postID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getCustomer", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Query('postID')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, post_dto_1.CreatePostDTO]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Delete('/delete'),
    __param(0, common_1.Res()), __param(1, common_1.Query('postID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
PostController = __decorate([
    common_1.Controller('blog'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map