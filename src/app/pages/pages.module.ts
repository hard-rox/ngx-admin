import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HeaderComponent, FooterComponent, SearchInputComponent } from '../components';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  NotFoundComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PagesComponent,
    ...COMPONENTS,
    SmartTableComponent, // Sample...
  ],
})
export class PagesModule {
}
