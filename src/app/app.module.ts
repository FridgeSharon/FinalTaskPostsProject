import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostListComponent } from "./components/posts/post-list/post-list.component";

import { PostAddComponent } from "./components/posts/post-add/post-add.component";
import { PostEditComponent } from "./components/posts/post-edit/post-edit.component";
import { PostDetailsComponent } from "./components/posts/post-details/post-details.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
