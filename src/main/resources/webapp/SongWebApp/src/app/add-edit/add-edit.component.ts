import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [],
  template: `
  <div>
    <button type="submit" class="primary"> Click here to Add Song</button>
  </div>
  `,
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent {
  
}
