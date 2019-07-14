
# Solar System

En una galaxia lejana, existen tres civilizaciones. Vulcanos, Ferengis y Betasoides. Cada
civilización vive en paz en su respectivo planeta.
Dominan la predicción del clima mediante un complejo sistema informático.
A continuación el diagrama del sistema solar.

![enter image description here](https://github.com/goncalveslucasv/solar-system/blob/master/snapshots/1.png?raw=true)

## Premisas:

 - El planeta Ferengi se desplaza con una velocidad angular de 1 grados/día en sentido
horario. Su distancia con respecto al sol es de 500Km.
 - El planeta Betasoide se desplaza con una velocidad angular de 3 grados/día en sentido
horario. Su distancia con respecto al sol es de 2000Km.
 - El planeta Vulcano se desplaza con una velocidad angular de 5 grados/día en sentido
anti­horario, su distancia con respecto al sol es de 1000Km.
 - Todas las órbitas son circulares.

Cuando los tres planetas están alineados entre sí y a su vez alineados con respecto al sol, el
sistema solar experimenta un período de sequía.

![enter image description here](https://github.com/goncalveslucasv/solar-system/blob/master/snapshots/2.png?raw=true)

Cuando los tres planetas no están alineados, forman entre sí un triángulo. Es sabido que en el
momento en el que el sol se encuentra dentro del triángulo, el sistema solar experimenta un
período de lluvia, teniendo éste, un pico de intensidad cuando el perímetro del triángulo está en
su máximo.

![enter image description here](https://github.com/goncalveslucasv/solar-system/blob/master/snapshots/3.png?raw=true)

Las condiciones óptimas de presión y temperatura se dan cuando los tres planetas están
alineados entre sí pero no están alineados con el sol.

![enter image description here](https://github.com/goncalveslucasv/solar-system/blob/master/snapshots/4.png?raw=true)

Realizar un programa informático para poder predecir en los próximos 10 años:
1. ¿Cuántos períodos de sequía habrá?
2. ¿Cuántos períodos de lluvia habrá y qué día será el pico máximo de lluvia?
3. ¿Cuántos períodos de condiciones óptimas de presión y temperatura habrá?

## Resolución

### Correlación lineal
Para calcular la alineación de los planetas entre si y con respecto al sol, la cual se implementa en varias primicias de la aplicación se utiliza el coeficiente de correlación lineal de **Pearson**.
La ecuación retorna un coeficiente el cual indica la dispersión de puntos en una recta, este coeficiente puede ir de -1 a 1, lo que significa que obteniendo el modulo del coeficiente los resultados que se aproximen a 1 indicarán que los puntos introducidos en la ecuación forman una linea recta, cuando se aproximen a 0 indicará que no existe una relación lineal entre los puntos introducidos.

![enter image description here](https://github.com/goncalveslucasv/solar-system/blob/master/snapshots/coefcor.jpg?raw=true)

Si el coeficiente obtenido lo elevamos al cuadrado obtendremos la probabilidad de que los puntos conformen una recta, teniendo el mismo criterio de lectura con respecto al resultado.

### Calcular el punto dentro del triangulo
Para calcular si el sol se encuentra dentro del triangulo se utilizo la siguiente formula

![enter image description here](http://geomalgorithms.com/Area_eqn5b2.gif)

utilizando como referencia el siguiente algoritmo: 
[https://jsfiddle.net/jniac/rctb3gfL/](https://jsfiddle.net/jniac/rctb3gfL/)

<img src="https://github.com/goncalveslucasv/solar-system/blob/master/snapshots/triangle.png?raw=true" width="400" height="400">

### Estructura de datos
![](https://github.com/goncalveslucasv/solar-system/blob/master/snapshots/der.png?raw=true)

## Uso

### Vulcan Api
    http://ec2-18-191-85-111.us-east-2.compute.amazonaws.com:3001/clima/day
    
EJ: http://ec2-18-191-85-111.us-east-2.compute.amazonaws.com:3001/clima/dia/1

### Stack
 - Node v10
 - mysql

Git clone

    git@github.com:goncalveslucasv/solar-system.git

Levantamos el stack

    docker-compose up --build -d


#### Scripts
Calcula los periodos climáticos en 10 años

    yarn run:job
    
Popula la base de datos

    yarn run:job:persist
