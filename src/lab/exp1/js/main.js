var messages = ["Click on the Breaker to pour Water into it..","Click on the FeCl<sub>3</sub> powder to add it to the beaker containing water..","Click on the Glass Rod to stir the FeCl<sub>3</sub> Solution...","Click on the Conical Flask containing Water, to Place it on the Magnetic Stirrer/Heater","Click on the Magnetic Bead to drop it into the Flask...","Switch on the Heater of the Magnetic Stirrer & Heater ...","Switch on the Stirrer of the Magnetic Stirrer & Heater ...","Wait till water starts boiling..","Now that the water gas started boiling, Switch off the Heater...","Click on the pipette to take 10ml conc. FeCl<sub>3</sub> from the beaker....","Click on the pipette again to add the FeCl<sub>3</sub> taken from the beaker, to the hot water in conical flask, drop by drop....","Click on the pipette again to add the FeCl<sub>3</sub> taken from the beaker, to the hot water in conical flask, drop by drop","The colloid is thus obtained.....","The Sol is thus obtained..."];
var messagehandler = document.getElementById("message");
var index=0;
messagehandler.innerHTML = messages[index];
$('#message-container').click(function() {

    changeMessage();
  });
function changeMessage(){
	if(index<13) {
	index=index+1;
	messagehandler.innerHTML = messages[index];
}
}