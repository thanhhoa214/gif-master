import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { TuiLoaderModule, TuiSvgModule, TuiButtonModule } from '@taiga-ui/core';
import { LanguageModule } from '@shared/language';

const tuiModules = [TuiLoaderModule, TuiSvgModule, TuiButtonModule];
@NgModule({
  imports: [CommonModule, LanguageModule, tuiModules],
  declarations: [DetailComponent],
  exports: [DetailComponent]
})
export class UiDetailModule {}
