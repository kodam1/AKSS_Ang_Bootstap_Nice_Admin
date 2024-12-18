import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';
// import { SidebarComponent } from '../sidebar/sidebar.component';
// import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  // imports: [MainComponent,HeaderComponent,FooterComponent,SidebarComponent,RouterOutlet,RouterModule],
  imports: [MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
