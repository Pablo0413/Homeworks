"use strict";

var car = {
  generator: 'Toyota',
  model: 'Supra A80',
  year: 1998,
  speed: 120,
  fuel: 12,
  drivers: ["Me"],
  ShowInfoAboutCar: function ShowInfoAboutCar() {
    console.log(this);
  },
  addDriver: function addDriver(drivers) {
    this.drivers.push(drivers);
  },
  isDriver: function isDriver(drivers) {
    for (var i = 0; i < this.drivers.length; i++) {
      if (drivers === this.drivers[i]) {
        return true;
      }
    }

    return false;
  },
  countTimeWithFuel: function countTimeWithFuel(distance) {
    var fuelArg = distance / 100 * this.fuel;
    var timeArg = parseFloat(distance / this.speed);

    if (timeArg >= 4) {
      var restTime = Math.trunc(timeArg / 4);
      timeArg = timeArg + restTime;
    }

    console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E\u0433\u043E \u043F\u0430\u043B\u0438\u0432\u0430 ".concat(fuelArg, "\u043B, \u0442\u0430 \u0447\u0430\u0441\u0443 ").concat((timeArg * 60).toFixed(0), " \u0445\u0432, \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u043E\u043C (60\u0445\u0432), \u043D\u0430 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u044E ").concat(distance, " \u043A\u043C"));
  }
};
car.ShowInfoAboutCar();
car.addDriver('Sasha');
var driver = car.isDriver('Sasha');
console.log(driver);
car.countTimeWithFuel(500); // Norma 1 

var time = {
  hours: 3,
  minutes: 34,
  seconds: 55,
  showTime: function showTime() {
    alert('Значення часу дорівнює ' + time.hours + ' годин, ' + time.minutes + ' хвилин, ' + time.seconds + ' секунд ');
  },
  setHours: function setHours(hours) {
    this.hours += hours; // я сидів і бавився з тим щоб змінювати годину після 24:00 на 00:00, і ніяк не зміг цього зробити, того кінцевим буде просто додавання годин

    if (this.hours > 24) {
      this.hours = 0;
    }
  },
  setMinutes: function setMinutes(minutes) {
    this.minutes += minutes;

    if (this.minutes > 60) {
      this.hours = this.hours + Math.trunc(this.minutes / 60);
      this.minutes = this.minutes % 60;
    }
  },
  setSeconds: function setSeconds(seconds) {
    this.seconds += seconds;

    if (this.seconds > 60) {
      this.minutes = this.minutes + Math.trunc(this.seconds / 60);
      this.seconds = this.seconds % 60;
    }
  }
};
time.setHours(5);
time.setMinutes(75);
time.setSeconds(150);
time.showTime();