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
  editedPost: Post = <Post>{};
  validPost: boolean;
  deleteButtonPressed: boolean;

  constructor(
    private postsService: PostsHandlerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.currentPost = this.postsService.getPost(params.get('id'));
      this.editedPost = { ...this.currentPost };
    });

    this.deleteButtonPressed = false;
  }

  async saveEditedPost(): Promise<void> {
    this.validPost = true;

    if (this.editedPost.title.length < 1) {
      this.validPost = false;
    }

    if (this.validPost) {
      this.postsService.replacePost(this.currentPost, this.editedPost);
      await this.router.navigateByUrl('');
    }
  }
  async deletePost(): Promise<void> {
    this.postsService.deletePost(this.currentPost);
    await this.router.navigateByUrl('');
  }
}
