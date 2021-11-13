/*
Escribe el código que pregunta por un login con prompt.

Si el visitante escribe "Admin", entonces prompt pregunta por la contraseña. Si el input es una línea vacía o Esc, mostrar “Cancelado.”; si es otro string, mostrar “No te conozco”.

La contraseña se comprueba como sigue:

Si es igual a “TheMaster”, entonces muestra “Bienvenido!”,
Otro string, muestra “Contraseña incorrecta”,
Para un string vacío o input cancelado, muestra “Cancelado.”
Usa bloques de if anidados. Piensa en la legibilidad general del código.

Pista: pasando un input vacío a un prompt se devuelve un string vacío ''. Presionando Esc durante un prompt se devuelve null.
*/

let codigo = prompt("¿Quien eres?");
let password= prompt("¿Cual es la contraseña?");
if(codigo=="Admin")
{
    password;
    if(password=="TheMaster")
    {
        alert("Bienvenido");
    }
    else
    {
        alert("Contraseña incorrecta");
    }
}
else if (nombreUsuario == '' || nombreUsuario == null) 
{
    alert('Cancelado');
} 
else 
{
    alert("No te conozco");
}