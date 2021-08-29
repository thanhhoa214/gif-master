import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiListingModule } from '@gif-master/gif-views/ui';
import { ListingComponent } from './listing.component';
import { DataAccessModule } from '@gif-master/gif-views/data-access';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    DataAccessModule,
    UiListingModule,
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ListingComponent }])
  ],
  declarations: [ListingComponent]
})
export class FeatureListingModule {}
