import type { AbstractControl } from '@angular/forms';
import type { Component } from '@angular/core';

export interface ComponentWithForm extends Component {
  form: AbstractControl;
}
