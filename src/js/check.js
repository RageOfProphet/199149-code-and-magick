function getMessage (a, b) {
  if (typeof a === 'boolean') {
    if (a) {
      return 'Я попал в ' + b;
    } else {
      return 'Я никуда не попал';
    }
  } else if (typeof a === 'number') {
    return 'Я прыгнул на ' + (a * 100) + ' сантиметров';
  } else if (Array.isArray(a) && !(b instanceof Array)) {
    var numberOfSteps = 0
    for (var i = 0; i < a.length; i++) {
      numberOfSteps =+ a[i]
    }
    return 'Я прошел ' + numberOfSteps + ' шагов'
  } else if (Array.isArray(a) && Array.isArray(b)) {
    var distancePath = 0
    var Composition = 0
    for (var i = 0; i < a.length; i++) {
      Composition = a[i] * b[i]
      distancePath =+ Composition
    }
    return 'Я прошел ' + distancePath + ' метров';
  } else {
    return 'Переданы некорректные данные';
  }
}
