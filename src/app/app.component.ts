import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  data: string = "Campo"
  @HostListener('window:message', ['$event']) onPostMessage(event: any) {
    console.log("Evento")
    console.log(event)
    if (event.data.data) {
      alert("Vamos")
      this.data = event.data.data
      alert(JSON.stringify(event.data.data))
    } else {
      alert("No vamos")
    }
  }
}
