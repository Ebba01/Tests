const GameObject = require("../src/gameObject")

consoleSpy = jest.spyOn(console, "log")
consoleerror = jest.spyOn(console, "error")

describe("GameObject", ()=>{
    it("should return a list of interactions",()=>{
        const G = new GameObject ()
        const interactions = G.listInteractionTypes();
        expect(interactions).toStrictEqual(["look", "open"])
    })


    it("Should start a interaction look", ()=>{
        const G = new GameObject ()
        G.startInteraction("look");
        expect(consoleSpy).toHaveBeenCalledWith("you looked closely")
    })
    it("Should start a interaction open", ()=>{
        const G = new GameObject ()
        G.startInteraction("open");
        expect(consoleSpy).toHaveBeenCalledWith("you open the box.")
    })
    it("Test interactions that dose not exist", ()=>{
        const G = new GameObject ()
        G.startInteraction("ERROR");
        expect(consoleerror).toHaveBeenCalledWith("warning! unknown interaction")
    })





    it("should return current interaction options for Hendricks door from constructor", () => {
        const G = new GameObject();
        const listInteractions = G.listCurrentInteractionOptions("you are in front of Hendricks door");
        expect(listInteractions).toStrictEqual(["look", "open", "inspect"]);
    });
    it("should return current interaction options for mirror from constructor", () => {
        const G = new GameObject();
        const listInteractions = G.listCurrentInteractionOptions("you are standing in front of a mirror");
        expect(listInteractions).toStrictEqual(["lift", "look closely"]);
    });


    it("should return set interaction option for look", () => {
        const G = new GameObject();
        const setcurrentInteractions = G.setCurrentInteractionOptions("look");
        expect(setcurrentInteractions).toBe("you looked at the carvings on the door");
    });
    it("should return set interaction option for open", () => {
        const G = new GameObject();
        const setcurrentInteractions = G.setCurrentInteractionOptions("open");
        expect(setcurrentInteractions).toBe("you open the door");
    });
    it("should return set interaction option for inspect", () => {
        const G = new GameObject();
        const setcurrentInteractions = G.setCurrentInteractionOptions("inspect");
        expect(setcurrentInteractions).toBe("you inspect Hendricks door closely");
    });
    it("should return set interaction option for lift", () => {
        const G = new GameObject();
        const setcurrentInteractions = G.setCurrentInteractionOptions("lift");
        expect(setcurrentInteractions).toBe("you lifted the mirror of the huck");
    });
    it("should return set interaction option for look closely", () => {
        const G = new GameObject();
        const setcurrentInteractions = G.setCurrentInteractionOptions("look closely");
        expect(setcurrentInteractions).toBe("you look closely at the details on the mirror");
    });
    it("should return set interaction option for look closely", () => {
        const G = new GameObject();
        const setcurrentInteractions = G.setCurrentInteractionOptions("ERROR");
        expect(setcurrentInteractions).toBe("warning! unknown interaction typ");
    });


    it("should start current set interaction options for look", () => {
        const G = new GameObject();
        G.startCurrentInteraction("look");
        expect(consoleSpy).toHaveBeenCalledWith("you looked closely");
    });
    it("should start current set interaction options for open", () => {
        const G = new GameObject();
        G.startCurrentInteraction("open");
        expect(consoleSpy).toHaveBeenCalledWith("you open the door");
    });
    it("should start current set interaction options for inspect", () => {
        const G = new GameObject();
        G.startCurrentInteraction("inspect");
        expect(consoleSpy).toHaveBeenCalledWith("you inspect Hendricks door closely");
    });
    it("should start current set interaction options for lift", () => {
        const G = new GameObject();
        G.startCurrentInteraction("lift");
        expect(consoleSpy).toHaveBeenCalledWith("you lift the mirror of the huck");
    });
    it("should start current set interaction options for look closely", () => {
        const G = new GameObject();
        G.startCurrentInteraction("look closely");
        expect(consoleSpy).toHaveBeenCalledWith("you look closely at the details on the mirror");
    });
    it("should start current set interaction options for look closely", () => {
        const G = new GameObject();
        G.startCurrentInteraction("ERROR NO INTERACTION FOUND!");
        expect(consoleerror).toHaveBeenCalledWith("warning! unknown interaction");
    });


    it("should log a warning if there is no current interaction", () => {
        const G = new GameObject();
        G.abortCurrentInteraction(null);
        expect(consoleerror).toHaveBeenCalledWith("Warning! No current interaction to abort.");
    });
    it("should log aborting message and set currentInteraction to null", () => {
        const G = new GameObject();
        const currentInteractions = G.abortCurrentInteraction("look");
        expect(consoleSpy).toHaveBeenCalledWith("Aborting current interaction: look");
        currentInteractions === null;
        // expect(gameObject.currentInteraction).toBeNull();
    });
})


//toBe en sak att testa





// const GameObject = require("../src/gameObject");

// describe("GameObject", () => {
// let consoleSpy;
// let consoleErrorSpy;

// beforeEach(() => {
//     // Sätt upp spies för console.log och console.error innan varje test
//     consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
//     consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
// });

// afterEach(() => {
//     // Återställ spies efter varje test
//     consoleSpy.mockRestore();
//     consoleErrorSpy.mockRestore();
// });

// it("should return a list of interactions", () => {
//     const gameObject = new GameObject();
//     const interactions = gameObject.listInteractionTypes();
//     expect(interactions).toStrictEqual(["look", "open"]);
// });

// // Eftersom startInteraction kontrollerar att interaktionen finns i currentInteractionOptions,
// // måste vi se till att den listan innehåller de testade alternativen.
// it("should start a 'look' interaction", () => {
//     const gameObject = new GameObject();
//     // Sätt currentInteractionOptions manuellt för testets skull
//     gameObject.currentInteractionOptions = ["look", "open"];
//     gameObject.startInteraction("look");
//     expect(consoleSpy).toHaveBeenCalledWith("you looked closely");
// });

// it("should start an 'open' interaction", () => {
//     const gameObject = new GameObject();
//     gameObject.currentInteractionOptions = ["look", "open"];
//     gameObject.startInteraction("open");
//     expect(consoleSpy).toHaveBeenCalledWith("you open the box.");
// });

// it("should warn for an unknown interaction", () => {
//     const gameObject = new GameObject();
//     gameObject.currentInteractionOptions = ["look", "open"];
//     gameObject.startInteraction("ERROR");
//     expect(consoleErrorSpy).toHaveBeenCalledWith("warning! unknown interaction");
// });

// it("should return current interaction options for Hendricks door", () => {
//     const gameObject = new GameObject();
//     const currentInteractions = gameObject.setCurrentInteractionOptions(
//     "you are in front of Hendricks door"
//     );
//     expect(currentInteractions).toStrictEqual(["open", "inspect"]);
// });

// it("should return current interaction options for mirror", () => {
//     const gameObject = new GameObject();
//     const currentInteractions = gameObject.setCurrentInteractionOptions(
//     "you are standing in front of a mirror"
//     );
//     expect(currentInteractions).toStrictEqual(["lift", "look closely"]);
// });
// });
