import BaseLine from './base-line';

const createjs = window.createjs;

const showLines = false;

class DynamicLine extends BaseLine {
  constructor(x1, y1, x2, y2) {
    super(x1, y1, x2, y2);

    this.points = [];
  }

  drawDynamicPoint(point, nextPoint) {
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
  }

  drawPoints() {
    this.clear();

    this.drawStartPoint();

    if (this.points.length > 0) {
      this.graphics.lineTo(this.points[0].x, this.points[0].y);

      this.points.forEach((point, index) => {
        if (!this.points[index + 1]) return;

        const nextPoint = this.points[index + 1];

        this.drawDynamicPoint(point, nextPoint);
      });

      this.graphics.lineTo(
        this.points[this.points.length - 1].x,
        this.points[this.points.length - 1].y
      );
    }

    this.drawEndPoint();
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    this.graphics.quadraticCurveTo(cpx, cpy, x, y);
  }

  bezierCurveTo(startX, startY, cp1x, cp1y, cp2x, cp2y, endX, endY) {
    this.graphics.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
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
