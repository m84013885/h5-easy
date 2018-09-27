import Cookies from 'js-cookie'
import Device from './config'
/*
  获取相关参数
  sys - 系统版本号
  net - 网络情况（wifi/no_wifi 等）
  chn - 渠道标志（web的渠道标志全部以web开头，如web_remix）
  web - 标志web请求（取值2）
  ts - 时间戳（13位毫秒数）
*/

function Mustparameter () {
  let defaultChn = 'touch_remix'
  if (!Device.app !== 2) {
    defaultChn = 'h5_remix'
  }
  // 非微信里面不需要
  const ua = navigator.userAgent.toLowerCase()
  const net = 'wifi'
  let sys = 'web'
  // let nowChn = $.getUrlParam('chn') || null
  const chn = Cookies.get('chn', { domain: 'app-remix.com' }) || defaultChn
  if (ua.indexOf('android')) { sys = 'android' }
  else { sys = 'ios' }
  return {
    // sys,
    web: 2,
    ts: new Date().getTime(),
    net,
    chn
  }
}

export default Mustparameter
