import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty, from } from 'rxjs';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppinglist;
  txtName;
  alertMessage;
  
  constructor() {}

  ngOnInit(): void{
    this.shoppinglist=[]
  }
  addContact() {
    if (this.txtName == " " || this.txtName == undefined) {
    this.alertMessage = "Please enter an Item";
        Swal.fire(this.alertMessage);
    } else {
     console.log(this.txtName);
    this.shoppinglist.push({name:this.txtName})
    }
    
  }
  deleteContact(name) {
    console.log(name)
    
    for (var i = 0; i < this.shoppinglist.length; i++){
      if (this.shoppinglist[i]["name"] == name) {
      this.shoppinglist.splice(i, 1);
      }
    }
  }
  updateItem(item){
    let index = this.shoppinglist.indexOf(item);
    item.name = this.txtName;
    this.shoppinglist[index] = item;
  
    console.log(this.shoppinglist);
  }
  
}
