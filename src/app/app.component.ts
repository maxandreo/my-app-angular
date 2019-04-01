import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-like';
  postcreatedAt: Date = new Date();
  posts = [
    {
      title: `Hello, I'm Max Andreo`,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ' +
        'dolore dolorem, eligendi error eum ex expedita, libero magni molestias necessitatibus' +
        ' numquam, officiis perferendis quidem repudiandae sequi similique sit soluta voluptate.',
      createdAt: this.postcreatedAt,
    },
    {
      title: `I'm learning Angular`,
      content:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ' +
        'dolore dolorem, eligendi error eum ex expedita, libero magni molestias necessitatibus' +
        ' numquam, officiis perferendis quidem repudiandae sequi similique sit soluta voluptate.',
      createdAt: this.postcreatedAt,
    },
    {
      title: 'No more var',
      content:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ' +
        'dolore dolorem, eligendi error eum ex expedita, libero magni molestias necessitatibus' +
        ' numquam, officiis perferendis quidem repudiandae sequi similique sit soluta voluptate.',
      createdAt: this.postcreatedAt,
    },
  ];
}
