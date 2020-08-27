import { document, console } from './redifination.js'

export default function Execute(code) {
  
  const codeApply = eval(code.js)
  
  if (!codeApply) {
    throw {message: null}
  }
  
  return codeApply
}