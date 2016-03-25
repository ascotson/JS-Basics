function codeLove() {
  return 'I love code';
}

var run = false;

function codeFriend(func) {
  return function() {
    if (!run) {
      run = true;
      return func();
    }
    else {
      return null;
    }
  };
}

codeFriend(codeLove);
