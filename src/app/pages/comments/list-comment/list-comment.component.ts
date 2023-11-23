import { Component } from '@angular/core';
import { CommentsService } from '@comments/comments.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent {
  constructor(private comment: CommentsService){
  }
  
}
