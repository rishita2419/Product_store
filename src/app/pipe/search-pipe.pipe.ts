import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from '../models/product';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  // transform(value: any, filterString:string){
  //   if(value.length === 0 || filterString === ''){
  //     return value;
  //   }

  //   let users = [];
  //     for(let item of value) {  
  //       if(item['category'].includes(filterString) ){
  //         users.push(item);
  //       }
  //     }
  //   return users;
  // }

  transform(products:Product[], searchValue : string) :Product[]  {

    if(!products || !searchValue ){
      return products;
    }
    return products.filter(p => 
        p.category.toLowerCase().includes(searchValue.toLowerCase()))
  }

}
