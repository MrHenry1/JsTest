import Execute from './execute.js'

class Code {
  constructor(element) {
    this.element = element
  }
  runCode(code) {
    try {
      this.element.innerHTML = ""
      
      const send = {js: code}
      const codeApply = Execute(send)
      
      const message = document.createElement("p")
      message.appendChild(document.createTextNode(codeApply))
      
      this.element.appendChild(message)
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
     if(!err) {
       return "Undefined by Execute :)"
     }
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
    this.textArea.value = ""
  }
}


export { TestJs, Code }