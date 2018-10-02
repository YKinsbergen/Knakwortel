const jwtData = jwt => {
  var base64Url = jwt.split('.')[1]
  var base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

export const userId = jwt => jwtData(jwt).id

export const isExpired = jwt => jwtData(jwt).exp < (Date.now()/1000)
