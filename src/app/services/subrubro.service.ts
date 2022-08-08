import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubrubroService {
  getProductos(): import("../models/producto").Producto[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
