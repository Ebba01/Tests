const GameObject = require("./GameObject");
const Scene = require("./Scene");

class Game {
    constructor() {
        this.currentScene = new Scene();
        this.selectedGameObject = null;
    }

    selectGameObject(name) {
        this.selectedGameObject = this.currentScene.getGameObject(name);
        if (!this.selectedGameObject) {
            console.error("GameObject not found");
            return null;
        }
        return this.selectedGameObject;
    }

    startInteraction(interactionType) {
        if (!this.selectedGameObject) {
            console.error("No object selected");
            return;
        }
        this.selectedGameObject.startInteraction(interactionType);
    }
}

module.exports = Game;