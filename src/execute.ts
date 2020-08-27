export default 'init'

import {CodeExec} from './interfaces'

function Execute(private code: CodeExec,private document: CodeExec, private console: CodeExec) {
  const codeApply: string = eval(code.js)
  
  if (!codeApply) {
    throw { message: null }
  }
  
  return codeApply
}

export {Execute}