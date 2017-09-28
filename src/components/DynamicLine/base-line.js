const createjs = window.createjs;

class BaseLine {
  constructor(x1, y1, x2, y2) {
    this.startPoint = new createjs.Point(x1, y1);
    this.endPoint = new createjs.Point(x2, y2);

    this.graphics = new createjs.Graphics();
    this.graphics.clear();
    this.graphics.setStrokeStyle(1);
    this.graphics.beginStroke('#05CF9D');

    this.line = new createjs.Shape(this.graphics);
  }

  drawStartPoint() {
    this.graphics.lineTo(this.startPoint.x, this.startPoint.y);
  }

  drawEndPoint() {
    this.graphics.lineTo(this.endPoint.x, this.endPoint.y);
  }

  draw() {
    this.drawStartPoint();

    this.drawEndPoint();
  }

  clear() {
    //this.graphics.command = {};
    this.graphics._activeInstructions = [];
  }
}

export default BaseLine;
