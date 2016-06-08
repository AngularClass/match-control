import { Directive, Host, Attribute, forwardRef }  from '@angular/core';
import { NgForm, ControlGroup, AbstractControl, NG_VALIDATORS, Validator } from '@angular/common';

@Directive({
  selector: '[ac-match-control]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AcMatchControlValidator),
      multi: true
    }
  ]})
export class AcMatchControlValidator implements Validator {
  constructor(
    @Host() public formDir: NgForm,
    @Attribute('match-control') public matchControl: string) {
  }
  validate(c: AbstractControl): {[key: string]: any} {
    var form: ControlGroup = this.formDir.form;
    var control = form.find(this.matchControl);
    if (control !== undefined && control !== null && control.touched) {
      if (control.value !== c.value) {
        return {'invalidMatch': true};
      }
    }
    return null;
  }
}



export const ANGULARCLASS_MATCH_CONTROL_DIRECTIVES = [
  AcMatchControlValidator
];
