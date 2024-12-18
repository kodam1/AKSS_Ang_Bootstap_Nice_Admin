import { Component, DoCheck } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck  {

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
