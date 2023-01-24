import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  @HostListener('window:message', ['$event']) onPostMessage(event: any) {
    console.log("Evento")
    console.log(event)
    if (event.data.data) {
      alert("Vamos")
      alert(JSON.stringify(event.data.data))
    } else {
      alert("No vamos")
    }
  }
}
