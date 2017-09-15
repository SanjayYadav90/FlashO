import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
public flashstatus;
public flashvalue;

  constructor(public navCtrl: NavController, private flashlight: Flashlight) {
  	this.flashstatus = 'off';
    this.flashvalue = 1;
  	this.flashlight.switchOn();
  }

  LightOn() {
        flashlight.available((isAvailable) => {
            if(isAvailable)
                flashlight.toggle();
                this.flashvalue += 1;
            if(this.flashvalue % 2 != 0)
                this.flashstatus = 'on';
            else
                this.flashstatus = 'off';
            
        })
    }

}
