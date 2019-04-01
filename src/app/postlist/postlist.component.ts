import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveIts: number = 0;
  @Input() unloveIts: number = 0;
  @Input() postcreatedAt: Date;
  constructor() {

  }
  ngOnInit() {
  }
  getLike() {
    this.loveIts++;
  }
  getunLike() {
    this.unloveIts++;
  }
  clearloveIts() {
    this.loveIts = 0;
    this.unloveIts = 0;
  }
  getColor() {
    if (this.loveIts > this.unloveIts) {
      return 'green';
    } else if (this.loveIts < this.unloveIts) {
      return 'red';
    }
  }
}
