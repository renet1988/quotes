import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { FirstService } from './service/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modulo3';
}
