import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameApp';
  oddComponents: number[] = [];
  evenComponents: number[] = [];

  handleCurrentSecond(poppedCurrentSecond: number): void {
    console.log(poppedCurrentSecond);
    if(this.isEven(poppedCurrentSecond)){
      this.evenComponents.push(poppedCurrentSecond);
    }
    if(this.isOdd(poppedCurrentSecond)){
      this.oddComponents.push(poppedCurrentSecond);
    }
  }

  isEven(num: number): boolean {
    return num % 2 === 0;
  }

  isOdd(num: number): boolean {
    return num % 2 !== 0;
  }
}
