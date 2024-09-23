import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomsComponent],
  templateUrl: "./app.component.html",
  // template: `<h1>Inline Templye</h1>
  //   <p>Gafad</p> `,
  styleUrl: "./app.component.css",
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = "inventoryapp";

  role = "Admin";
}
