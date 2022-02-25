class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombre=createElement("h3");
        this.input=createInput();
        this.button=createButton("enviar");
    } 
    display(){
        this.title.html("mi base de datos");
        this.title.position(130,0);
        this.nombre.html("ingresa tu nombre");
        this.nombre.position(130,100);
        this.input.position(130,160);
        this.button.position(250,200);
    }
}