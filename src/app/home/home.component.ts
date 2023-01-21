import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpService) { }

  ngOnInit(): void {

    this.readProducts();
  }


  productList:Product[] = [];

  filterProductList:Product[] = [];
  
  searchText:any;
  searchText2:any;


  images = [
    {
      path:'assets/image/offer1.jpg'
    },
    {
      path:'assets/image/offer2.jpg'
    },
    {
      path:'assets/image/offer3.jpg'
    }
  ]

  readProducts(){
      this.http.getMethod().subscribe((res:any) => {
        console.log(res);

        this.productList = res;
        console.log("product-list",this.productList);
        this.filterProducts('all');
      })
  }

  filterProducts(category:string){

    if(category != 'all'){
      this.filterProductList = this.productList.filter( el => el.category == category ) 
      console.log(this.filterProductList)
    }else
    {
      this.filterProductList = this.productList;
    }

  }


}
