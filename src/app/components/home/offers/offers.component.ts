import { FirebaseService } from './../../../services/firebase.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-home-offers',
  templateUrl: 'offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class HomeOffersComponent {
  constructor(private firebaseService: FirebaseService, private notification: NotificationsService) {
    this.initTimer();
  }

  @ViewChild('email') email: ElementRef;
  private eventDate: Date = new Date(2017, 11, 0);

  private diff: number;
  private countDownResult: number;
  private days: number;
  private hours: number;
  private mins: number;
  private secs: number;

  onSubscribe() {
    const email = this.email.nativeElement.value;
    if(!email) {
      return;
    }
    this.firebaseService.list('subscribes').then(data => {
      const newData = Object.keys(data).filter(key => {
        return data[key].email === email;
      });
      if (!newData.length) {
        this.firebaseService.push('subscribes', {email});
        this.notification.success('Succes', 'You were successfully already subscribed!');
      } else {
        this.notification.alert('Couldn\'t subscribe you', 'You are already subscribed!');
      }
    });
  }

  private initTimer() {
    Observable.interval(1000)
      .map(x => {
        this.diff = Math.floor(
          (this.eventDate.getTime() - new Date().getTime()) / 1000
        );
      })
      .subscribe(x => {
        this.days = this.getDays(this.diff);
        this.hours = this.getHours(this.diff);
        this.mins = this.getMinutes(this.diff);
        this.secs = this.getSeconds(this.diff);
      });
  }

  getDays(t) {
    let days;
    days = Math.floor(t / 86400);

    return days;
  }

  getHours(t) {
    let days, hours;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;

    return hours;
  }

  getMinutes(t) {
    let days, hours, minutes;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;

    return minutes;
  }

  getSeconds(t) {
    let days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return seconds;
  }
}
