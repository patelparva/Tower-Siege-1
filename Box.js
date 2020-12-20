class Box extends BaseClass {
  constructor(x, y, width, height, color){
    super(x,y,width,height);

    this.color=color;
  }

  display() {
    fill(this.color);

    super.display();
  }
};
