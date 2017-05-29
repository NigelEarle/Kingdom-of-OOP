import LivingThing from './LivingThing';

class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph) {
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(value) {
    this._heterotroph = value;
  }

  get autotroph() {
    return !this._heterotroph;
  }

  set autotroph(value) {
    this._heterotroph = !value
  }
}

export default Eukaryota;
