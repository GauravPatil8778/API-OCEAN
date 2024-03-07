import { Component } from '@angular/core';

@Component({
  selector: 'app-randomuser',
  standalone: true,
  imports: [],
  templateUrl: './randomuser.component.html',
  styleUrl: './randomuser.component.css'
})
export class RandomuserComponent {
  url = "https://random-data-api.com/api/v2/users?response_type=json";
  src:string="";
  details:string="";
  details_second:string="";
  adress:string="";


  getUser(){
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        this.src = data.avatar;
        this.details =data.first_name + data.last_name;
        this.details_second=data.employment.title;
        this.adress=data.address.city;
  
        let randomColor =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      document.documentElement.style.setProperty("--theme-color", randomColor);

          
      });
  };

}
