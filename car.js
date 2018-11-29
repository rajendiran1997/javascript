//considering origin=0 to identify the car distance from the origin
const radius = 5;//for 1km

class Car {
	constructor(brandName, registrationNumber){
		this.brandName = brandName;
		this.registrationNumber = registrationNumber;
	}

	//x and y are in meters
	location(x,y){
		this.x = x;
		this.y = y;

		
		if((x*x)+(y*y)) <= (radius*radius)) return 'valid';
		else return 'invalid';
	}
}

var data =[];

var user1 = new Car('toyoto',12345);
if(user1.location(3,4) == 'valid') data.push(user1);

var user2 = new Car('toyoto',12345);
if(user2.location(5,1) == 'valid') data.push(user2);

var user3 = new Car('toyoto',12345);
if(user3.location(-3,4) == 'valid') data.push(user3);

var user4 = new Car('toyoto',12345);
if(user4.location(6,0) == 'valid') data.push(user4);