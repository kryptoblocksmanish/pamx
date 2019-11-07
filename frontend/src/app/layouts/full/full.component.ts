import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CustomLogger } from '../../modules/utils/CustomLogger';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  color = 'blue';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;
  showRtl = false;
  
  public innerWidth: any;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router) {}

  ngOnInit() {
    CustomLogger.logString("Inside FullComponent");
    if (this.router.url === '/') {
      this.router.navigate(['/mydashboard']);
    }
    this.handleLayout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleLayout();
  }

  toggleSidebar() {
    this.showMinisidebar = !this.showMinisidebar;
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.showMinisidebar = true;
    } else {
      this.showMinisidebar = false;
    }
  }
}

