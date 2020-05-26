import { Component, OnInit } from "@angular/core";
import { PostsHandlerService } from "src/app/services/posts-handler.service";
import { Post } from "src/app/models/post.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-add",
  templateUrl: "./post-add.component.html",
  styleUrls: ["./post-add.component.scss"],
})
export class PostAddComponent implements OnInit {
  newPost: Post = new Post();
  addButtonClicked: boolean = false;

  constructor(
    private postsService: PostsHandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let posts = this.postsService.getPosts();
    this.newPost.id = posts[posts.length - 1].id + 1;
    this.newPost.userId = 11;
    this.newPost.body = "";
    this.newPost.title = "";
  }

  saveNewPost(): void {
    if (this.newPost.title.length != 0) {
      if (this.newPost.body.length == 0) {
        this.newPost.title += " (empty content)";
      }
      this.postsService.addPost(this.newPost);
      this.router.navigateByUrl("");
    }
    this.addButtonClicked = true;
  }
}
