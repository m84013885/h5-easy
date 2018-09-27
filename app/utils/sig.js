import md5 from 'md5'
/*
  对象排序拼接成字符串
*/
function sigSortObj (obj) {
  if (!obj) { return '' }
  const arr = []
  let sigString = ''
  for (const key in obj) { arr.push(key) }
  arr.sort()
  for (let i = arr.length - 1; i >= 0; i--) {
    const key = arr[i]
    let tail = '&'
    if (i === 0) { tail = '' }
    sigString = sigString + (key + '=' + obj[key]) + tail
  }
  return sigString
}

/*
  传入1个／2个 json对象，生成签名
*/
function sigFunc (obj1, obj2,str) {
  if (!obj1) { return }
  if(str){
    var salt = str
  }else{
    var salt = 'af8fdcf25f73476296aeb4f3d6c318f3'
  }
  const str1 = sigSortObj(obj1)
  const str2 = sigSortObj(obj2)
  const sigString = str2 + '&' + str1 + '&salt=' + salt
  const sig = md5(sigString)
  return {
    str: str1,
    sig
  }
}
function sigFuncGet (obj1,str) {
  if (!obj1) { return }
  if(str){
    var salt = str
  }else{
    var salt = 'af8fdcf25f73476296aeb4f3d6c318f3'
  }
  const str1 = sigSortObj(obj1)
  const sigString = str1 + '&salt=' + salt
  console.log(sigString)
  const sig = md5(sigString)
  return {
    str: str1,
    sig
  }
}

export  {sigFunc,sigFuncGet}
