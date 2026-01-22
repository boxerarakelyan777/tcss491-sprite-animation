class Knight {
    constructor(game, spriteSheet) {
        this.game = game;
        this.spriteSheet = spriteSheet;

        // Position on canvas
        this.x = 200;
        this.y = 200;

        // Make it bigger on screen
        this.scale = 4;

        // Your sprite sheet: 8 frames across, each 42x42, one row
        this.animator = new Animator(this.spriteSheet, 0, 0, 42, 42, 8, 0.12, 0, true);
    }

    update() {
        // For now, no movement needed to pass the assignment
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
    }
}

