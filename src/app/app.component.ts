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
    console.log("message")
    console.log(event)
    this.heroService.log("message - " + JSON.stringify(event, null, 4))
  }

  @HostListener('window:onmessage', ['$event']) onPostMessage1(event: any) {
    console.log("onMessage")
    console.log(event)
    this.heroService.log("onMessage - " + JSON.stringify(event, null, 4))
  }

  @HostListener('window:successCapture', ['$event']) successCapture(event: any) {
    console.log("successCapture")
    console.log(event)
    this.heroService.log("onMessage - " + JSON.stringify(event, null, 4))
  }

  
}
