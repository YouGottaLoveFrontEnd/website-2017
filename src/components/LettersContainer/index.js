let createjs = window.createjs;

class LettersContainer {
  constructor(movieClip, callback) {
    this.letterTexts = [];
    this.movieClip = movieClip;
    this.callback = callback;
    this.isMobile = window.innerWidth < 768;
    this.font = '300 ' + (this.isMobile ? '16' : '45') + 'px sofia-pro';
    this.container = this.createLettersContainer();
    this.animationComplete = false;
    this.initAnimations();
  }

  initAnimations() {
    const positionX = 3;
    const allWait = this.isMobile ? 70 : 80;

    const wait = this.isMobile ? 1.1 : 0.5;

    this.letterTexts.forEach((letterText, index) => {
      letterText.alpha = 0;
      letterText.x += positionX;

      const letterTween = createjs.Tween.get(letterText);
      letterTween
        .wait(wait * index + allWait)
        .to(
          {
            x: letterText.x - positionX,
          },
          wait,
          createjs.Ease.cubicInOut
        )
        .to(
          {
            alpha: 1,
          },
          30,
          createjs.Ease.cubicInOut
        )
        .wait(allWait * 2 - wait * index);

      if (['Y', 'G', 'L', 'F'].indexOf(letterText.text) === -1) {
        letterTween.to(
          {
            alpha: 0,
          },
          30,
          createjs.Ease.cubicInOut
        );
      } else {
        letterTween.to(
          {
            color: '#05CF9D',
          },
          0,
          createjs.Ease.cubicInOut
        );

        const tweebObject = {
          alpha: 1,
          scaleX: 3.88,
          scaleY: 3.88,
        };

        switch (letterText.text) {
          case 'Y':
            tweebObject.x = this.isMobile ? 58 : 160;
            tweebObject.y = this.isMobile ? -55 : -200;
            break;
          case 'G':
            tweebObject.x = this.isMobile ? 110 : 300;
            tweebObject.y = this.isMobile ? -55 : -195;
            break;
          case 'L':
            tweebObject.x = this.isMobile ? 70 : 195;
            tweebObject.y = this.isMobile ? 7 : -30;
            break;
          case 'F':
            tweebObject.x = this.isMobile ? 120 : 320;
            tweebObject.y = this.isMobile ? 7 : -30;
            break;
        }

        letterTween
          .to(tweebObject, 50, createjs.Ease.cubicInOut)
          .call(this.handleFinishAnimation.bind(this));
      }

      this.movieClip.timeline.addTween(letterTween);
    });
  }

  handleFinishAnimation() {
    if (!this.animationComplete) this.callback();

    this.animationComplete = true;
  }

  createLettersContainer() {
    const lettersContainer = new createjs.Container();
    const logoText = 'You Gotta Love Frontend';

    let currentX = 0;
    let maxHeight = 0;

    for (var i = 0, len = logoText.length; i < len; i++) {
      const letterText = this.createLetterText(logoText[i], this.font);
      letterText.x = currentX;

      currentX += letterText.width;
      maxHeight = maxHeight < letterText.height ? letterText.height : maxHeight;

      lettersContainer.addChild(letterText);

      this.letterTexts.push(letterText);
    }

    lettersContainer.width = currentX;
    lettersContainer.height = maxHeight;
    lettersContainer.regX = currentX / 2;
    lettersContainer.regY = maxHeight / 2 + (this.isMobile ? -4 : -19);

    return lettersContainer;
  }

  createLetterText(text, font) {
    const letterText = new createjs.Text(text, font, '#FFF');
    letterText.width = letterText.getMeasuredWidth();
    letterText.height = letterText.getMeasuredHeight();
    return letterText;
  }
}

export default LettersContainer;
