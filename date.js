exports.getDate= function getDate(){

const today = new Date();

const options ={
  weekday : "long",
  day: "numeric",
  month: "long"
};

// const day =today.toLocaleDateString("hi-IN")
return day= today.toLocaleDateString("en-US",options);

}

exports.getDay= function getDay(){

const today = new Date();

const options ={
  weekday : "long",
};

// const day =today.toLocaleDateString("hi-IN")
return day= today.toLocaleDateString("en-US",options);

}
