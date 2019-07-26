// 1. Copy and paste your prototype in here and refactor into class syntax.

/*function CuboidMaker (attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }*/

  //CuboidMaker.prototype.volume = function (){ return (this.length * this.width * this.height)};
  //CuboidMaker.prototype.surfaceArea = function (){ return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)};

class ClassCuboidMaker {
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume(){
        return (this.length * this.width * this.height);
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const class_cuboid = new ClassCuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(class_cuboid.volume()); // 100
 console.log(class_cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends ClassCuboidMaker {
    constructor(attributes){
        super(attributes);
    }
    volume(){
        return Math.pow(this.length, 3);
    }
    surfaceArea(){
       return (Math.pow(this.length, 2) * 6); 
    }
}

const cube = new CubeMaker ({
    length: 5,
    width: 5,
    height: 5,
});

console.log(cube.volume()); //125
console.log(cube.surfaceArea()); //150