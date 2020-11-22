import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  
  transform(value: any, desde?: Date, hasta?: Date, estado?: string, region?: string ): any {
    
    if(!desde || !hasta){      
      return value;
    }else{
      let startDate = new Date(desde);
      let endDate = new Date(hasta);      
      return value.filter(
        plan => new Date(plan["Fecha Inicio"]) >= startDate && new Date(plan["Fecha Fin"]) <= endDate
        )
      }
      
    }
    
  }
  