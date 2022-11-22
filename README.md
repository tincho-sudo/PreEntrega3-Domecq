# PreEntrega3-Domecq
En el caso de mi comision, no fue necesario implementar node a excepcion del sass, asi que la entrega no contiene .json ni node_modules.

Intente hacer un seteo mas dinamico del content (url) de cada imagen de gallery.html , forzando con un @each que cada li dentro del ul le asigne a sus a->img una ruta (src:url() , o mismo content: url() ) siguiendo un index de cuantos elementos hay en la carpeta resources, habiendo cambiado el nombre de los archivos correspondientes a indexeables (1, 2, 3, 4, etc.), de esta forma no habria que asignar manualmente cada archivo a su correspondiente img, sino que buscaria y asignaria en orden automaticamente (todo esto para forzarme a no usar tanto js), pero no importa cuanto ni que vueltas le di, no hubo caso (y la ruta la mostre en consola por las dudas, estaba encontrando perfectamente el archivo que necesitaba). Llego al punto de que entienda que hay una imagen del tamaño asignado, pero nunca la muestra (intente con :before por las dudas, nada..), asi que tendra que ser asignacion manual por ahora hasta que tenga via libre de js.

No hice un mapa de sitio porque no tengo submenus ni un esquema complicado. En mi caso hubiese sido como copíar la navbar, y no tiene mucho sentido.

No decidi todavia que escribir donde se encuentra cada lorem, si no es necesario poner un texto real entonces mejor.
