const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  const new = {key:value}
  return Object.assign({}, driver, { key, value});
}