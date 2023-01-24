import { Component, HostListener } from '@angular/core';
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

  @HostListener('window:message', ['$event']) onPostMessage(event: any) {
    this.heroService.log(JSON.stringify(event))
  }

  
}
