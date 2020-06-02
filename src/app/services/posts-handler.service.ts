import { Injectable, OnInit } from "@angular/core";
import { Post } from "../models/post.model";
import { HttpHandlerService } from "./http-handler.service";

@Injectable({
  providedIn: "root",
})
export class PostsHandlerService {
  private posts: Post[] = [];
  constructor(private httpHandlerService: HttpHandlerService) {}

  getPosts(): Post[] {
    if (this.posts.length === 0) {
      this.httpHandlerService.getPosts().then((data) => {
        Object.assign(this.posts, data);
      });
    }
    return this.posts;
  }

  addPost(post: Post): void {
    this.posts.push(post);
  }
}
