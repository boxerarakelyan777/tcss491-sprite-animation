class Animator {
    constructor(spriteSheet, startX, startY, frameWidth, frameHeight,
                frameCount, frameDuration, framePadding = 0, loop = true) {

        Object.assign(this, {
            spriteSheet, startX, startY,
            frameWidth, frameHeight,
            frameCount, frameDuration,
            framePadding, loop
        });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    drawFrame(tick, ctx, x, y, scale = 1) {
        this.elapsedTime += tick;

        if (this.loop) {
            if (this.elapsedTime >= this.totalTime) {
                this.elapsedTime -= this.totalTime;
            }
        } else {
            if (this.elapsedTime >= this.totalTime) {
                this.elapsedTime = this.totalTime - 0.00001; // freeze on last frame
            }
        }

        const frame = this.currentFrame();
        const sx = this.startX + frame * (this.frameWidth + this.framePadding);
        const sy = this.startY;

        ctx.drawImage(
            this.spriteSheet,
            sx, sy, this.frameWidth, this.frameHeight,
            x, y, this.frameWidth * scale, this.frameHeight * scale
        );
    }
}
