import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Flashlight} from 'ionic-native';
import { BatteryStatus } from '@ionic-native/battery-status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
public flashstatus;
public flashvalue;

  constructor(public navCtrl: NavController, private flashlight: Flashlight, private batteryStatus: BatteryStatus) {
    this.flashstatus = 'off';
    this.flashvalue = 1;
  	// this.flashlight.switchOn();
  }

  LightOn() {
    // this.flashlight.available((isAvailable) => {
        // if(isAvailable)
           Flashlight.toggle();
          // console.log(a);
            this.flashvalue += 1;
            if(this.flashvalue % 2 != 0)
                this.flashstatus = 'on';
            else
                this.flashstatus = 'off';
    // })
  }

  let subscription = this.batteryStatus.onChange().subscribe(
 (status: BatteryStatusResponse) => {
   console.log(status.level, status.isPlugged);
 });

// stop watch
subscription.unsubscribe();

}
