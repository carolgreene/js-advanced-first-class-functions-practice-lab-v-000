// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location) {
  drivers.foreach(function(driver) {
    if(driver.hometown === location)
    console.log(driver.name)
  })
}
