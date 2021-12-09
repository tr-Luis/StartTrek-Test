PRUEBA TÉCNICA DE CONOCIMIENTOS

Instrucciones

A continuación, encontrarás 1 ejercicio a resolver, el objetivo de la prueba es evaluar el estilo de código y la capacidad para generar soluciones adaptables y mantenibles en el tiempo, así como comprobar el dominio del lenguaje y de técnicas de programación.

Para solucionar el ejercicio de Star Trek puedes elegir usar Java, Javascript o Typescript (Angular 2 o superior). Para este ejercicio no es necesario que sepas de esta franquicia, en la parte final tienes ejemplos de los inputs y sus resultados. En este ejercicio valoraremos también el uso de un diseño responsive.

No deben utilizarse librerías externas, salvo suites de testing o el uso de Bootstrap o similar para el diseño responsive. Valoraremos mucho si además de desarrollar el ejercicio haces uso de TDD (no es obligatorio que escribas pruebas, pero si lo haces nos gustará mucho más tu solución), valoraremos además la limpieza del código y la semántica de los nombres utilizados, así como la estructura de clases.

Se debe incluir un fichero README con el nombre del autor y una explicación tanto del código como de cualquier aspecto relevante, y sobre cómo ejecutar el código y las pruebas (en caso de que escribas pruebas).

​

Star Trek

La Starship Enterprise se dirige al espacio Klingon en una misión secreta. Durante una operación rutinaria, Scotty detecta que el computador que gestiona el motor Warp carece de un sistema de gestión de potencia para los tres inyectores de plasma que regulan la energía del reactor de antimateria, y por tanto, la velocidad de la nave.

Conocedor de la fiereza de los Klingons, decide implementar una aplicación que le ofrezca el mejor balance entre los tres inyectores, teniendo en cuenta que pueden resultar dañados en el combate.

El flujo de plasma al reactor tiene una relación lineal con la velocidad. Para acelerar al 100% de la velocidad de la luz, el reactor de antimateria necesita un flujo de plasma de 300 mg/s (miligramos por segundo). Cada inyector puede inyectar un flujo de 100 mg/s.

Cada inyector puede funcionar al 100% de su capacidad indefinidamente. No obstante, puede funcionar inyectando un flujo de hasta 99 mg/s por encima de su capacidad. Por cada mg/s de flujo por encima de su capacidad, pierde un minuto de funcionamiento, siendo el tiempo de funcionamiento del primer mg/s extra 99 minutos, y el tiempo de funcionamiento con 99 mg/s extras, 1 minuto.

Además, el flujo máximo al que puede funcionar indefinidamente baja en función del daño del inyector: por cada punto de daño, baja un mg/s. Si está dañado al 70%, su flujo máximo indefinido es 30 mg/s. Si está dañado al 32%, el flujo máximo es de 68 mg/s. Un inyector puede seguir inyectando 99 mg/s extras a pesar de estar dañado, así un inyector dañado al 20% puede inyectar 179 mg/s como máximo y funcionar durante 1 minuto. Si un inyector está dañado al 100%, no es utilizable.

Se debe desarrollar un código que permita calcular el flujo de funcionamiento de cada inyector para un porcentaje de la velocidad de la luz deseado, de modo que maximice el tiempo de funcionamiento en una situación de daño dada. Las soluciones no deben contemplar el agotar el tiempo de funcionamiento de cada inyector de forma secuencial.

También, para una situación de daño dada, debe ofrecer la velocidad máxima a la que se puede viajar de forma indefinida.

​

Casos de prueba

Caso 1: DañoA=0%, DañoB=0%, DañoC=0%, Velocidad Luz=100%

Resultado esperado: A=100, B=100, C=100, Tiempo Funcionamiento= Infinito

Caso 2: DañoA=0%, DañoB=0%, DañoC=0%, Velocidad Luz=90%

Resultado esperado: A=90, B=90, C=90, Tiempo Funcionamiento=Infinito

Caso 3: DañoA=0%, DañoB=0%, DañoC=0%, Velocidad Luz=30%

Resultado esperado: A=30, B=30, C=30, Tiempo Funcionamiento=Infinito

Caso 4: DañoA=20%, DañoB=10%, DañoC=0%, Velocidad Luz=100%

Resultado esperado: A=90, B=100, C=110, Tiempo Funcionamiento=90

Caso 5: DañoA=0%, DañoB=0%, DañoC=100%, Velocidad Luz=80%

Resultado esperado: A=120, B=120, C=0, Tiempo Funcionamiento=80

Caso 6: DañoA=0%, DañoB=0%, DañoC=0%, Velocidad Luz=150%

Resultado esperado: A=150, B=150, C=150, Tiempo Funcionamiento=50

Caso 7: DañoA=0%, DañoB=0%, DañoC=30%, Velocidad Luz=140%

Resultado esperado: A=150, B=150, C=120, Tiempo Funcionamiento=50

Caso 8: DañoA=20%, DañoB=50%, DañoC=40%, Velocidad Luz=170%

Resultado esperado: Unable to comply, Tiempo Funcionamiento=0
