import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { DarkModeState } from './store';

@NgModule({
  imports: [NgxsModule.forFeature([DarkModeState])]
})
export class DarkModeModule {}
