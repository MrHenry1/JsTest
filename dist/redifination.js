import Codificator from './init.js'

const document = {}
const console = {
  log: (value) => {
    Codificator.loadConsole(value)
  }
}

export { document, console }