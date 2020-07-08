import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { SobreService } from '../services/sobre.service';
import { ISobres } from 'src/app/interfaces/isobres';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  sobres: Observable<ISobres[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sobreSvc: SobreService
  ) {}

  ngOnInit() {
    this.loadSobres();
  }

  //#region Private Functions

  private loadSobres() {
    this.sobres = this.sobreSvc.getSobres();
  }

  //#endregion
}
