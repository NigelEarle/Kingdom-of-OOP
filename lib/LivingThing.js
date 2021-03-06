class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(value) {
    this._uniCellular = value;
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(value) {
    this._uniCellular = !value;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(value) {
    this._trueNucleus = value;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(value) {
    this._trueNucleus = !value;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(value) {
    this._anaerobic = value;
  }

  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic(value) {
    this._anaerobic = !value;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(value) {
    this._asexual = value;
  }

  get sexual() {
    return !this._asexual;
  }

  set sexual(value) {
    this._asexual = !value;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(value) {
    this._mobile = value;
  }

  get immobile() {
    return !this._mobile;
  }

  set immobile(value) {
    this._mobile = !value;
  }
}

export default LivingThing;
