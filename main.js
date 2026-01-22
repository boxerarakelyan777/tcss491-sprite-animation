const gameEngine = new GameEngine();
const ASSET_MANAGER = new AssetManager();

// 1) Queue the sprite sheet
ASSET_MANAGER.queueDownload("./sprites/character.png");

// 2) Download everything, then start the game
ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    gameEngine.init(ctx);

    // Make sure canvas can receive key events
    canvas.focus();

    // 3) Get the loaded sprite sheet from the AssetManager cache
    const knightSheet = ASSET_MANAGER.getAsset("./sprites/character.png");

    // 4) Create the animated entity and add it to the engine
    const knight = new Knight(gameEngine, knightSheet);
    gameEngine.addEntity(knight);

    // 5) Start loop
    gameEngine.start();
});
