export default 'init'

import {Infos} from './interfaces'
import {TestJs, Code} from './classes'


const textArea: HTMLElement = document.querySelector('textarea')
const outputElement: HTMLElement = document.querySelector('.compilated')
const form: HTMLElement = document.querySelector('form')

const Codificator: Code = new Code(outputElement)
export {Codificator}

const useInfos: Infos = {
  textArea,
  form,
  Codificator
}

const Test: TestJs = new TestJs(useInfos)