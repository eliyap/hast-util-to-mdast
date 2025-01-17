/**
 * @typedef {import('../types.js').Handle} Handle
 * @typedef {import('../types.js').Element} Element
 * @typedef {import('../types.js').MdastNode} MdastNode
 */

import {all} from '../all.js'

/**
 * @type {Handle}
 * @param {Element} node
 */
export function q(h, node) {
  var expected = h.quotes[h.qNesting % h.quotes.length]
  /** @type {Array.<MdastNode>} */
  var contents

  h.qNesting++
  contents = all(h, node)
  h.qNesting--

  contents.unshift({type: 'text', value: expected.charAt(0)})

  contents.push({
    type: 'text',
    value: expected.length > 1 ? expected.charAt(1) : expected
  })

  return contents
}
