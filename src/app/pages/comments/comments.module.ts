import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { ListCommentComponent } from './list-comment/list-comment.component';


@NgModule({
  declarations: [
    CommentsComponent,
    NewCommentComponent,
    ListCommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
