import { inject, Service } from '@angular/core';
import { ConfessFormService } from '../services/confess-form.service';
import { ConfessService } from '@core/services/confess/confess.service';

@Service({
  autoProvided: false,
})
export class ShriftPageFacade {
  private readonly confessService = inject(ConfessService);
  public readonly confessForm = inject(ConfessFormService).confessForm;
  public readonly sins = this.confessService.sins;

  constructor() {
    void this.confessService.loadSins();
  }

  public async onSubmit() {
    if (this.confessForm.invalid) {
      return;
    }

    const { text, severity } = this.confessForm.getRawValue();

    await this.confessService.addSin(text, severity);

    this.confessForm.reset();
  }

  public onDelete(sinUid: string) {
    this.confessService.deleteSin(sinUid);
  }
}
