import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../models/UserModel";
import {UserService} from "../../services/user.service";
import {PostModel} from "../../models/PostModel";
import {PostService} from "../../services/post/post.service";
import {CommentService} from "../../services/comment/comment.service";
import {CommentModel} from "../../models/CommentModel";


class postService {
}

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',


  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  msg: 'users';
  users: UserModel[];
  posts: PostModel[];
  comments: CommentModel[];

  constructor(private userService: UserService,
              private postService: PostService,
              private commentService: CommentService) {

    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.commentService.getComments().subscribe(value => this.comments = value);
  }
}
