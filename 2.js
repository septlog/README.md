function cal(year, month, day) {
  let res = 0;
  if (year % 4 == 0 && month > 2) {
    res += 1;
  }
  for (let i = month - 1; i > 0; i--) {
    res += s(i);
  }

  res += day;
  return res;
}

function s(month) {
  switch (month) {
    case 11:
      return 30;
    case 10:
      return 31;
    case 9:
      return 30;
    case 8:
      return 31;
    case 7:
      return 31;
    case 6:
      return 30;
    case 5:
      return 31;
    case 4:
      return 30;
    case 3:
      return 31;
    case 2:
      return 28;
    case 1:
      return 31;
    default:
      break;
  }
}
console.log(cal(2000, 4, 29));
