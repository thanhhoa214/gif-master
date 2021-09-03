import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LanguageModule } from '@shared/language';
import { TuiButtonModule, TuiHintModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

const tuiModules = [TuiButtonModule, TuiSvgModule, TuiHintModule];

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, LanguageModule, RouterModule, tuiModules],
  exports: [NavbarComponent]
})
export class NavbarModule {}
