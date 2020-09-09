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
  downloadurl;
  constructor() {}

  ngOnInit(): void{
    this.shoppinglist = []
    console.log(this.shoppinglist)
     
  }
  
  insertpic(event: any) {
    
          let reader = new FileReader();
          reader.onload = (event: any) => {
            this.downloadurl = event.target.result;
          }
      reader.readAsDataURL(event.target.files[0]);
    }
    
  addContact() {
    if (this.txtName == " " || this.txtName == undefined || this.downloadurl == null || this.downloadurl == "") {
      this.alertMessage = "Please Fill In All the Inputs and Continue";
      Swal.fire(this.alertMessage); 
    } 
    else {
      console.log(this.txtName);
      console.log(this.downloadurl);
      this.shoppinglist.push({ name: this.txtName, downloadurl: this.downloadurl });
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
  updateItem(item) {
    let index = this.shoppinglist.indexOf(item);
    item.name = this.txtName;
    item.downloadurl = this.downloadurl
    this.shoppinglist[index] = item;
    console.log(this.shoppinglist); 
    
    
 
    
  }
 
}
