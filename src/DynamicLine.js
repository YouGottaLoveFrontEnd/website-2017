let createjs = window.createjs;

const showLines = true;

class DynamicLine {

    constructor(x1, y1, x2, y2) {

        this.startPoint = new createjs.Point(x1, y1);
        this.point1 = new createjs.Point();
        this.point2 = new createjs.Point();
        this.point3 = new createjs.Point();
        this.point4 = new createjs.Point();
        this.point5 = new createjs.Point();
        this.point6 = new createjs.Point();
        this.endPoint = new createjs.Point(x2, y2);

        this.graphics = new createjs.Graphics();
        this.graphics.clear()
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke('#05CF9D');

        this.shape = new createjs.Shape(this.graphics);

        return this;

    }

    drawPoints(container) {

        this.container = container;
        this.graphics.lineTo(this.startPoint.x, this.startPoint.y + 0.5);


        // // POINT 1
        // const cp1x1 = this.point1.x - ((this.point2.x - this.point1.x) / 6);
        // const cp1y1 = this.point1.y - ((this.point2.y - this.point1.y) / 6);

        // const cp2x1 = cp1x1;
        // const cp2y1 = cp1y1;

        // this.bezierCurveTo(this.startPoint.x, this.startPoint.y, cp1x1, cp1y1, cp2x1, cp2y1, this.point1.x, this.point1.y);


        // // POINT 2
        // const cp1x2 = this.point1.x + (this.point2.x - this.point1.x) / 2;
        // const cp1y2 = this.point2.y;

        // const cp2x2 = cp1x2;
        // const cp2y2 = cp1y2;

        // this.bezierCurveTo(this.point1.x, this.point1.y, cp1x2, cp1y2, cp2x2, cp2y2, this.point2.x, this.point2.y);


        // // POINT 3
        // const cp1x3 = this.point2.x + (this.point3.x - this.point2.x) / 2;
        // const cp1y3 = this.point3.y;

        // const cp2x3 = cp1x3;
        // const cp2y3 = cp1y3;

        // this.bezierCurveTo(this.point2.x, this.point2.y, cp1x3, cp1y3, cp2x3, cp2y3, this.point3.x, this.point3.y);


        // // POINT 4
        // const cp1x4 = this.point4.x + ((this.endPoint.x - this.point4.x) / 6);
        // const cp1y4 = this.point4.y + ((this.point3.y - this.point4.y) / 6);

        // const cp2x4 = cp1x4;
        // const cp2y4 = cp1y4;

        // this.bezierCurveTo(this.point3.x, this.point3.y, cp1x4, cp1y4, cp2x4, cp2y4, this.point4.x, this.point4.y);


        this.graphics.lineTo(this.endPoint.x, this.endPoint.y + 0.5);

        container.addChild(this.shape);

    }

    quadraticCurveTo(cpx, cpy, x, y) {

        this.graphics.quadraticCurveTo(cpx, cpy, x, y);

        if (showLines) {
            this.createLine(x, y, cpx, cpy);
            this.createPoint(x, y);
            this.createPoint(cpx, cpy, 'red');
        }

    }

    bezierCurveTo(startX, startY, cp1x, cp1y, cp2x, cp2y, x, y) {

        this.graphics.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

        if (showLines) {
            this.createLine(startX, startY, cp1x, cp1y);
            this.createPoint(cp1x, cp1y, 'red');
            this.createPoint(startX, startY);

            this.createLine(x, y, cp2x, cp2y);
            this.createPoint(cp2x, cp2y, 'green');
            this.createPoint(x, y);
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
            graphics.drawCircle(x, y, 2);

            var point = new createjs.Shape(graphics);
            this.container.addChild(point);
    }

    setPoint(index, x, y) {

        console.log('setPoint' + index, x, y);

    	this['point' + index].setValues(x, y);
    	
    }
    
}

export default DynamicLine;
