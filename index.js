const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  const newa = {};
  newa[key] = value;
  return Object.assign({}, driver, newa);
}