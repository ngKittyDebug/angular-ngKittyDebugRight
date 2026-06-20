import { inject, Service } from '@angular/core';
import { ConfessFormService } from '../services/confess-form.service';

@Service({
  autoProvided: false,
})
export class ShriftPageFacade {
  public readonly confessForm = inject(ConfessFormService).confessForm;
  public onSubmit() {
    console.log('send sin');
  }
}
