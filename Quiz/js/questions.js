// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Los filósofos se preguntan si la realidad puede ser conocida, hasta qué punto y con qué medios. La Filosofía se nutre de la actividad científica, reformula sus problemas, investiga de qué manera se plantean los problemas de las ciencias y el tipo de respuesta que se propone para la solución. Así, la Filosofía...",
    answer: "busca explicaciones a interrogantes sobre fenómenos que la naturaleza y la vida, le presenta.",
    options: [
      "propone que el afán por investigar nos relaciona con nuestra vida cotidiana.",
      "afirma que todos los seres humanos hacemos investigación frecuentemente.",
      "considera que todas las actividades del hombre pueden llamarse investigación o ciencia.",
      "busca explicaciones a interrogantes sobre fenómenos que la naturaleza y la vida, le presenta."
    ]
  },
    {
    numb: 2,
    question: "Las investigaciones sobre el conocimiento (de cualquier forma que se entiendan estas: científica y filosófica) tienen que enfrentarse desde el principio con opciones de carácter estrictamente filosófico. Sin embargo, el modelo válido por las ciencias es el conocimiento científico. De esto, se deduce que lo que caracteriza dichos conocimientos...",
    answer: "es la experiencia y la razón.",
    options: [
      "es la experiencia y la razón.",
      "es la investigación científica.",
      "son las percepciones y representaciones.",
      "son las verdades absolutas comprobadas."
    ]
  },
    {
    numb: 3,
    question: "Una población de bacterias se duplica cada 20 minutos, al iniciar el experimento hay 5.000 bacterias. El tiempo transcurrido para que el número de bacterias sea de 80.000 es: ",
    answer: "1 hora y 20 minutos.",
    options: [
      "1 hora y 20 minutos.",
      "1 hora y 40 minutos.",
      "2 horas y 20 minutos.",
      "2 horas y 40 minutos."
    ]
  },
//    {
//    numb: 4,
//    question: "La probabilidad de que ocurra un evento específico como resultado de un experimento aleatorio es un número comprendido entre 0 y 1. Se le asigna 0 si el evento es imposible y 1 si el evento con seguridad ocurre. Al lanzar un dado sobre una mesa, la probabilidad de que, en la cara superior, salga un número par mayor que 3 es",
//    answer: "2/6, porque hay dos números mayores que 3 que son pares.",
//    options: [
//      "2/6, porque hay dos números mayores que 3 que son pares.",
//      "1/6, porque hay un número mayor que 3 que es par.",
//      "2/3, porque de los tres números mayores que 3 hay dos pares.",
//      "1/3, porque de los tres números mayores que 3 uno es par."
//    ]
//  },

  {
    numb: 4,
    question: 'De las siguientes gráficas, la que NO corresponde a una función es: <img src="../img/Quiz/1.png" alt="Graficas" width="450" height="400">',
    answer: "B",
    options: [
      "A",
      "B",
      "C",
      "D"
    ]
  },


    {
    numb: 5,
    question: "La ley de la utilidad marginal decreciente, centra su análisis en explicaciones psicológicas en torno al consumidor. Así, el consumo de un bien cualquiera equivaldría a 20, pero si se consumen dos bienes de la misma naturaleza, la utilidad equivaldría a 30, y si se consumen tres bienes de la misma naturaleza, su utilidad sería de 35. Esto quiere decir que:",
    answer: "el consumo de cada unidad adicional de un bien genera la disminución de la utilidad.",
    options: [
      "la saturación del consumo de un bien, modifica la oferta de un producto y por tanto su precio.",
      "en las condiciones marginales de mercado, el precio decrece por debajo de los costos de producción.",
      "la variación marginal de los precios disminuye la utilidad por las condiciones del mercado laboral.",
      "el consumo de cada unidad adicional de un bien genera la disminución de la utilidad."
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  {
    numb: 6,
    question: "En febrero de 2012 la guerrilla de las FARC atacó con cilindros bomba la estación de policía del municipio de Villa Rica en el departamento del Cauca, dejando 5 civiles muertos, entre ellos dos menores de edad. La justificación de las FARC a las muertes civiles en el marco del conflicto armado, como hechos colaterales, es respondida por el gobierno desde la vía jurídica diciendo que:",
    answer: "existen normas internacionales y nacionales que condenan los asesinatos a la población civil. ",
    options: [
      "los ataques terroristas son juzgados como delitos bajo la justicia transicional ajustada a la Constitución.",
      "el derecho penal sugiere en situaciones de guerra proteger a la población civil.",
      "existen normas internacionales y nacionales que condenan los asesinatos a la población civil. ",
      "las formas de violencia a los civiles son cubiertas en el derecho ordinario colombiano."
    ]
  },

 // {
 //   numb: 7,
 //   question: "Un estudiante pretende analizar algunas de las propiedades de dos elementos químicos: el sodio (Na) periodo: 3, grupo: I A o 1 y, el cloro (Cl) periodo: 3, grupo: VII A o 17. Se da cuenta que a pesar de que ambos se encuentran ubicados en el tercer periodo de la tabla periódica su electronegatividad es muy diferente, esto se debe a que esta propiedad",
 //   answer: "aumenta de izquierda a derecha en la tabla periódica.",
 //   options: [
 //     "aumenta de izquierda a derecha en la tabla periódica.",
 //     "aumenta de arriba hacia abajo en la tabla periódica.",
 //     "disminuye de izquierda a derecha en la tabla periódica.",
 //     "disminuye de arriba hacia abajo en la tabla periódica."
 //   ]
 // },
  {
    numb: 7,
    question: 'Un docente pregunta a sus estudiantes por el método más adecuado para utilizar en el laboratorio de separación de mezclas si el objetivo es separar una disolución de sal en agua. De manera correcta sus estudiantes le contestan que el método a utilizar es: <img src="../img/Quiz/2.png" alt="Graficas" width="520" height="200">',
    answer: "C",
    options: [
      "A",
      "B",
      "C",
      "D"
    ]
  },


  {
    numb: 8,
    question: "Una práctica de laboratorio de Física para un grupo de estudiantes lleva como título “Verificación de las características del movimiento uniformemente acelerado”. Una de las posibles conclusiones que se debe reportar en el informe de la práctica es:",
    answer: "“El cuerpo tiene un movimiento uniformemente acelerado porque recorre distancias diferentes en intervalos de tiempo iguales”.",
    options: [
      "“El cuerpo tiene un movimiento uniformemente acelerado porque recorre distancias iguales en intervalos de tiempo iguales”.",
      "“El cuerpo tiene un movimiento uniformemente acelerado porque recorre distancias diferentes en intervalos de tiempo iguales”.",
      "“Al aumentar la masa de un cuerpo, aumenta su velocidad”.",
      "“La variación de la energía cinética del cuerpo entre dos puntos es nulo”."
    ]
  },

  {
    numb: 9,
    question: "Hello! Can I talk to George, please?",
    answer: "Hi. He isn’t here yet, but I can take the message.",
    options: [
      "Hi. He isn’t here yet, but I can take the message.",
      "George is Maritza’s brother; he is very kind with me.",
      "Talk to him, but don’t tell him I told you those things.",
      "Yes, it came in the mail yesterday morning."
    ]
  },

  {
    numb: 10,
    question: "Are you from around here?",
    answer: "Yes, but I live abroad.",
    options: [
      "No, I don’t like it much",
      "Oh yes, I feel nervous.",
      "Yes, but I live abroad.",
      "What a trouble!"
    ]
  },

];