import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from '../navbar/navbar.module';
import { LanguageModule } from '@shared/language';

import { TuiScrollbarModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

const tuiModules = [TuiScrollbarModule];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NavbarModule, LanguageModule, RouterModule, tuiModules],
  exports: [LayoutComponent]
})
export class LayoutModule {}
