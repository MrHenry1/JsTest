export default 'init'

import {Codificator} from './app'

const Document = {}
const Console = {
  log: (value): void => Codificator.loadConsole(value)
}

export {Document, Console}