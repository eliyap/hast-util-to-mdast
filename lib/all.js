/**
 * @typedef {import('./types.js').H} H
 * @typedef {import('./types.js').Node} Node
 * @typedef {import('./types.js').Parent} Parent
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').MdastNode} MdastNode
 */

import {one} from './one.js'

/**
 * @param {H} h
 * @param {Node} parent
 * @returns {Array.<MdastNode>}
 */
export function all(h, parent) {
  /** @type {Array.<Node>} */
  // @ts-ignore Assume `parent` is a parent.
  var nodes = parent.children || []
  /** @type {Array.<MdastNode>} */
  var values = []
  var index = -1
  /** @type {MdastNode|Array.<MdastNode>} */
  var result

  while (++index < nodes.length) {
    // @ts-ignore assume `parent` is a parent.
    result = one(h, nodes[index], parent)

    if (result) {
      values = values.concat(result)
    }
  }

  return values
}
