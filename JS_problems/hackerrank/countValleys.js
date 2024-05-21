// Sample Input
// 8
// UDDDUDUU
// Sample Output
// 1
// D - downhill, U - uphill. sealevel - 0

function countingValleys(steps, path) {
  // Write your code here
  let units = 0; // sea level
  let started = false;
  //   let ended = false;
  let valleyCount = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      if (units === 0 && started) {
        started = false;
        valleyCount++;
      }
      units++;
    }
    if (path[i] === "D") {
      if (units === 0 && !started) {
        started = true;
      }
      units--;
    }
  }

  return valleyCount;
}

console.log(" data ", countingValleys(12, "DDUUDDUDUUUD"));
