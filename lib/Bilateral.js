import Animal from './Animal';

class Bilateral extends Animal {
  constructor(name, body) {
    super(name, 'bilateral');
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body(value) {
    this._body = value;
  }
}

export default Bilateral;
