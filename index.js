function test(name) {
  let output = "Hello" + name + "...!";
  return function () {
    console.log(output);
  };
}

test(" 자바스크립트 ")();
