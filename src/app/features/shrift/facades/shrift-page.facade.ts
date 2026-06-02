import { inject, Injectable } from '@angular/core';
import { ConfessFormService } from '../services/confess-form.service';

@Injectable()
export class ShriftPageFacade {
  public readonly confessForm = inject(ConfessFormService).confessForm;
  public onSubmit() {
    console.log('send sin');
  }
}
