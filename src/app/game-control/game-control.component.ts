import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TimeInterval} from "rxjs";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('currentSecondPopped') popCurrentSecondEvent: EventEmitter<number> = new EventEmitter<number>();

  public currentSecond = 0;
  public interval = 0;
  public status = "Stop";

  ngOnInit(): void {}

  public startAction(): void {
    this.status = "Start";
    this.emitEventEveryPeriodTime(1000);
  }

  private emitEventEveryPeriodTime(period: number): void {
    const this_ = this;
    this_.interval = setInterval(function() {
      this_.popCurrentSecondEvent.emit(this_.currentSecond++);
    }, period);
  }

  public stopAction(): void {
    this.status = "Stop";
    clearInterval(this.interval);
  }

}
