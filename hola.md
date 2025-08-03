# Hola.

For this first contribution, I did the following:

- Actualicé mi fork para estar al día con su repositorio
- Responder a sus comentarios en en el html y js
- Eliminar cosas innecesarias que yo había puesto en el html, para un código más eficiente
- Trabajar en js para intentar la validación en línea
- Cambié las clases por id, por un tema de poder trabajar con esto más adelante de ser necesario, pero se pueden quitar los id que no se están usando actualmente en el js


## Cambios importante

- Cambié los span por details en los input radio [Concept, Structure, Details, Technique] en el html, así se reduje el uso de js y se hace más accesible y semántico todo. Esto implica tener que acomodar la lista de inputs en otro orden o trabajar en su estilado para que no haya problemas.
- En el js tuve que agregar varios disparadores de eventos sintéticos, primero para poder obtener la validación/output en línea, y segundo para que cada vez que se abre/cierra un details se tome un valor, ya que el estilado actual elimina el círculo de selección que tiene nativamente cada input radio, lo que hace imposible para la persona usuaria elegir un valor, lo que hace que el js no pueda funcionar. Esto de que los input radio no tengan una forma clara de seleccionarse es una mala práctica. Deben poderse seleccionar fácil y claramente
- En el html agregué una opción más a los select, para lograr que la persona usuaria tenga que seleccionar una opción, y así poder tomar un valor para lo de la validación/output en línea
- reduje el scope del form que define el output. Los forms son para tomar información, no mostrarla. La pregunta de que si fue útil el output debe ser otro formulario, que también lo agregué 