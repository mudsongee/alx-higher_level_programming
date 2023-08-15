#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
<<<<<<< HEAD

  print () {
=======
  
	print () {
>>>>>>> 6602de82bb5dccb446b0134e8d0c73023cf1c76d
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
}

module.exports = Rectangle;
