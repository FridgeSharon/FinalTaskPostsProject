import { Component, OnInit } from "@angular/core";
import { PostsHandlerService } from "./services/posts-handler.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "FinalTaskPostsProject";

  constructor(private postsService: PostsHandlerService) {}

  ngOnInit(): void {
    this.postsService.getPosts();
  }
}
