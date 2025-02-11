![image](https://github.com/user-attachments/assets/26fe42f1-61ff-4f74-ac9a-d95464bc892f)
color-disabled: #C4C4C4 //En ausencia de nombre en la caja de "Agregar nombres" sea gris el boton de anadir.
color-active: #4CAF50 // //Modificación del CSS para que al introducir un nombre en la caja de "agregar un nombre" se ponga verde el boton de anadir.

// Función para sortear un amigo al azar y eliminarlo de la lista
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<p>❌ No hay amigos en la lista para sortear.</p>";
        return;
    }
(imagen indicando el listado de amigo con el boton en gris ya que no hay nombre en la caja de 'agregar nombre')
![image](https://github.com/user-attachments/assets/dfc80825-3e34-4acc-8e07-35bd8cb29bc6)

(Imagen indica que al escribir un nombre el boton "añadir" se pone en verde)
![image](https://github.com/user-attachments/assets/a6e37119-24e2-4ed5-8483-378604a1a0dc)

Al sortear el amigo, ya no se ve listado, asi no se repite
![image](https://github.com/user-attachments/assets/2ef72568-4fc3-402e-b270-c35af9648d14)
