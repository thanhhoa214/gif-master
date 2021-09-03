import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './/listing.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiLazyLoadingModule } from '@taiga-ui/kit';
import { LanguageModule } from '@shared/language';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const tuiModules = [TuiInputModule, TuiTextfieldControllerModule, TuiLazyLoadingModule];

@NgModule({
  imports: [CommonModule, InfiniteScrollModule, ReactiveFormsModule, LanguageModule, tuiModules],
  declarations: [ListingComponent],
  exports: [ListingComponent]
})
export class UiListingModule {}
