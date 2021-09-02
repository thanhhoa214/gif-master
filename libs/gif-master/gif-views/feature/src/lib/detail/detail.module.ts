import { TuiSvgModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiDetailModule } from '@gif-master/gif-views/ui';
import { DetailComponent } from './detail.component';
import { DataAccessModule } from '@gif-master/gif-views/data-access';
import { CommonModule } from '@angular/common';
import { LanguageModule } from '@shared/language';

const tuiModules = [TuiSvgModule];

@NgModule({
  imports: [
    CommonModule,
    LanguageModule,
    DataAccessModule,
    UiDetailModule,
    tuiModules,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: DetailComponent }])
  ],
  declarations: [DetailComponent]
})
export class FeatureDetailModule {}
