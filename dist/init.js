import { TestJs, Code } from './index.js'
const textArea = document.querySelector('textarea')
const outputElement = document.querySelector('.compilated')
const form = document.querySelector('form')

const Codificator = new Code(outputElement)

export default Codificator

const useInfos = {
  textArea,
  form,
  Codificator
}

const Test = new TestJs(useInfos)
