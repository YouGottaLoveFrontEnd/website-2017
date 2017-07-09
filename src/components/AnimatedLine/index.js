let createjs = window.createjs;

class AnimatedLine {

    constructor(movieClip, x1, y1, x2, y2, index) {

        this.movieClip = movieClip;
        this.startPoint = new createjs.Point(x1, y1 + 0.5);
        this.endPoint = new createjs.Point(x2, y2 + 0.5);
        this.index = index;
        this.lineGradientWidth = window.innerWidth * .1;

        this.createLine();
        this.createAnimation();

    }


    createLine() {

        const lineColor = '#05CF9D';

        const lineGraphics = new createjs.Graphics();
        lineGraphics.setStrokeStyle(1);
        lineGraphics.beginStroke(lineColor);
        lineGraphics.lineTo(this.startPoint.x, this.startPoint.y);
        lineGraphics.lineTo(this.endPoint.x, this.endPoint.y);

        this.line = new createjs.Shape(lineGraphics);
        this.line.alpha = 0.3;


        this.lineGradient = new createjs.Shape();
        this.lineGradient.graphics
            .beginLinearGradientFill(["#FFF", lineColor, "#FFF"], [0, 1, 0], 0, 0, this.lineGradientWidth / 2, 0)
            .drawRect(0, this.endPoint.y - 0.5, this.lineGradientWidth, 1)

        this.lineGradient.x = -(this.endPoint.x)
        this.lineGradient.alpha = 0.55;

    }

    createAnimation() {

        this.movieClip.timeline.addTween(
            createjs.Tween.get(this.line));

        this.movieClip.timeline.addTween(
            createjs.Tween.get(this.lineGradient)
            .wait(this.index * 5)
            .to({
                x: -(this.lineGradientWidth)
            }, 0, createjs.Ease.getPowIn(2.2))
            .to({
                x: this.endPoint.x
            }, 100, createjs.Ease.getPowIn(2.2)));

    }

}

export default AnimatedLine;
