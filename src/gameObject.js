class GameObject{

    listInteractionTypes(){
        const listInteraction = ["look", "open"];
        return listInteraction;
    };

    startInteraction(InteractionType){
        if(InteractionType === "look"){
            console.log("you looked closely")
        }
        else if (InteractionType === "open") {
            console.log("you open the box.")
        }
        else {
            console.error("warning! unknown interaction")
        }
    };



    listCurrentInteractionOptions(theOptions){
        if(theOptions === "you are in front of Hendricks door"){
            const listOfcurrentinteractions = ["look", "open", "inspect"];
            return listOfcurrentinteractions;
        }
        else if(theOptions === "you are standing in front of a mirror" ){
            const listOfcurrentinteractions = ["lift", "look closely"];
            return  listOfcurrentinteractions;
        }
    };

    setCurrentInteractionOptions(theInteractionType){
        if(theInteractionType === "look"){
            const setinteraction = "you looked at the carvings on the door"
            return setinteraction
        }
        else if (theInteractionType === "open") {
            const setinteraction = ("you open the door")
            return setinteraction
        }
        else if (theInteractionType === "inspect") {
            const setinteraction = ("you inspect Hendricks door closely")
            return setinteraction
        }
        else if (theInteractionType === "lift"){
            const setinteraction = ("you lifted the mirror of the huck")
            return setinteraction
        }
        else if (theInteractionType === "look closely"){
            const setinteraction = ("you look closely at the details on the mirror")
            return setinteraction
        }
        else {
            const setinteraction = ("warning! unknown interaction typ")
            return setinteraction
        }
    };

    // Startar en interaktion om den finns i de aktuella alternativen
    startCurrentInteraction(starSetInteraction){
        // if (!this.currentInteractionOptions.includes(interactionType)) {
        //     console.error("Warning! The interaction is not available.");
        //     return;
        // }
        if (starSetInteraction === "look") {
            console.log("you looked at the carvings on the door");
        } else if (starSetInteraction === "open") {
            console.log("you open the door");
        } else if ( starSetInteraction === "inspect") {
            console.log("you inspect Hendricks door closely");
        } else if (starSetInteraction === "lift") {
            console.log("you lift the mirror of the huck");
        } else if (starSetInteraction === "look closely") {
            console.log("you look closely at the details on the mirror");
        } else {
            console.error("warning! unknown interaction");
        }
    };

    // Avbryter den aktuella interaktionen (exempel på abort-funktionalitet)
    abortCurrentInteraction(currentInteraction){
        if (currentInteraction === null) {
        console.error("Warning! No current interaction to abort.");
        return;
        }
        else{
            console.log(`Aborting current interaction: ${currentInteraction}`);
            return currentInteraction = null;
        }

    };
};

module.exports = GameObject;



// class GameObject {
//     constructor() {
//     // Initiera med en tom lista av aktuella interaktioner
//     this.currentInteractionOptions = [];
//     }

//     // Returnerar den fullständiga listan av möjliga interaktioner
//     listInteractionTypes = () => {
//     return ["look", "open"];
//     };

//     // Returnerar de aktuella interaktionsalternativen
//     listCurrentInteractionOptions = () => {
//     return this.currentInteractionOptions;
//     };

//     // Uppdaterar de aktuella interaktionsalternativen baserat på scenario och returnerar dem
//     setCurrentInteractionOptions = (scenario) => {
//     if (scenario === "you are in front of Hendricks door") {
//         this.currentInteractionOptions = ["open", "inspect"];
//     } else if (scenario === "you are standing in front of a mirror") {
//         this.currentInteractionOptions = ["lift", "look closely"];
//     } else {
//         console.error("Unknown scenario");
//         this.currentInteractionOptions = [];
//     }
//     return this.currentInteractionOptions;
//     };

//     // Startar en interaktion om den finns i de aktuella alternativen
//     startInteraction = (interactionType) => {
//     if (!this.currentInteractionOptions.includes(interactionType)) {
//         console.error("Warning! The interaction is not available.");
//         return;
//     }

//     if (interactionType === "look") {
//         console.log("you looked closely");
//     } else if (interactionType === "open") {
//         console.log("you open the box.");
//     } else if (interactionType === "inspect") {
//         console.log("you inspect Hendricks door closely");
//     } else if (interactionType === "lift") {
//         console.log("you lift the mirror");
//     } else if (interactionType === "look closely") {
//         console.log("you look closely at yourself in the mirror");
//     } else {
//         console.error("warning! unknown interaction");
//     }
//     };
// }

// module.exports = GameObject;
