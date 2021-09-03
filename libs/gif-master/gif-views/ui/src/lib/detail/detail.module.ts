import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { TuiLoaderModule, TuiButtonModule, TuiHintModule } from '@taiga-ui/core';
import { LanguageModule } from '@shared/language';

const tuiModules = [TuiLoaderModule, TuiHintModule, TuiButtonModule];
@NgModule({
  imports: [CommonModule, LanguageModule, tuiModules],
  declarations: [DetailComponent],
  exports: [DetailComponent]
})
export class UiDetailModule {}
