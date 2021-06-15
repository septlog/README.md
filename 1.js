function trans(x) {
  let res = '';
  if (x.startsWith('0x')) {
    for (let i = 2; i < x.length; i++) {
      switch (x[i]) {
        case '0':
          res += '0000';
          break;
        case '1':
          res += '0001';
          break;
        case '2':
          res += '0010';
          break;
        case '3':
          res += '0011';
          break;
        case '4':
          res += '0100';
          break;
        case '5':
          res += '0101';
          break;
        case '6':
          res += '0110';
          break;
        case '7':
          res += '0111';
          break;
        case '8':
          res += '1000';
          break;
        case '9':
          res += '1001';
          break;
        case 'a':
          res += '1010';
          break;
        case 'b':
          res += '1011';
          break;
        case 'c':
          res += '1100';
          break;
        case 'd':
          res += '1101';
          break;
        case 'e':
          res += '1110';
          break;
        case 'f':
          res += '1111';
          break;
        default:
          break;
      }
    }
    return parseInt(res).toString();
  }
  if (x.startsWith('b')) {
    let s = x.substr(1, x.length - 1);
    let i = s.length % 4;
    var parts = i ? [s.substr(0, i)] : [];
    for (; i < s.length; i += 4) {
      parts.push(s.substr(i, 4));
    }

    for (let i = 0; i < parts.length; i++) {
      let xx = parseInt(parts[i]).toString();
      switch (xx) {
        case '1':
          res += '1';
          break;
        case '10':
          res += '2';
          break;
        case '11':
          res += '3';
          break;
        case '100':
          res += '4';
          break;
        case '101':
          res += '5';
          break;
        case '110':
          res += '6';
          break;
        case '111':
          res += '7';
          break;
        case '1000':
          res += '8';
          break;
        case '1001':
          res += '9';
          break;
        case '1010':
          res += 'a';
          break;
        case '1011':
          res += 'b';
          break;
        case '1100':
          res += 'c';
          break;
        case '1101':
          res += 'd';
          break;
        case '1110':
          res += 'e';
          break;
        case '1111':
          res += 'f';
          break;
        default:
          break;
      }
    }
    return res;
  }
}

console.log(trans(process.argv[2].toLowerCase()));
