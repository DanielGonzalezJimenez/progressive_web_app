import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService) { }

  @HostListener('window:message', ['$event']) windowMessage(event: any) {
    this.heroService.log("window:message - " + JSON.stringify(event, null, 4))
    this.heroService.log("data - " + JSON.stringify(event.data, null, 4))

    event.source.postMessage("hi there yourself!  the secret response " +
                           "is: rheeeeet!",
                           event.origin);
  }
  
}
