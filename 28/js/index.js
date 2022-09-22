const car = {
    generator: 'Toyota',
    model: 'Supra A80',
    year: 1998,
    speed: 120,
    fuel: 12,
    drivers: ["Me"],
    ShowInfoAboutCar: function() {
        console.log(this)
    },
    addDriver: function(drivers) {
        this.drivers.push(drivers)
    },
    isDriver: function(drivers){
        for(let i = 0; i < this.drivers.length; i++) {
            if(drivers === this.drivers[i]) {
                return true
            }
        }
        return false
    },
    countTimeWithFuel: function(distance){
        let fuelArg = distance / 100 * this.fuel;
        let timeArg = parseFloat(distance / this.speed);

        if(timeArg >= 4) {
            let restTime = Math.trunc(timeArg / 4);
            timeArg = timeArg + restTime;
        }

        console.log(`Кількість необхідного палива ${fuelArg}л, та часу ${(timeArg * 60).toFixed(0)} хв, разом із відпочинком (60хв), на дистанцію ${distance} км`)
    }

}
car.ShowInfoAboutCar();

car.addDriver('Sasha');

let driver = car.isDriver('Sasha');
console.log(driver);

car.countTimeWithFuel(500);

// Norma 1 

const time = {
    hours: 3,
    minutes: 34,
    seconds: 55,
    showTime: function() {
        alert('Значення часу дорівнює ' + time.hours + ' годин, ' + time.minutes + ' хвилин, ' + time.seconds + ' секунд ')
    },
    setHours: function(hours) {
        this.hours += hours;
        // я сидів і бавився з тим щоб змінювати годину після 24:00 на 00:00, і ніяк не зміг цього зробити, того кінцевим буде просто додавання годин
        if(this.hours > 24) {
            this.hours = 0
        }
    },
    setMinutes: function(minutes) {
        this.minutes += minutes;

        if(this.minutes > 60) {
            this.hours = this.hours + Math.trunc(this.minutes / 60);
            this.minutes = this.minutes % 60; 
        }
    },
    setSeconds: function(seconds) {
        this.seconds += seconds;

        if(this.seconds > 60) {
            this.minutes = this.minutes + Math.trunc(this.seconds / 60);
            this.seconds = this.seconds % 60;
        }
    },
}

time.setHours(5);

time.setMinutes(75);

time.setSeconds(150);

time.showTime()