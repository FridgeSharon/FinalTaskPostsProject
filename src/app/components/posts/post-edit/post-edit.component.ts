import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/post.model";
import { PostsHandlerService } from "src/app/services/posts-handler.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.scss"],
})
export class PostEditComponent implements OnInit {
  currentPost: Post;
  id: any;
  sub: any;
  editedPost: Post;
  validPost: boolean;
  deleteButtonPressed: boolean;

  constructor(
    private postsService: PostsHandlerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      let posts = this.postsService.getPosts();
      this.currentPost = posts.find((p) => p.id == this.id);
    });

    this.editedPost = Object.assign({}, this.currentPost);
    this.deleteButtonPressed = false;
  }

  saveEditedPost(): void {
    this.validPost = true;
    let posts = this.postsService.getPosts();

    if (this.editedPost.title.length < 1) {
      this.validPost = false;
    }

    if (this.validPost) {
      posts.splice(posts.indexOf(this.currentPost), 1, this.editedPost);

      this.router.navigateByUrl("");
    }
  }
  deletePost(): void {
    let posts = this.postsService.getPosts();
    posts.splice(posts.indexOf(this.currentPost), 1);
    this.router.navigateByUrl("");
  }
}
