import { Injectable, OnInit } from "@angular/core";
import { Post } from "../models/post.model";
import { HttpHandlerService } from "./http-handler.service";

@Injectable({
  providedIn: "root",
})
export class PostsHandlerService {
  private posts: Post[];
  constructor(private httpHandlerService: HttpHandlerService) {}

  async loadPosts(): Promise<void> {
    if (!this.posts || !this.posts.length) {
      this.posts = await this.httpHandlerService.getPosts();
    }
  }

  getPosts(): Post[] {
    if(!this.posts){
      this.posts = <Post[]>[];
    }

    return this.posts;
  }

  getPost(id): Post{
    return this.posts && this.posts.find(item => item.id == id);
  }

  getLast(): Post{
    if(!this.posts) return;
    return this.posts[this.posts.length - 1];
  }

  private getPostIndex(post: Post): number{
    if(!this.posts) return;
    return this.posts.findIndex(item => item.id === post.id);
  }

  addPost(post: Post): void {
    this.posts.push(post);
  }

  deletePost(post: Post): void{
    if(!this.posts) return;
    this.posts.splice(this.getPostIndex(post), 1);
  }

  replacePost(oldPost: Post, newPost: Post): void{
    if(!this.posts) return;
    this.posts.splice(this.getPostIndex(oldPost), 1, newPost);
  }
}
