// Setup
const obj1 = {
  panimage: "saurabh",
  bankstatement: "patil",
};

const obj2 = [
  {
    Img_type: "panimage",
    file_type: "image",
  },
  {
    Img_type: "bankstatement",
    file_type: "pdf",
  },
];
// { img : img content,  file type : image, pdf}

var launchOptimistic = obj2.map(function (elem) {
  const type = elem.Img_type;
  return {
    [elem.Img_type]: obj1[`${elem.Img_type}`],
    [elem.file_type]: elem.file_type,
  };
});
console.log(launchOptimistic);





