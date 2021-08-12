var obj = {
  name: "saurabh",
  subject: "CS",
};
//direct method to convert
// var arr = Object.entries(obj);

//console.log(arr);

var result = Object.keys(obj).map((Element) => {
  return [Element, obj[Element]];
});
console.log(result);

//////////sorting array of objects
var obj = [
  {
    name: "saurabh",
    rank: 10,
  },
  {
    name: "gaurav",
    rank: 9,
  },
  {
    name: "swapnil",
    rank: 11,
  },
];
var result = obj.sort((a, b) => parseInt(b.rank) - parseInt(a.rank));
console.log(result);
