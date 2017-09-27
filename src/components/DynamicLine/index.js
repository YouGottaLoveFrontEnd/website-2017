import BaseLine from './base-line';

const createjs = window.createjs;

const showLines = false;

class DynamicLine extends BaseLine {
  constructor(x1, y1, x2, y2) {
    super(x1, y1, x2, y2);

    this.points = [];
  }

  drawPoints() {
    this.drawStartPoint();

    if (this.points.length > 0) {
      this.graphics.lineTo(this.points[0].x, this.points[0].y);

      this.points.forEach((point, index) => {
        if (!this.points[index + 1]) return;

        const nextPoint = this.points[index + 1];

        const cp1x = point.x + (nextPoint.x - point.x) / 2;
        const cp1y = point.y;

        const cp2x = nextPoint.x - (nextPoint.x - point.x) / 2;
        const cp2y = nextPoint.y;

        this.bezierCurveTo(
          point.x,
          point.y,
          cp1x,
          cp1y,
          cp2x,
          cp2y,
          nextPoint.x,
          nextPoint.y
        );
      });

      this.graphics.lineTo(
        this.points[this.points.length - 1].x,
        this.points[this.points.length - 1].y
      );
    }

    this.drawEndPoint();

    console.log('drawPoints: ');

    return;

    // POINT 1

    const cp1x1 = this.point1.x + (this.point2.x - this.point1.x) / 2;
    const cp1y1 = this.point1.y;

    const cp2x1 = this.point2.x - (this.point2.x - this.point1.x) / 2;
    const cp2y1 = this.point2.y;

    this.bezierCurveTo(
      this.point1.x,
      this.point1.y,
      cp1x1,
      cp1y1,
      cp2x1,
      cp2y1,
      this.point2.x,
      this.point2.y
    );

    // POINT 2
    const cp1x2 = this.point2.x + (this.point3.x - this.point2.x) / 2;
    const cp1y2 = this.point2.y;

    const cp2x2 = this.point3.x - (this.point3.x - this.point2.x) / 2;
    const cp2y2 = this.point3.y;

    this.bezierCurveTo(
      this.point2.x,
      this.point2.y,
      cp1x2,
      cp1y2,
      cp2x2,
      cp2y2,
      this.point3.x,
      this.point3.y
    );

    //POINT 3
    const cp1x3 = this.point3.x + (this.point4.x - this.point3.x) / 2;
    const cp1y3 = this.point3.y;

    const cp2x3 = this.point4.x - (this.point4.x - this.point3.x) / 2;
    const cp2y3 = this.point4.y;

    this.bezierCurveTo(
      this.point3.x,
      this.point3.y,
      cp1x3,
      cp1y3,
      cp2x3,
      cp2y3,
      this.point4.x,
      this.point4.y
    );

    // POINT 4
    const cp1x4 = this.point4.x + (this.point5.x - this.point4.x) / 2;
    const cp1y4 = this.point4.y;

    const cp2x4 = this.point5.x - (this.point5.x - this.point4.x) / 2;
    const cp2y4 = this.point5.y;

    this.bezierCurveTo(
      this.point4.x,
      this.point4.y,
      cp1x4,
      cp1y4,
      cp2x4,
      cp2y4,
      this.point5.x,
      this.point5.y
    );

    // // POINT 5
    // const cp1x5 = this.point5.x + (this.point6.x - this.point5.x) / 2;
    // const cp1y5 = this.point5.y;

    // const cp2x5 = this.point6.x - (this.point6.x - this.point5.x) / 2;
    // const cp2y5 = this.point6.y;

    // this.bezierCurveTo(this.point5.x, this.point5.y, cp1x5, cp1y5, cp2x5, cp2y5, this.point6.x, this.point6.y);

    // // POINT 6
    // const cp1x6 = this.point6.x;
    // const cp1y6 = this.point6.y;

    // const cp2x6 = cp1x6;
    // const cp2y6 = cp1y6;

    // this.bezierCurveTo(this.point5.x, this.point5.y, cp1x6, cp1y6, cp2x6, cp2y6, this.point6.x, this.point6.y);

    // END
    this.graphics.lineTo(this.point5.x, this.point5.y);
    this.drawEndPoint();
    //        this.createPoint(this.endPoint.x, this.endPoint.y, 'yellow');

    this.container.addChild(this.line);

    // this.createPoint(this.point1.x, this.point1.y);
    // this.createPoint(this.point2.x, this.point2.y);
    // this.createPoint(this.point3.x, this.point3.y);
    // this.createPoint(this.point4.x, this.point4.y);
    // this.createPoint(this.point5.x, this.point5.y);
    // this.createPoint(this.point6.x, this.point6.y);
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    this.graphics.quadraticCurveTo(cpx, cpy, x, y);

    if (showLines) {
      this.createLine(x, y, cpx, cpy);
      this.createPoint(x, y);
      this.createPoint(cpx, cpy, 'red');
    }
  }

  bezierCurveTo(startX, startY, cp1x, cp1y, cp2x, cp2y, endX, endY) {
    this.graphics.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

    if (showLines) {
      this.createLine(startX, startY, cp1x, cp1y);
      this.createPoint(cp1x, cp1y, 'red');
      this.createPoint(startX, startY);

      this.createLine(endX, endY, cp2x, cp2y);
      this.createPoint(cp2x, cp2y, 'green');
      this.createPoint(endX, endY);
    }
  }

  createLine(x1, y1, x2, y2) {
    var graphics = new createjs.Graphics();
    graphics.setStrokeStyle(1);
    graphics.beginStroke('black');
    graphics.lineTo(x1, y1);
    graphics.lineTo(x2, y2);

    var line = new createjs.Shape(graphics);
    this.container.addChild(line);
  }

  createPoint(x, y, color) {
    var graphics = new createjs.Graphics();
    graphics.setStrokeStyle(1);
    graphics.beginFill(color || 'black');
    graphics.drawCircle(x, y, 3);

    var point = new createjs.Shape(graphics);
    this.container.addChild(point);
  }

  setPoint(index, x, y) {
    if (index > this.points.length - 1) {
      const pointsToAdd = index - (this.points.length - 1);

      for (var i = 0; i < pointsToAdd; i++) {
        this.points.push(this.startPoint.clone());
      }
    }

    this.points[index].setValues(x, y);
  }
}

export default DynamicLine;
