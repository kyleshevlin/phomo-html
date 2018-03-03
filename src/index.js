// @codegen
import { h } from 'phomo'
import tags from 'html-tags'

module.exports = tags
  .filter(tag => tag !== 'var')
  .map(tag => `export const ${tag} = ${h(tag)}`)
  .join('\n')

