import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './/listing.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListingComponent],
  exports: [ListingComponent]
})
export class UiListingModule {}
