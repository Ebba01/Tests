class GameObject{

    listInteractionTypes(){
        const listInteraction = ["look", "open"];
        return listInteraction;
    };

    startInteraction(theInteractionType){
        if(theInteractionType === "look"){
            console.log("you looked closely")
        }
        else if (theInteractionType === "open") {
            console.log("you open the box.")
        }
        else {
            console.error("warning! unknown interaction")
        }
    };

    listCurrentIneractionOptions(){};
    setCurrentInteractionOptions(theOptions){};



};
module.exports = GameObject;