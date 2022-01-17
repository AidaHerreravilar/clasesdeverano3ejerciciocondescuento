let Precio Inicial : number = dato1.value;
let montoConDescuento : number = 0;
let descuento : number = 0;
let precioTotal : number = monto * cantidad;
let mes : number = dato3.value;
if (mes == "Enero 2022") {
descuento = (precioTotal*10)/100
montoConDescuento = precioTotal - descuento;
console.log("En supermercado Aida Ud tiene un 10% de
descuento");
console.log("El monto a pagar es: " + montoConDescuento);
} else {
console.log("El monto a pagar es: " +
precioTotal);
}





