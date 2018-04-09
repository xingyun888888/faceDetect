/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 * return URL参数字符串
 */

export function parseParam(data: any) {
  let url = '';
  if (typeof(data) == 'undefined' || data == null || typeof(data) != 'object') {
    return '';
  }
  url += (url.indexOf('?') != -1) ? '' : '?';
  for (var k in data) {
    url += ((url.indexOf('=') != -1) ? '&' : '') + k + '=' + encodeURI((data[k] ? data[k] : ''));
    console.log(url);
  }
  return url;
}

/**根据路径获取文件名**/
export function getFileName(path: string) {
 // return path.match(/[\u4e00-\u9fa5_a-zA-Z0-9:]+[\\\/]?([\w_]+\.\w+)$/i)[1];
   return path.match(/[\u4e00-\u9fa5_a-zA-Z0-9:]?[\\\/]?([\u4e00-\u9fa5_a-zA-Z0-9:]+\.\w+)$/i)[1];
}

/**
 * 日期的转换函数
 */

export function dateFormat(date: any, fmt: any) {
  var o = {
    'M+': date.getMonth() + 1,                 //月份
    'd+': date.getDate(),                    //日
    'h+': date.getHours(),                   //小时
    'm+': date.getMinutes(),                 //分
    's+': date.getSeconds(),                 //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    'S': date.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
}
