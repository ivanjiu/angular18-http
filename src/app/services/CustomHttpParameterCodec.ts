import { HttpParameterCodec } from '@angular/common/http';

export class CustomHttpParameterCodec implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key.toLowerCase()).replace(/%20/g, '+');
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value).replace(/%20/g, '+');
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key).replace('+', '%20');
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value.replace('_', ' '));
  }
}
