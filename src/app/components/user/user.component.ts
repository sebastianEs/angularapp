import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  isEdit:boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = "Sebastian Estrada",
    this.age = 26,
    this.email = "estradis_91@hotmail.com",
    this.address = {
      street: "Utåkersgatan 5b",
      city: "Göteborg",
      country: "Sweden"
    }
    this.hobbies = ["write code", "watch movies", "listen to music"]
    this.hello = "hello"
  }

  onClick() {
    //console.log("button was clicked!")
    this.hobbies.push("making food")
  }
  addHobby(hobby){
    //console.log(hobby);
    this.hobbies.unshift(hobby)
    return false;
  }
  deleteHobby(hobby) {
    //console.log(hobby);
    for(let i=0; i<this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street: string,
  city: string,
  country: string
}
