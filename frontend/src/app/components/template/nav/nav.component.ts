import { MatSidenavModule } from '@angular/material/sidenav';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  showFiller = false;
  
}
