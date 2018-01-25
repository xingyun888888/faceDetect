/**
 * Created by gaochao on 1/19/18.
 */



/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */

export function parseParam(data:any){
  let url="";
  if(typeof(data) == 'undefined' || data == null || typeof(data) != 'object') {
    return '';
  }
  url += (url.indexOf("?") != -1) ? "" : "?";
  for(var k in data) {
    url += ((url.indexOf("=") != -1) ? "&" : "") + k + "=" + encodeURI((data[k]?data[k]:""));
    console.log(url);
  }
  return url;
}


