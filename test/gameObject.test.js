const GameObject = require("../src/gameObject")

consoleSpy = jest.spyOn(console, "log")
consoleerror = jest.spyOn(console, "error")

describe("GameObject", ()=>{
    it("should return a list of interactions",()=>{
        const G = new GameObject ("door")
        const interactions = G.listInteractionTypes();
        expect(interactions).toStrictEqual(["open/close"])
    })
    it("should return a list of interactions",()=>{
        const G = new GameObject ("box")
        const interactions = G.listInteractionTypes();
        expect(interactions).toStrictEqual(["move"])
    })

    it("Should start a interaction look", ()=>{
        const G = new GameObject ("door")
        G.startInteraction("open/close");
        expect(consoleSpy).toHaveBeenCalledWith("you grabed the handel")
    })
    it("Should start a interaction open", ()=>{
        const G = new GameObject ("box")
        G.startInteraction("move");
        expect(consoleSpy).toHaveBeenCalledWith("you start moving the box")
    })
    it("Test interactions that dose not exist", ()=>{
        const G = new GameObject ()
        G.startInteraction("ERROR");
        expect(consoleerror).toHaveBeenCalledWith("warning! unknown interaction")
    })




    it("should return current interaction options for closed door", () => {
        const G = new GameObject("door");
        G.startInteraction("open/close");
        const listInteractions = G.listCurrentInteractionOptions();
        expect(listInteractions).toStrictEqual(["open"]);
    });
    it("should return current interaction options for open door", () => {
        const G = new GameObject("door");
        G.isOpen = true;
        G.startInteraction("open/close");
        const listInteractions = G.listCurrentInteractionOptions();
        expect(listInteractions).toStrictEqual(["close"]);
    });
    it("should return current interaction options for mirror from constructor", () => {
        const G = new GameObject("box");
        G.startInteraction("move");
        const listInteractions = G.listCurrentInteractionOptions();
        expect(listInteractions).toStrictEqual(["move right", "move left"]);
    });




    it("should start current set interaction options for open door", () => {
        const G = new GameObject("door");
        G.startInteraction("open/close");
        G.startCurrentInteraction("open");
        expect(consoleSpy).toHaveBeenCalledWith("you open the door");
    });
    it("should start current set interaction options for close door", () => {
        const G = new GameObject("door");
        G.isOpen = true;
        G.startInteraction("open/close");
        G.startCurrentInteraction("close");
        expect(consoleSpy).toHaveBeenCalledWith("you close the door");
    });

    it("should start current set interaction options for move the box to the right", () => {
        const G = new GameObject("box");
        G.startInteraction("move");
        G.startCurrentInteraction("move right");
        expect(consoleSpy).toHaveBeenCalledWith("you moved the box to the right");
    });
    it("should start current set interaction options for move the box to the left", () => {
        const G = new GameObject("box");
        G.startInteraction("move");
        G.startCurrentInteraction("move left");
        expect(consoleSpy).toHaveBeenCalledWith("you moved the box to the left");
    });
    it("should return current set interaction options dose not exist", () => {
        const G = new GameObject();
        G.startInteraction("ERROR");
        G.startCurrentInteraction();
        expect(consoleSpy).toHaveBeenCalledWith("you moved the box to the left");
    });




    it("should log a warning if there is no current interaction", () => {
        const G = new GameObject();
        G.abortCurrentInteraction(null);
        expect(consoleerror).toHaveBeenCalledWith("Warning! No current interaction to abort.");
    });
    it("should log aborting message and set currentInteraction to null", () => {
        const G = new GameObject("door");
        G.startInteraction("open/close");
        const currentInteractions = G.abortCurrentInteraction();
        expect(consoleSpy).toHaveBeenCalledWith(`Aborting current interaction: open/close`);
        expect(currentInteractions).toBe(null)
        // expect(gameObject.currentInteraction).toBeNull();
    });
})


//toBe en sak att testa return

