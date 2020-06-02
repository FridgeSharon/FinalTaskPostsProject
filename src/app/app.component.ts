import { Component } from "@angular/core";
import { PostsHandlerService } from "./services/posts-handler.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "FinalTaskPostsProject";
  constructor(private postsService: PostsHandlerService) {}
}
