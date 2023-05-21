import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../models/prodotti.models';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  data: Product[] = [];
  query! :string;
  obsProduct!:  Observable <Object>
  results!: any
  
  constructor(private api:ApiService, public http: HttpClient) {}


  submit(query:HTMLInputElement):void
  {
    if (!query.value) { 
      return;
    }

    this.query = query.value;
    this.obsProduct = this.api.searchProducts(this.query);

    this.obsProduct.subscribe((data) =>{
      this.results = data;
      console.log(this.results);

    })

  }

  

}
