const Game = require("../src/Game");
const GameObject = require("../src/GameObject");
const Scene = require("../src/Scene");

jest.mock("../src/Scene", () => {
    return jest.fn().mockImplementation(() => {
        return {
            getGameObject: jest.fn((name) => {
                if (name === "testObject") {
                    return new GameObject();
                }
                return null;
            })
        };
    });
});

describe("Game Class", () => {
    let game;
    let consoleSpy;
    let consoleErrorSpy;

    beforeEach(() => {
        game = new Game();
        consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });

    it("should select a GameObject successfully", () => {
        const selectedObject = game.selectGameObject("testObject");
        expect(selectedObject).toBeInstanceOf(GameObject);
    });

    it("should fail to select a non-existent GameObject", () => {
        const selectedObject = game.selectGameObject("nonExistentObject");
        expect(selectedObject).toBeNull();
        expect(consoleErrorSpy).toHaveBeenCalledWith("GameObject not found");
    });

    it("should start an interaction successfully", () => {
        game.selectGameObject("testObject");
        game.startInteraction("look");
        expect(consoleSpy).toHaveBeenCalledWith("you looked closely");
    });

    it("should fail to start an interaction if no object is selected", () => {
        game.startInteraction("look");
        expect(consoleErrorSpy).toHaveBeenCalledWith("No object selected");
    });
});
