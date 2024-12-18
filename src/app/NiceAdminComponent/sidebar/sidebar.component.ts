import { NgIf } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
// import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  // imports: [RouterLink,RouterOutlet,MainComponent],
  imports: [RouterLink,RouterModule,NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  implements DoCheck  {

  showFiller = false;

  showmenu=false;

  ifshowmenu() {
    if (this.showmenu  === false)
    {
       // Document.querySelector("#matDrawSideNav");
    }

  }


  badgevisible=false;

  badgevisibility(){
    this.badgevisible=true;
  }

  constructor( private router:Router){

  }
  ngDoCheck(): void {
   let currenturl = this.router.url;
    // console.log(currenturl);
   if(currenturl == '/login' || currenturl == '/register' || currenturl == '/pagesError404'){
     this.showmenu = false;
   }else{
     this.showmenu = true;
   }
  }
}
