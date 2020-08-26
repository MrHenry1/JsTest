export default 'init'

interface Infos {
  textArea: HTMLElement
  form: HTMLElement
  Codificator: Code
}

class Code {
  constructor(private element: HTMLElement) {}
  public runCode(code: string): void {
    try {
      this.element.innerHTML = ""
      console.log = (value) => this.loadConsole(value)
      const codeApply: string = "<p>" + eval(code) + "</p>"
      
      codeApply != "<p>undefined</p>" ? this.element.innerHTML += codeApply : ""
    }
    catch (err) {
      this.errorCode(err.message)
    }
  }
  
  private loadConsole(value: string) {
    const consoleApply: string = "<span>" + value + "</span>"
    this.element.innerHTML += consoleApply
  }
  
  private errorCode(err: any): void {
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
    textArea.value = ""
  }
}

const textArea: HTMLElement = document.querySelector('textarea')
const outputElement: HTMLElement = document.querySelector('.compilated')
const form: HTMLElement = document.querySelector('form')

const Codificator: Code = new Code(outputElement)

const useInfos: Infos = {
  textArea,
  form,
  Codificator
}

const Test: TestJs = new TestJs(useInfos)

