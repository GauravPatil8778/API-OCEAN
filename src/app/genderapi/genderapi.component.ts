import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-genderapi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './genderapi.component.html',
  styleUrl: './genderapi.component.css'
})
export class GenderapiComponent {

  url :string = "https://api.genderize.io?name=";
  values="";
  error="";
  resultname = "Gaurav";
  resultgender="Male";
  probability= "1";
  symbol: string="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Mars-male-symbol-pseudo-3D-blue.svg/1200px-Mars-male-symbol-pseudo-3D-blue.svg.png";
  
  onKey(event: any) { // without type info
    this.values= event.target.value;
    console.log(this.values);
    
  }
  onClick() {
    
    this.url="https://api.genderize.io?name=";

    if (this.values.length > 0 && /^[A-Za-z]+$/.test(this.values)) {
      this.error="";
      this.url+=this.values;

      fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        this.resultname = data.name;
        this.resultgender=data.gender;
        
        if(this.resultgender==="Female"){

          this.symbol="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Venus_symbol.svg/640px-Venus_symbol.svg.png";

        }
        else{
          this.symbol="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Mars-male-symbol-pseudo-3D-blue.svg/1200px-Mars-male-symbol-pseudo-3D-blue.svg.png";
        }

        console.log(this.resultgender);
        this.probability=data.probability;
        console.log(this.probability);
        
      });


      
    } else {
     this.error = "Enter a valid name with no spaces";
    }


  }
    
  

  
}
