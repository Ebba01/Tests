// test/scene.test.js

const Scene = require("../src/scene");

describe("Scene functionality", () => {
    let scene;

    beforeEach(() => {
        scene = new Scene("Kitchen");
    });

    it("adds and retrieves objects", () => {
        const obj = { name: "phone", inspect: () => "A phone" };
        scene.addObject(obj);
        expect(scene.getObject("phone")).toBe(obj);
    });

    it("returns scene info via inspect", () => {
        scene.addCharacter({ name: "Chef" });
        scene.addObject({ name: "fridge", inspect: () => "A fridge" });

        const info = scene.inspect();
        expect(info.description).toContain("Chef is here.");
        expect(info.description).toContain("A fridge");
    });

    it("lists available elements", () => {
        scene.addCharacter({ name: "Secretary" });
        scene.addObject({ name: "desk", inspect: () => "A desk" });

        const elements = scene.listAvailableElements();
        expect(elements.characters).toContain("Secretary");
        expect(elements.objects).toContain("desk");
    });

    it("checks availability of game elements", () => {
        scene.addCharacter({ name: "Chef" });
        scene.addObject({ name: "fridge", inspect: () => "A fridge" });

        expect(scene.isAvailable("fridge")).toBe(true);
        expect(scene.isAvailable("Chef")).toBe(true);
        expect(scene.isAvailable("ghost")).toBe(false);
        expect(scene.isGameObject("fridge")).toBe(true);
        expect(scene.isCharacter("Chef")).toBe(true);
    });
});
