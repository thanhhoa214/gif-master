import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './/listing.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiLazyLoadingModule } from '@taiga-ui/kit';

const tuiModules = [TuiInputModule, TuiTextfieldControllerModule, TuiLazyLoadingModule];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, tuiModules],
  declarations: [ListingComponent],
  exports: [ListingComponent]
})
export class UiListingModule {}
