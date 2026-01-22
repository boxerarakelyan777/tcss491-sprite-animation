class Knight {
    constructor(game, spriteSheet) {
        this.game = game;
        this.spriteSheet = spriteSheet;

        this.x = 200;
        this.y = 200;
        this.scale = 4;

        // Movement
        this.speed = 120;     // pixels per second
        this.vx = this.speed; // start moving right
        this.facing = 1;      // 1 = right, -1 = left

        // Animation
        this.animator = new Animator(this.spriteSheet, 0, 0, 42, 42, 8, 0.12, 0, true);
    }

    update() {
        // Move
        this.x += this.vx * this.game.clockTick;

        // Bounce off edges of the canvas
        const canvasWidth = this.game.ctx.canvas.width;
        const spriteWidth = 42 * this.scale;

        if (this.x + spriteWidth > canvasWidth) {
            this.x = canvasWidth - spriteWidth;
            this.vx = -this.speed;
            this.facing = -1;
        } else if (this.x < 0) {
            this.x = 0;
            this.vx = this.speed;
            this.facing = 1;
        }
    }

    draw(ctx) {
        // Flip horizontally when facing left
        ctx.save();
        if (this.facing === -1) {
            const spriteWidth = 42 * this.scale;
            ctx.translate(this.x + spriteWidth, this.y);
            ctx.scale(-1, 1);
            this.animator.drawFrame(this.game.clockTick, ctx, 0, 0, this.scale);
        } else {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
        }
        ctx.restore();
    }
}
