const noop = require('noop')

const d = Object.defineProperty
const gd = Object.getOwnPropertyDescriptor

export function getty(ctr, values) {
  let o = ctr.prototype
  if (o.constructor !== ctr) {
    o = ctr
  }
  const des = {
    get: null,
    set: unwritable,
    configurable: true,
  }
  for (let key in values) {
    des.get = values[key]
    d(o, key, des)
  }
}

export function setty(ctr, values) {
  const o = ctr.prototype
  if (o.constructor !== ctr) {
    o = ctr
  }
  const des = {
    get: null,
    set: null,
    configurable: true,
  }
  for (let key in values) {
    des.get = gd(ctr, key).get || noop
    des.set = values[key]
    d(o, key, des)
  }
}

export function proto(ctr, values) {
  values.constructor = ctr
  ctr.prototype = values
}

function unwritable() {
  throw Error('Property is not writable')
}
