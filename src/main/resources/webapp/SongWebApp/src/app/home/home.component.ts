import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search song...">
      </form>
    </section>
      `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}