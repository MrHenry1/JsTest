export default 'init'

import {Infos, CodeExec} from './interfaces'
import {Execute} from './execute'
import {Document, Console} from './redifinitions'

class Code {
  constructor(private element: HTMLElement) {}
  public runCode(code: string): void {
    try {
      this.element.innerHTML = ""
      
      const send: CodeExec = {js: code}
      const codeApply: string = Execute(send, Document, Console)

      const message: HTMLElement = document.createElement("p")
      message.appendChild(document.createTextNode(codeApply))
      
      this.element.appendChild(message)
    }
    catch (err: any) {
      this.errorCode(err.message)
    }
  }

  private loadConsole(value: string) {
    const consoleApply: string = "<span>" + value + "</span>"
    this.element.innerHTML += consoleApply
  }

  private errorCode(err: any): void {
    if(!err) {
      return "Error by Execute :)"
    }
    this.element.innerHTML = "<p class='error'>" + err + "</p>"
  }
}

class TestJs {
  constructor(props: Infos) {
    Object.assign(this, props)

    this.clearAll()
    this.init()
  }

  private init(): void {
    this.form.addEventListener('submit', (e: any) => this.submit(e))
  }

  private submit(e: any) {
    e.preventDefault()

    let value: string = this.textArea.value
    this.Codificator.runCode(value)
  }

  private clearAll(): void {
    this.textArea.value = ""
  }
}

export {TestJs, Code}