export default class TodoPersona {
    constructor(){
        this.contPersona=0;
        this.acumEdad=0;
        this.MayorEdadFem=0;
    }
    procesarPersona(per){
        this.contPersona++;
        this.acumEdad+=per.edad;
        if(per.edad>this.MayorEdadFem && per.sexo=="F"){
            this.MayorEdadFem=per.edad;
            }  
    }
    calcPromedio(){
        return this.acumEdad/this.contPersona;
    }
    devolverEdadMayorFem(){
        return this.MayorEdadFem;
    }
}