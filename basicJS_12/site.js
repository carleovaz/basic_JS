/*
function comprobarEdad(edad) 
{
  if (edad > 18) 
  {
    return true;
  } else 
  {
    return confirm('¿Te dejan tus padres?');
  }
}
¿Funcionará de forma diferente si quitamos el else?
*/

let edad=prompt("Cual es tu edad?");
edad=comprobarEdad(edad);

function comprobarEdad(edad) 
{
  if (edad > 18) 
  {
    return true;
  }
  return confirm('¿Te dejan tus padres?');
}

//Funciona debido a que no se cumple la primera condición y no devuelve el true.
