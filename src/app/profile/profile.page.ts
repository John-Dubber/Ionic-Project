import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  name:string;
  address:string;
  email:string;
  age:Number;
  constructor( private storage:Storage) { }

  onSave(){
    console.log("Profile has been Saved!");

    this.storage.set("name", this.name);
    this.storage.set("address", this.address);
    this.storage.set("email", this.email);
    this.storage.set("age", this.age);
  }

  ngOnInit() {

    this.storage.get("name").then(
      (data)=>{this.name=data;}
    ).catch(
      (error)=>{
        console.log(error);
      }
    );

    this.storage.get("address").then(
      (data)=>{this.address=data;}
    ).catch(
      (error)=>{
        console.log(error);
      }
    );

    this.storage.get("email").then(
      (data)=>{this.email=data;}
    ).catch(
      (error)=>{
        console.log(error);
      }
    );

    this.storage.get("age").then(
      (data)=>{this.age=data;}
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  }

}
