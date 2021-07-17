import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakPointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((state: BreakpointState) => {
        console.log(state);
        if (state.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
  }
}
