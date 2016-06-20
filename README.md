# AngularClass Match Control
> Angular 2 Match Control: match two controls. Useful for changing passwords where you need to have two passwords matched

1.x.x uses the old form api   
2.x.x uses the new forms api

# Install
```bash
npm install @angularclass/match-control --save
```

* Attributes
  * `ac-match-control`: The control name to match

# API
```typescript
@Component({
  selector: 'account',
  directives: [
    ...ANGULARCLASS_MATCH_CONTROL_DIRECTIVES // [ AcMatchControlValidator ]
  ]
})
export class Account {}
```
```html
<input ngControl="newPasswordAgain" ac-match-control="newPassword"> <!-- invalidMatch -->
```


# example
> combined with `@angularclass/form-errors`

```typescript
import { Component }  from '@angular/core';
import { FORM_PROVIDERS, FORM_DIRECTIVES } from '@angular/common';


import {ANGULARCLASS_FORM_ERRORS_DIRECTIVES} from '@angularclass/form-errors';
import {ANGULARCLASS_MATCH_CONTROL_DIRECTIVES} from '@angularclass/match-control';



@Component({
  selector: 'account-edit',
  providers: [
    ...FORM_PROVIDERS
  ],
  directives: [
    ...FORM_DIRECTIVES,
    ...ANGULARCLASS_FORM_ERRORS_DIRECTIVES,
    ...ANGULARCLASS_MATCH_CONTROL_DIRECTIVES
  ],
  template: `
  <div>
    <p>
      Account:
    </p>

    <form
      #accountForm="ngForm"
      (ngSubmit)="onUpdateProfile(accountForm.value, accountForm.valid)"
    >

      <div>
        <label>
           password:
          <input ngControl="newPassword" required>
        </label>
        <ac-form-errors control="newPassword" [errors]="{'required': 'password is required'}"></ac-form-errors>

      <label>
        Username:
        <input ngControl="newPasswordAgain" ac-match-control="newPassword">
      </label>

      <ac-form-errors control="newPasswordAgain" [errors]="{
        'required': 'password is required',
        'invalidMatch': 'your passwords must match'
      }"></ac-form-errors>

      </div>


      <button>Submit</button>

    </form>

  </div>
  `
})
export class AccountEditComponent {
  accountForm = {
    username: ''
  };

  onUpdateProfile(json, isValid) {

  }

}
```

### todo
- [ ] todo


___

enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? patrick@angularclass.com
