import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./components/posts/post-list/post-list.component";
import { PostAddComponent } from "./components/posts/post-add/post-add.component";
import { PostEditComponent } from "./components/posts/post-edit/post-edit.component";
import { PostDetailsComponent } from "./components/posts/post-details/post-details.component";

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "postAdd", component: PostAddComponent },
  { path: "postEdit/:id", component: PostEditComponent },
  { path: "postDetails/:id", component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
