import { Component, Inject, Optional } from '@angular/core';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  // template: `<h1>Inline Heading</h1>
  // <p>Angular is good</p>

  // `,
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  hotelName = "SunTek";
  title = 'Hotel Inventory';
  role = "Admin";
  constructor(@Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage) {

  }

  ngOnInit() {
    this.loggerService?.log("AppComponent.ngOnInit()");
    this.localStorage.setItem("Name", "SunTek Hotel");
  }
}
