import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LanguageModule } from '@shared/language';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { TuiToggleModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

const tuiModules = [TuiButtonModule, TuiSvgModule, TuiToggleModule];

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, LanguageModule, ReactiveFormsModule, RouterModule, tuiModules],
  exports: [NavbarComponent]
})
export class NavbarModule {}
