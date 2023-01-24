import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  data: string = "Campo";
  estado: string = "Inicial";
  total: string = "";
  @HostListener('window:message', ['$event']) onPostMessage(event: any) {
    this.estado = "Reacciona"
    this.total = JSON.stringify(event)
    if (event.data.data) {
      this.estado = "Cachado"
      this.data = event.data.data
      alert(JSON.stringify(event.data.data))
    } else {
      this.estado = "Aun no cachado"
    }
  }
}
