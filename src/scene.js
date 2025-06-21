// src/scene.js

class Scene {
    constructor(name) {
        this.name = name;
        this.objects = {};
        this.characters = {};
    }

    addObject(gameObject) {
        if (!gameObject.name) {
            throw new Error("GameObject must have a name property");
        }
        this.objects[gameObject.name] = gameObject;
    }

    getObject(name) {
        return this.objects[name];
    }

    addCharacter(character) {
        if (!character.name) {
            throw new Error("Character must have a name property");
        }
        this.characters[character.name] = character;
    }

    listAvailableElements() {
        return {
            objects: Object.keys(this.objects),
            characters: Object.keys(this.characters)
        };
    }

    isAvailable(name) {
        return name in this.objects || name in this.characters;
    }

    isGameObject(name) {
        return name in this.objects;
    }

    isCharacter(name) {
        return name in this.characters;
    }

    inspect() {
        const objectDescriptions = Object.values(this.objects)
            .map(obj => typeof obj.inspect === "function" ? obj.inspect() : `A ${obj.name}`)
            .join("\n");

        const characterDescriptions = Object.keys(this.characters)
            .map(name => `${name} is here.`)
            .join("\n");

        return {
            description: `${this.name}\n\n${characterDescriptions}\n${objectDescriptions}`.trim()
        };
    }
}

module.exports = Scene;
