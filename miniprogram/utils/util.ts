

export function sealGenderParam(gender: any) {
  if (['male', 1, '1'].includes(gender)) {
    return 1;
  }

  return 0;
}

function formatDate(date: Date) {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
  return date;
}

/**
 *
 * @param {*} obj
 * @param {*} encode
 * @returns
 */
function objToStr(obj: any, encode = false) {
  let str = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (encode) {
        str += `&${key}=${encodeURIComponent(obj[key])}`;
      } else {
        str += `&${key}=${obj[key]}`;
      }
    }
  }

  return str.slice(1);
}


module.exports = {
  sealGenderParam,
  objToStr,
  formatDate,
};
