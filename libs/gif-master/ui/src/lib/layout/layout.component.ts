import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AutoTitleService } from '@shared/util';

@Component({
  selector: 'gif-master-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  constructor(private autoTitle: AutoTitleService) {}
  ngOnInit(): void {
    this.autoTitle.setupAutoTitleListener({ postfix: ' | AVC' });
  }
}
