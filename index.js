const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = {};
  newDriver.assign(driver, key, value);

  return newDriver;
}