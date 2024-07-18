export default class Persona {
  constructor(nom, ed, s) {
    this.nombre = nom;
    this.edad = ed;
    this.sexo=s;
  }
  set nombre(nom) {
    this._nombre = nom;
  }
  set edad(ed) {
    this._edad = ed;
  }
  set sexo(s){
    this._sexo = s;
  }
  get nombre() {
    return this._nombre;
  }
  get edad() {
    return this._edad;
  }
  get sexo() {
    return this._sexo;
    }
}
