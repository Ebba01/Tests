class GameObject{

    availableInteractions = [];
    currentAvailableActionslist = [];
    currentInteraction = null;


    isOpen = false;

    type = null;
    constructor (typ){
        this.type = typ
        this.setInteractionTypes();
    }

    listInteractionTypes(){
        return this.availableInteractions;
    };


    setInteractionTypes(){
        if(this.type === "door"){
            this.availableInteractions = ["open/close"];
        }
        if(this.type === "box"){
            this.availableInteractions = ["move"];
        }
    };

    startInteraction(InteractionType){
        if(this.availableInteractions.includes(InteractionType)){
            this.currentInteraction = InteractionType;
            this.setCurrentInteractionOptions();
            if(InteractionType === "open/close"){
                console.log("you grabed the handel")
            }
            if (InteractionType === "move") {
                console.log("you start moving the box")
            }
        }
        else {
            console.error("warning! unknown interaction")
        }
    };

    listCurrentInteractionOptions(){
        return this.currentAvailableActionslist;
    };

    setCurrentInteractionOptions(){
        if(this.currentInteraction === "open/close"){
            if(this.isOpen === false){
                this.currentAvailableActionslist = ["open"];

            }
            else{
                this.currentAvailableActionslist = ["close"];
            }
        }
        if (this.currentInteraction === "move"){
                this.currentAvailableActionslist = ["move right", "move left"];
        }
    };

    // Startar en interaktion om den finns i de aktuella alternativen
    startCurrentInteraction(starSetInteraction){
        if(this.currentAvailableActionslist.includes(starSetInteraction)){
            if(starSetInteraction === "close"){
                console.log("you close the door")
                this.isOpen = false;
            }
            if (starSetInteraction === "open") {
                console.log("you open the door")
                this.isOpen = true;
            }
            if (starSetInteraction === "move right") {
                console.log("you moved the box to the right")
            }
            if (starSetInteraction === "move left"){
                console.log("you moved the box to the left")
            }
        }
        else {
            const setinteraction = (`warning! unknown interaction typ: ${this.currentInteraction}`)
            return setinteraction
        }
    };

    // Avbryter den aktuella interaktionen (exempel på abort-funktionalitet)
    abortCurrentInteraction(){
        if (this.currentInteraction === null) {
            console.error("Warning! No current interaction to abort.");
            return;
        }
        else{
            console.log(`Aborting current interaction: ${this.currentInteraction}`);
            return this.currentInteraction = null;
        }

    };
};

module.exports = GameObject;