class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  
  divCreat() {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.style.cssText = 
      ` height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        fontSize: ${this.fontSize}px;
        text-align: ${this.textAlign};
      `    
  }
}

let divOnPage = new Options(100, 100, 'red', 14, 'center');

divOnPage.divCreat();















