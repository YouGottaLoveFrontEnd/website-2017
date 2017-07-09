import LettersContainer from '../LettersContainer';
import AnimatedLine from '../AnimatedLine';

let createjs = window.createjs;

class IntroMovieClip {

    constructor(stage, callback) {

        this.stage = stage;

        this.isMobile = window.innerWidth < 768;
        this.lines = 14;
        this.linesMargin = this.isMobile ? 15 : 45;
        this.animatedLines = [];

        this.animatedLinesMovieClip = new createjs.MovieClip(null, 0, false);
        this.createAnimatedLines();

        this.stage.addChild(this.animatedLinesMovieClip);

        this.lettersContainerMovieClip = new createjs.MovieClip(null, 0, false);
        this.lettersContainer = new LettersContainer(this.lettersContainerMovieClip, callback);

        this.lettersContainerMovieClip.regX = this.lettersContainer.container.regX;
        this.lettersContainerMovieClip.regY = this.lettersContainer.container.regY;

        this.lettersContainerMovieClip.x = stage.canvas.width / 4;
        this.lettersContainerMovieClip.y = this.linesMargin * (this.lines / 2);

        this.stage.addChild(this.lettersContainerMovieClip);

    }

    remove() {

        this.stage.removeChild(this.animatedLinesMovieClip);
        this.stage.removeChild(this.lettersContainerMovieClip);
    }

    play() {

        // this.logoText = new createjs.Text('You Gotta Love Frontend Conference', '300 50px sofia-pro', '#FFF');
        // this.logoText.x = 100;
        // this.logoText.y = 100;

        // this.stage.addChild(this.logoText);

        this.animatedLinesMovieClip.play();
        this.lettersContainerMovieClip.play();

    }

    createAnimatedLines() {

        for (var i = 1; i <= this.lines; i++) {
            const animatedLine = new AnimatedLine(this.animatedLinesMovieClip, 0, this.linesMargin * i, this.stage.canvas.width, this.linesMargin * i, i);
            this.animatedLines.push(animatedLine);
        }


    }


}

export default IntroMovieClip;
