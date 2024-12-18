import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './NiceAdminComponent/sidebar/sidebar.component';
import { HeaderComponent } from './NiceAdminComponent/header/header.component';
import { FooterComponent } from './NiceAdminComponent/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,RouterOutlet,FooterComponent],
  // imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AKSS_BootstrapNiceAdmin';
}
