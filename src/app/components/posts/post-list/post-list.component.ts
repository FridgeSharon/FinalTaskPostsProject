import { Component, OnInit } from "@angular/core";
import { PostsHandlerService } from "src/app/services/posts-handler.service";
import { Post } from "src/app/models/post.model";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postsService: PostsHandlerService) {}
  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }
}
