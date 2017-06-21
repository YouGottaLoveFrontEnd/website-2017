import DynamicLine from './DynamicLine';

let createjs = window.createjs;

class IntroStage {

    constructor(canvas) {

        this.stage = new createjs.Stage(canvas);
        this.stage.scaleX = this.stage.scaleY = 2; //window.devicePixelRatio;
        this.stage.enableMouseOver(30);

        //createjs.Touch.enable(this.stage, false, true);
        createjs.Ticker.addEventListener('tick', this.stage);
        createjs.Ticker.setFPS(30);

        this.letterSize = 45;
        this.isMobile = window.innerWidth < 768;
        this.width = window.innerWidth;
        this.height = 0;
        this.topLines = [];
        this.bottomLines = [];

        this.container = new createjs.Container();
        this.container.y = 45;

        this.stage.addChild(this.container);

    }

    test() {

        let dinamicLine = new DynamicLine(0, 200, 1400, 200);

        dinamicLine.setPoint(1, 200, 200);
        
        dinamicLine.setPoint(2, 500, 50);
        dinamicLine.setPoint(3, 600, 70);
        dinamicLine.setPoint(4, 800, 250);
        dinamicLine.setPoint(5, 1000, 300);

        dinamicLine.setPoint(6, 1200, 200);

        dinamicLine.drawPoints(this.container);

        this.container.addChild(dinamicLine.shape);

    }

    bind() {

        window.removeEventListener('devicemotion', this.deviceMotionHandler.bind(this), false);

        this.container.removeAllChildren();


        let currentPositionY = 0;

        const lineMargin = this.isMobile ? 15 : 45;
        const lines = 5;
        const margin = lineMargin * 3;
        const centerX = this.width / 2;
        const centerY = (lineMargin * 5);

        this.centerX = centerX;
        this.centerY = centerY;

        this.letterSize = lineMargin * 4;
        this.height = 0;

        for (let i = 0; i < lines; i++) {
            let y = i * lineMargin;
            let dinamicLine = new DynamicLine(0, y, this.width, y);
            // dinamicLine.setPoint(1, 200, y - 50);
            // dinamicLine.setPoint(2, 400, y + 50);
            // dinamicLine.setPoint(3, this.width / 2, y);
            // dinamicLine.setPoint(4, this.width / 1.5, y);
            dinamicLine.drawPoints();
            this.container.addChild(dinamicLine.container);
            this.topLines.push(dinamicLine);
            currentPositionY = y;
        }

        currentPositionY += margin;
        
        // this.letterY = this.createImageLetter('letter-Y.svg');
        // this.container.addChild(this.letterY);

        // this.letterL = this.createImageLetter('letter-G.svg');
        // this.container.addChild(this.letterL);

        // this.letterG = this.createImageLetter('letter-L.svg');
        // this.container.addChild(this.letterG);

        // this.letterF = this.createImageLetter('letter-F.svg');
        // this.container.addChild(this.letterF);

        this.infoContainer = new createjs.Container();
        this.container.addChild(this.infoContainer);

        this.timeout = null;

        window.addEventListener('devicemotion', this.deviceMotionHandler.bind(this), false);


    }

    deviceMotionHandler(event) {


        let round = function(num) {
            
            return Math.round(num * 100) / 100;

        }

        const max = 30;
        const min = -30;

        let checkMinMax = function (letter) {
            
            if ((letter.startX - letter.x) < min) letter.x = letter.startX - min;
            if ((letter.startX - letter.x) > max) letter.x = letter.startX - max;
            if ((letter.startY - letter.y) < min) letter.y = letter.startY - min;
            if ((letter.startY - letter.y) > max) letter.y = letter.startY - max;

        }

        var x = event.accelerationIncludingGravity.x * 2;
        var y = event.accelerationIncludingGravity.y * 2;
        var z = event.accelerationIncludingGravity.z * 2;

        this.infoContainer.removeAllChildren();

        let info = new createjs.Text('X:' + round(x) + ', Y:' + round(y) + ', Z: ' + round(z));

        // this.letterY.x += x * Math.random();
        // this.letterY.y -= y * Math.random();
        
        this.letterG.x += x * Math.random();
        this.letterG.y -= y * Math.random();

        this.letterL.x += x * Math.random();
        this.letterL.y -= y * Math.random();

        this.letterF.x += x * Math.random();
        this.letterF.y -= y * Math.random();


        //checkMinMax(this.letterY);
        checkMinMax(this.letterG);
        checkMinMax(this.letterL);
        checkMinMax(this.letterF);

        //this.pointY.x = this.letterY.x - this.centerX + this.letterSize * 0.22;
        //this.pointY.y = this.letterY.y - this.centerY + this.letterSize * 0.37;

        let _this = this;

        this.topLines.forEach(function (line) {
            //line.setPoint(1, _this.pointY.x, _this.pointY.y);
            //line.drawPoints();
        })

        //this.letterF.y += acceleration.y;

        this.infoContainer.addChild(info);

        this.timeout = null;


    }
    
    createPoint(x, y, color) {
        var graphics = new createjs.Graphics();
        graphics.setStrokeStyle(1);
        graphics.beginFill(color || 'red');
        graphics.drawCircle(x, y, 3);
        return new createjs.Shape(graphics);
    }

    createLetter(text) {
        let letter = new createjs.Text(text);
        letter.color = '#05CF9D';
        letter.font = '300 ' + this.letterSize + 'px sofia-pro';
        letter.regX = letter.getMeasuredWidth() / 2;
        letter.regY = letter.getMeasuredHeight() / 2;
        return letter;
    }

    createImageLetter(path) {
        let letter = new createjs.Bitmap(path);
        return letter;
    }

}

export default IntroStage;
