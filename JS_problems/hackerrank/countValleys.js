// Sample Input
// 8
// UDDDUDUU
// Sample Output
// 1
// D - downhill, U - uphill. sealevel - 0
function countingValleys(steps, path) {
  let units = 0; // sea level
  let valleyCount = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      units++;
      if (units === 0) {
        valleyCount++;
      }
    }
    if (path[i] === "D") {
      units--;
    }
  }

  return valleyCount;
}

console.log(" result =  ", countingValleys(8, "UDDDUDUU"));
