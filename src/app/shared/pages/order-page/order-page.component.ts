import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerData} from "../../../core/interfaces";
import {MarketService} from "../../../core/services/market.service";

interface OrderForm {
  fullName: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
}

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {
  public readonly PHONE_NUMBER_MIN_LENGTH: number = 4
  public readonly PHONE_NUMBER_MAX_LENGTH: number = 18

  public orderForm!: FormGroup<OrderForm>;

  constructor(private marketService: MarketService) {
    this.orderForm = new FormGroup<OrderForm>({
      fullName: new FormControl<string>('', [
        Validators.required,
      ]),
      phoneNumber: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(this.PHONE_NUMBER_MIN_LENGTH),
        Validators.maxLength(this.PHONE_NUMBER_MAX_LENGTH)
      ]),
    })
  }

  public onSubmit() {
    const formValues: Partial<CustomerData> = this.orderForm.value
    this.marketService.buyProducts({
      fullName: formValues.fullName!,
      phoneNumber: formValues.phoneNumber!
    })
  }
}
