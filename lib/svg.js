class SVG {
    constructor() {
      this.textElement = "";
      this.shapeElement = "";
      this.textColor = "black"; // Default text color
    }
  
    render() {
      if (!this.textElement || !this.shapeElement) {
        throw new Error("Both text and shape must be set before rendering.");
      }
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }
  
    setShape(shape) {
      this.shapeElement = shape.render();
    }
  
    setText(message, color = "black") {
      if (message.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
  }
  
  module.exports = SVG;
  