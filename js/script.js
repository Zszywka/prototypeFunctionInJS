function Phone(brand, price, color, year) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.yearOfProduction = year;
}

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + " color is " + this.color + " and the price is " + this.price + ".");
  if (this.yearOfProduction < 2005){
    console.log("Change your phone for younger.");
  } else {
    console.log("You have a nice phone.")
  }
}

Phone.prototype.showYearOfProduction = function() {
  console.log("The year of production for " + this.brand + " is " + this.yearOfProduction + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", 200, "black", 1999);
var iPhone6s = new Phone("Apple", 300, "red", 2000);
var OnePlusOne = new Phone("Nokia", 300, "blue", 2010);

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();

SamsungGalaxyS6.showYearOfProduction();
iPhone6s.showYearOfProduction();
OnePlusOne.showYearOfProduction();
