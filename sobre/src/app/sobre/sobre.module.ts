import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SobreRoutingModule } from './sobre-routing.module';
import { MaterialModule } from '../shared/material.module';

import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';

import { SobreService } from './services/sobre.service';

// In-Memory-Web-Api
import { environment } from 'src/environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../mocked-api/in-memory-data.service';

@NgModule({
  declarations: [NavComponent, TableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    SobreRoutingModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 5000 })
  ],
  providers: [SobreService],
})
export class SobreModule { }
