import { Component, OnInit, Input } from "@angular/core";
import { PostsHandlerService } from "src/app/services/posts-handler.service";
import { Post } from "src/app/models/post.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
export class PostDetailsComponent implements OnInit {
  currentPost: Post;
  id: any;
  sub: any;

  constructor(
    private postsService: PostsHandlerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.currentPost = this.postsService.getPost(params.get("id"));
    });
  }
}
