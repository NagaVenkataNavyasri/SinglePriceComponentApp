import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  btnVal="Subscribe Now!!!";
  flag = true;
  
M1(){
  
  
  this.btnVal="Subscribed";
  if(this.flag){
    alert('You are Subscribing for One Month!!!');
    this.flag = false;
  
    this.btnVal="Subscribed";
  }
  else{
    this.flag = true;
    alert('You are unSubscribing ...');
    this.btnVal="UnSubscribed..(Subscribe Now!!)";
  }

}
btnVal1="Subscribe Now!!!";
flag1=true;
M3(){
 
  this.btnVal1="Subscribed";
  if(this.flag1){
    alert('You are Subscribing for 3 Months!!! ');
    this.flag1 = false;
   
    this.btnVal1="Subscribed";
  }
  else{
    this.flag1 = true;
    alert('You are unSubscribing...');
    this.btnVal1="UnSubscribed..(Subscribe Now!!)";
  }
}
btnVal2="Subscribe Now!!!";
flag2=true;
M6(){
  
  this.btnVal2="Subscribed";
  if(this.flag2){
    alert('You are Subscribing for 6 Months!!!');
    this.flag2 = false;
    this.btnVal2="Subscribed";
  }
  else{
    this.flag2 = true;
    alert('You are unSubscribing...');
    this.btnVal2="UnSubscribed..(Subscribe Now!!)";
  }
}

btnVal3="Subscribe Now!!!";
flag3=true;
M9(){
 
  this.btnVal3="Subscribed";
  if(this.flag3){
    alert('You are Subscribing for 9 Months..!!!')
    this.flag3 = false;
   
    this.btnVal3="Subscribed";
  }
  else{
    this.flag3 = true;
    alert('You are unSubscribing...');
    this.btnVal3="UnSubscribed..(Subscribe Now!!)";
  }
}

btnVal4="Subscribe Now!!!";
flag4=true;
M12(): void{
  
  this.btnVal4="Subscribed";
  if(this.flag4){
    alert('You are Subscribing for 12 Months!!!');
    this.flag4 = false;
    this.btnVal4="Subscribed";
  }
  else{
    this.flag4 = true;
    alert('You are unSubscribing...');
    this.btnVal4="UnSubscribed..(Subscribe Now!!)";
  }
}

btnVal5="Subscribe Now!!!";
flag5=true;
M10(){
 
  this.btnVal5="Subscribed";
  if(this.flag5){
    alert('You are Subscribing for Life Time..!!!')
    this.flag5 = false;
   
    this.btnVal5="Subscribed";
  }
  else{
    this.flag5 = true;
    alert('You are unSubscribing...');
    this.btnVal5="UnSubscribed..(Subscribe Now!!)";
  }
}

}
