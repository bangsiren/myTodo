import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  items = [];
  arr =[];
  arrr =[];
  ar=[];
  newItems = '';
  itemss='';
  itemsss =''
  item =''
 pushItems =function(){
   if(this.newItems != '' && this.itemss !='' && this.itemsss !=''  && this.item !=''){
     this.items.push(this.newItems);
     this.arr.push(this.itemss);
     this.arrr.push(this.itemsss);
     this.ar.push(this.item);
     this.newItems ='';
     this.itemss =''
     this.itemsss =''
     this.item =''
   }
  //  if(this.newAtivity != ''){
  //   this.items.push(this.newAtivity);
  //   this.newAtivity ='';
  // }
 }
 removeItems = function(index){
   this.items.splice(index,1)
 }
 removeA = function(index){
  this.arr.splice(index,1)
}
removeS = function(index){
  this.arrr.splice(index,1)
}
removeD = function(index){
  this.ar.splice(index,1)
}

}