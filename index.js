// Code your solution here
// 1. Find exact name matches (case insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. Find names that start with the query string (case insensitive)
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// 3. Find drivers by name from objects
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
