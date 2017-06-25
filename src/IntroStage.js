import DynamicLine from './DynamicLine';

let createjs = window.createjs;

class IntroStage {

    constructor(canvas) {


        this.canvas = canvas;
        this.stage = new createjs.Stage(canvas);
        this.stage.scaleX = this.stage.scaleY = 2; //window.devicePixelRatio;
        //this.stage.enableMouseOver(30);

        //createjs.Touch.enable(this.stage, false, true);
        createjs.Ticker.addEventListener('tick', this.stage);
        //createjs.Ticker.setFPS(60);

        this.isMobile = window.innerWidth < 768;
        this.scale = this.isMobile ? 0.333 : 1;
        this.lineMargin = this.isMobile ? 15 : 45;
        this.width = window.innerWidth;
        this.height = canvas.height;

        this.centerX = this.width / 2;
        this.centerY = this.height / 2;

        this.topLines = [];
        this.bottomLines = [];

        this.container = new createjs.Container();
        this.container.y = this.lineMargin;

        this.stage.addChild(this.container);

        window.removeEventListener('devicemotion', this.deviceMotionHandler.bind(this), false);

    }


    bind() {

        if (this.isMobile) window.removeEventListener('devicemotion', this.deviceMotionHandler.bind(this), false);
        if (!this.isMobile) this.canvas.removeEventListener('mousemove', this.mouseMoveHandler.bind(this), false);

        this.container.removeAllChildren();

        let currentPositionY = 0;

        const lines = 7;

        for (let i = 0; i < lines; i++) {
            let y = i * this.lineMargin;
            let dinamicLine = new DynamicLine(0, y, this.width, y);
            this.container.addChild(dinamicLine.container);
            this.topLines.push(dinamicLine);
            dinamicLine.drawPoints();
            currentPositionY = y;
        }

        currentPositionY += this.lineMargin;

        for (let i = 0; i < lines; i++) {
            let y = (i * this.lineMargin) + currentPositionY;
            let dinamicLine = new DynamicLine(0, y, this.width, y);
            this.container.addChild(dinamicLine.container);
            this.bottomLines.push(dinamicLine);
            dinamicLine.drawPoints();
        }


        this.letters = [{
            char: 'Y',
            imageSrc: 'letter-Y.svg',
            x: this.centerX,
            y: this.centerY * 3,
            offsetX: -80 * this.scale,
            offsetY: -85 * this.scale,
            isTop: true,
            points: [{
                x: -200 * this.scale,
                y: 0
            }, {
                x: 0,
                y: 0
            }, {
                x: 126 * this.scale,
                y: 0
            }]
        }, {
            char: 'G',
            imageSrc: 'letter-G.svg',
            x: this.centerX,
            y: this.centerY * 3,
            offsetX: 80 * this.scale,
            offsetY: -85 * this.scale,
            isTop: true,
            points: [{
                x: 70 * this.scale,
                y: 0
            }, {
                x: 340 * this.scale,
                y: 0
            }]
        }, {
            char: 'L',
            imageSrc: 'letter-L.svg',
            x: this.centerX,
            y: this.centerY * 3,
            offsetX: -80 * this.scale,
            offsetY: 85 * this.scale,
            isTop: false,
            points: [{
                x: -200 * this.scale,
                y: 0
            }, {
                x: 0,
                y: 146 * this.scale
            }, {
                x: 70 * this.scale,
                y: 146 * this.scale
            }]
        }, {
            char: 'F',
            imageSrc: 'letter-F.svg',
            x: this.centerX,
            y: this.centerY * 3,
            offsetX: 80 * this.scale,
            offsetY: 85 * this.scale,
            isTop: false,
            points: [{
                x: 20 * this.scale,
                y: 146 * this.scale
            }, {
                x: 340 * this.scale,
                y: 0
            }]
        }]

        this.eachLetter((letter) => {
            this.loadLetterImage(letter);
        });

    }

    loadLetterImage(letter) {
        let imageY = new Image();
        imageY.src = letter.imageSrc;
        imageY.onload = this.imageLoadHendler.bind(this, letter);
    }

    imageLoadHendler(letter, event) {
        let container = this.createImageLetter(event.target);
        letter.img = event.target;
        letter.displayObject = container;
        letter.displayObject.startX = letter.displayObject.x = letter.x;
        letter.displayObject.startY = letter.displayObject.y = letter.y;
        this.container.addChild(letter.displayObject);
        this.container.addChild(container);
        letter.loaded = true;
        if (this.isAllLettersLoaded()) {
            if (this.isMobile) window.addEventListener('devicemotion', this.deviceMotionHandler.bind(this), false);
            if (!this.isMobile) this.canvas.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
            if (!this.isMobile) this.staticBind();
        }
    }

    isAllLettersLoaded() {
        let allLoaded = true;
        this.letters.forEach((letter) => {
            if (!letter.loaded) allLoaded = false;
        });
        return allLoaded;
    }

    createImageLetter(img) {

        let letter = new createjs.Bitmap(img);

        letter.width = img.naturalWidth;
        letter.height = img.naturalHeight;

        let rect = new createjs.Shape();
        rect.graphics.beginFill('red');
        rect.graphics.drawRect(0, 0, letter.width, letter.height);
        rect.graphics.endFill();
        rect.alpha = 0.2;

        let container = new createjs.Container();

        container.regX = (letter.width / 2)  * this.scale;
        container.regY = (letter.height / 2) * this.scale;

        //container.addChild(rect);
        container.addChild(letter);

        container.scaleX = 
        container.scaleY = this.scale;

        return container;

    }

    eachLetter(func) {
        for (let i = 0; i < this.letters.length; i++) {
            func(this.letters[i]);
        }
    }

    staticBind() {
        this.setPositions((letter) => {
            letter.displayObject.x = letter.displayObject.startX + letter.offsetX;
            letter.displayObject.y = letter.displayObject.startY + letter.offsetY;
        });

    }

    mouseMoveHandler(event) {

        this.setPositions((letter) => {
            let x = event.clientX + letter.offsetX;
            let y = event.clientY - 227 + window.scrollY + letter.offsetY;
            letter.displayObject.x = x;
            letter.displayObject.y = y;
        });
    }

    deviceMotionHandler(event) {

        let speed = 0.1;

        let x = event.accelerationIncludingGravity.x * speed;
        let y = event.accelerationIncludingGravity.y * speed;
        let z = event.accelerationIncludingGravity.z * speed;

        this.setPositions((letter) => {
            if (!letter.isFirst) {
                letter.displayObject.x += letter.offsetX;
                letter.displayObject.y += letter.offsetY;
                letter.isFirst = true;            
            }
            letter.displayObject.x += x;
            letter.displayObject.y -= y;
        });

    }

    checkMinMax(letter) {

        const max = 30;
        const min = -30;

        if ((letter.startX - letter.x) < min) letter.x = letter.startX - min;
        if ((letter.startX - letter.x) > max) letter.x = letter.startX - max;
        if ((letter.startY - letter.y) < min) letter.y = letter.startY - min;
        if ((letter.startY - letter.y) > max) letter.y = letter.startY - max;

    }

    setPositions(func) {
        this.topLines.forEach((line) => {
            let pointIndex = 0;
            this.letters.forEach((letter) => {
                if (letter.isTop) {
                    this.checkMinMax(letter);
                    func(letter);
                    letter.points.forEach((point) => {
                        let pointX = letter.displayObject.x - letter.displayObject.regX + point.x;
                        let pointY = letter.displayObject.y - letter.displayObject.regY + point.y;
                        pointY = pointY > line.startPoint.y ? line.startPoint.y : pointY;

                        if (pointIndex === 0) {
                            line.setPoint(pointIndex + 1, letter.displayObject.x - letter.displayObject.regX + point.x, line.startPoint.y);
                        } else if (pointIndex === 4) {
                            line.setPoint(pointIndex + 1, letter.displayObject.x - letter.displayObject.regX + point.x, line.startPoint.y);
                        } else {
                            line.setPoint(pointIndex + 1, pointX, pointY);
                        }
                        pointIndex++;
                    });
                }
            });
            line.drawPoints();
        });
        this.bottomLines.forEach((line) => {
            let pointIndex = 0;
            this.letters.forEach((letter) => {
                if (!letter.isTop) {
                    this.checkMinMax(letter);
                    func(letter);
                    letter.points.forEach((point) => {
                        let pointX = letter.displayObject.x - letter.displayObject.regX + point.x;
                        let pointY = letter.displayObject.y - letter.displayObject.regY + point.y;
                        pointY = pointY < line.startPoint.y ? line.startPoint.y : pointY;

                        if (pointIndex === 0) {
                            line.setPoint(pointIndex + 1, letter.displayObject.x - letter.displayObject.regX + point.x, line.startPoint.y);
                        } else if (pointIndex === 4) {
                            line.setPoint(pointIndex + 1, letter.displayObject.x - letter.displayObject.regX + point.x, line.startPoint.y);
                        } else {
                            line.setPoint(pointIndex + 1, pointX, pointY);
                        }
                        pointIndex++;
                    });
                }
                line.drawPoints();
            });
        });
    }

    createPoint(x, y, color) {
        let graphics = new createjs.Graphics();
        graphics.setStrokeStyle(1);
        graphics.beginFill(color || 'red');
        graphics.drawCircle(x, y, 3);
        return new createjs.Shape(graphics);
    }

}

export default IntroStage;
