const number = await new Promise((myResolveFunction) => {
  console.log("doing work");
  myResolveFunction(500);  // before - return 500;
});

console.log(number);
