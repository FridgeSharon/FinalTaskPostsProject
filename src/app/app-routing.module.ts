import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./components/posts/post-list/post-list.component";
import { PostAddComponent } from "./components/posts/post-add/post-add.component";
import { PostEditComponent } from "./components/posts/post-edit/post-edit.component";
import { PostDetailsComponent } from "./components/posts/post-details/post-details.component";
import {PostResolver} from "./resolvers/post-resolver";

const routes: Routes = [
  { path: "", component: PostListComponent, resolve: { post: PostResolver } },
  { path: "postAdd", component: PostAddComponent, resolve: { post: PostResolver } },
  { path: "postEdit/:id", component: PostEditComponent, resolve: { post: PostResolver } },
  { path: "postDetails/:id", component: PostDetailsComponent, resolve: { post: PostResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
