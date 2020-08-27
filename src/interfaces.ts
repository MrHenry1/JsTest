export default 'init'

import {Code} from './classes'

interface Infos {
  textArea: HTMLElement
  form: HTMLElement
  Codificator: Code
}

interface Console {
  log(value: string): void
}

interface CodeExec {
  js?: string,
  document?: object,
  console?: Console
}

export {Infos, CodeExec}