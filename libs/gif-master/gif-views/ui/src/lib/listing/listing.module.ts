import { loader } from './i18n/transloco.loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './/listing.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiLazyLoadingModule } from '@taiga-ui/kit';
import { LanguageModule } from '@shared/language';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

const tuiModules = [TuiInputModule, TuiTextfieldControllerModule, TuiLazyLoadingModule];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LanguageModule, tuiModules],
  declarations: [ListingComponent],
  exports: [ListingComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'listing',
        loader
      }
    }
  ]
})
export class UiListingModule {}
