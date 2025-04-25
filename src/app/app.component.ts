import { HeaderComponent } from './header/header.component';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miProyecto';

  open = false;

  toggleDropdown(){
    this.open = !this.open
    console.log(this.open)
  }

  closeDropdown(){
    setTimeout(() =>{
      this.open = false;
    },1000);
  }
}
