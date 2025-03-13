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
})


//toBe en sak att testa