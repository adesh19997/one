import { Component, OnInit } from '@angular/core';
import { trigger,style,animate,transition,keyframes,query,stagger } from '@angular/animations';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    
  ]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string="Add User";
  Users: string;
  Des: string;
  Skill: string;
  Email: string;
  Status: string="Not Allocated";
  RmUser: string;
  msg: string;
  disp = [];
  Fl: number=0;
  public Udata = [{
    UText: '',
    DText: '',
    SText: '',
    EText: '',
    StText: ''
  }];
  constructor() { }
  submitted = false;

  

  ngOnInit() {
    
    this.Udata=JSON.parse(localStorage.getItem('key2'));
    //this.Udata.splice(1,this.Udata.length);
    //localStorage.setItem('key2', JSON.stringify(this.Udata));
      
  
    }

  addItem(){

    

    

   
    for (let i = 1; i < this.Udata.length; i++) {
      if(this.Udata[i].UText==this.Users){
        this.Fl=1;
       
        this.Udata[i].UText = this.Users;
        this.Udata[i].DText = this.Des;
        this.Udata[i].SText = this.Skill;
        this.Udata[i].EText = this.Email;
        
        localStorage.setItem('key2', JSON.stringify(this.Udata));
      }
      
    }
    if(this.Fl!=1){
      this.Udata.push({'UText': this.Users, 'DText':this.Des, 'SText':this.Skill, 'EText':this.Email, StText:this.Status });
      
      this.Users='';
      this.Des='';
      this.Skill='';
      this.Email='';
      localStorage.setItem('key2', JSON.stringify(this.Udata));
      
    }
   
    
    
  }
  onSubmit() { this.submitted = true; }
  
  remove(){
    for (let i = 1; i < this.Udata.length; i++) {
      if(this.Udata[i].UText==this.RmUser){
        if(this.Udata[i].StText=="Not Allocated"){
        
          this.msg="User Removed";
          this.Udata.splice(i,1);
          localStorage.setItem('key2', JSON.stringify(this.Udata));
        }
        else{
          this.msg="User is Allocated a task, Deallocate first";
        }
      }
      else{
        this.msg="User Not Found";
      }
    }
    
    
    
  }

}
