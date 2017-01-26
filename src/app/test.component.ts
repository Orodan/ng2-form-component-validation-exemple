import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

export function validateCounterRange(c: FormControl) {
  let err = {
    rangeError: {
      given: c.value,
      max: 10,
      min: 0
    }
  };

  return (c.value > 10 || c.value < 0) ? err : null;
}

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestComponent),
      multi: true
    },
    { 
      provide: NG_VALIDATORS,
      useValue: validateCounterRange,
      multi: true
    }
  ]
})
export class TestComponent implements ControlValueAccessor {

  private _age: String;

  get age () {
    return this._age;
  }

  set age (value) {
    this._age = value;
    this.propagateChange(value);
  }

  propagateChange = (_: any) => {};

  writeValue (value: any) {
    if (value) this.age = value;
  }

  registerOnChange (fn) {
    this.propagateChange = fn;
  }

  registerOnTouched (fn) {}

}
