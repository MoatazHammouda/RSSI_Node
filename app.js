var noble = require("noble");
var counter = 0;

noble.on('stateChange', function(state) {
	if (state === 'poweredOn'){
		noble.startScanning();
	} else {
		noble.stopScanning();
	}
});

noble.on('discover', function(peripheral) {
	//console.log(peripheral.rssi + ':' + peripheral.advertisement.localName)
	if (peripheral.advertisement.localName === "MetaWear"){
	console.log('Name: '+ peripheral.address); console.log('RSSI:' + peripheral.rssi);
	count = count + 1;
	if (count==2){
	process.exit(10);}}
});
