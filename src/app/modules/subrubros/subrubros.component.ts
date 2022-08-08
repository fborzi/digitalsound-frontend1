import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-subrubros',
  templateUrl: './subrubros.component.html',
  styleUrls: ['./subrubros.component.css']
})
export class SubrubrosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.productos = this.productoService.getProductos();

  }

}
