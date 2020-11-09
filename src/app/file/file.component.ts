import { Component } from '@angular/core';

@Component({
  selector: 'app-file',
  template: `
    <div>
      <p>{{file.name}}</p>
    </div>
  `,
  styleUrls: ['./file.component.css']
})
export class FileComponent {
   file = {
     name: 'logo.svg',
     size: 2120109,
     type: 'image/svg'
   };
}
