
class Code {
  constructor(element) {
    this.element = element
  }
  runCode(code) {
    try {
      this.element.innerHTML = ""
      console.log = (value) => this.loadConsole(value)
      const codeApply = "<p>" + eval(code) + "</p>"
      
      codeApply != "<p>undefined</p>" ? this.element.innerHTML += codeApply : ""
    }
    catch (err) {
      this.errorCode(err.message)
    }
  }
  
  loadConsole(value) {
    const consoleApply = "<span>" + value + "</span>"
    this.element.innerHTML += consoleApply
  }
  
   errorCode(err) {
    this.element.innerHTML = "<p class='error'>" + err + "</p>"
  }
}

class TestJs {
  constructor(props) {
    Object.assign(this, props)
    
    this.clearAll()
    this.init()
  }
  
   init() {
    this.form.addEventListener('submit', (e) => this.submit(e))
  }
  
  submit(e) {
    e.preventDefault()
    
    let value = this.textArea.value
    this.Codificator.runCode(value)
  }
  
   clearAll() {
    textArea.value = ""
  }
}

const textArea = document.querySelector('textarea')
const outputElement = document.querySelector('.compilated')
const form = document.querySelector('form')

const Codificator = new Code(outputElement)

const useInfos = {
  textArea,
  form,
  Codificator
}

const Test = new TestJs(useInfos)

