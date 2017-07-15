import { Component } from '@angular/core';
import { DataRequestService } from "./data-request.service";
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
    <div class="col-md-6 col-md-offset-8">
      <h1>Data Driven Form</h1>
      <app-data-driven></app-data-driven>
      <hr>
    </div>
  </div>
</div>`,
  styleUrls: ['./app.component.css'],
providers:[DataRequestService]
})
export class AppComponent {
  title = 'app';
}
