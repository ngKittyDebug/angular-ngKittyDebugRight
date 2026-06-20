import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { StatisticsComponent } from '@features/altar/ui/statistics/statistics.component';
import { PrayerComponent } from '@features/altar/ui/prayer/prayer.component';
import { InstructionsComponent } from '@features/altar/ui/instractions/instructions.component';

@Component({
  selector: 'ngKitty-altar',
  imports: [StatisticsComponent, PrayerComponent, InstructionsComponent, TranslocoPipe],
  templateUrl: './altar.component.html',
  styleUrl: './altar.component.scss',
})
export class AltarComponent {}
