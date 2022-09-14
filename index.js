const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = 0;
// batteryBatches.reduce(((totalBatteries, battery) => {return totalBatteries + battery}), 0)
let totalBatteries = batteryBatches.reduce(((total, battery) => total + battery), 0)