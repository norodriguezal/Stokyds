import { Story, Comic, Game, Audiobook } from './types';
import ParejasLiterarias from './components/ParejasLiterarias';
import PalabraFaltante from './components/PalabraFaltante';
import SimonDePalabras from './components/SimonDePalabras';
import ConectorLogico from './components/ConectorLogico';
import SinonimosAntonimos from './components/SinonimosAntonimos';
import OrdenaLaHistoria from './components/OrdenaLaHistoria';


export const stories: Story[] = [
    {
        id: '1',
        title: { es: 'La Leyenda de los Hermanos Ayar', en: '', qu: '' },
        author: { es: 'Tradición Andina', en: '', qu: '' },
        cover: 'https://i.imgur.com/fmVVSA4.png',
        content: {
            es: `Hace mucho, mucho tiempo, después de que un gran diluvio cubriera la tierra y borrara todo lo conocido, el Dios Sol (Inti) sintió compasión por el mundo y decidió enviar a sus hijos a repoblarlo.
Desde la cima del Cerro Tamputoco, en la región de Pacaritambo, salieron cuatro hermanos y sus cuatro esposas. Ellos eran los Hermanos Ayar: Ayar Manco y Mama Ocllo, Ayar Cachi y Mama Cora, Ayar Uchu y Mama Rahua, Ayar Auca y Mama Huaco
Inti les dio una misión sagrada: encontrar el lugar perfecto para fundar una gran ciudad que lo adorara a él como su Dios principal. Para guiar su camino, Inti les entregó un objeto mágico: un bastón de oro. La señal sería clara: donde el bastón se hundiera completamente en la tierra con un solo golpe, ese sería el lugar elegido.
Los ocho parientes iniciaron la travesía. Ayar Cachi, el más fuerte y valiente, era también el más impulsivo y arrogante. Su fuerza era tan grande que con un solo tiro de su honda podía derribar montañas y crear valles. Sus hermanos, temiendo que su temperamento y poder arruinaran la misión divina, idearon un plan para deshacerse de él.
Con un engaño, lo enviaron de regreso a la cueva de Tamputoco a buscar provisiones que supuestamente habían olvidado. Cuando Ayar Cachi entró en la cueva, sus hermanos taparon la entrada con una enorme roca, atrapándolo. Lleno de furia, Ayar Cachi gritó con tanta rabia que la tierra tembló, pero ya era tarde. Así, el hermano poderoso quedó convertido en piedra en el interior de la montaña.
El viaje continuó, lleno de tristeza y desafíos. Llegaron a un valle sagrado llamado Huanacauri. Allí, Ayar Uchu decidió quedarse, observando el cielo y la tierra. De pronto, fue transformado en una roca sagrada, un huaca, para velar por el camino de sus hermanos y ser una señal para ellos.
Los dos hermanos restantes, Ayar Manco y Ayar Auca, siguieron su camino. Al llegar al cerro Anahuarque, Ayar Auca desarrolló unas alas y, como le había ordenado su padre Inti, voló hacia el valle del Cusco. Al tocar la tierra, Ayar Auca también fue convertido en piedra, pero su sacrificio marcó el lugar exacto donde debía fundarse el imperio.
Finalmente, Ayar Manco y las mujeres llegaron al valle. Ayar Manco tomó el bastón de oro, y al hundirlo, la tierra lo absorbió con facilidad. ¡Habían encontrado el lugar prometido! Llenos de alegría, Ayar Manco y Mama Ocllo fundaron la ciudad, enseñando a los habitantes a cultivar la tierra y a tejer.
Desde ese momento, Ayar Manco tomó el nombre de Manco Cápac, convirtiéndose en el primer Inca y fundador del glorioso Imperio del Tahuantinsuyo. Los incas siempre recordarían que su origen estaba ligado a la luz del Sol y a la valentía de los cuatro hermanos que buscaron la tierra prometida.`,
            en: '',
            qu: ''
        },
        illustrations: [],
        audioSrc: 'https://drive.google.com/uc?export=download&id=1x3FFLZNpdBBN_F6IsgbFHiMhaM4ZG8EW',
        audioDuration: '6:20'
    },
    {
        id: '2',
        title: { es: 'El Zorro y el Cuy', en: '', qu: '' },
        author: { es: 'Tradición Andina', en: '', qu: '' },
        cover: 'https://i.imgur.com/CtMTKPL.png',
        content: {
            es: `En las altas y frías punas de los Andes, el zorro, conocido como Atoq, se consideraba el animal más inteligente y veloz. Por su parte, el pequeño cuy (conejillo de indias) era visto como una criatura simple y fácil de atrapar. Pero la apariencia, en el mundo andino, a menudo es un engaño.
Una mañana, el zorro Atoq, hambriento como siempre, descubrió un campo de papas frescas y tiernas, justo el alimento favorito del cuy. Atoq ideó un plan: se escondería y esperaría a que algún cuy tonto cayera en su trampa.
Al poco tiempo, el pequeño y rechoncho cuy se acercó al campo. El zorro saltó y, de un solo manotazo, lo atrapó.
—¡Ja, ja, ja! —se rió Atoq—. ¡Hoy tendré un sabroso banquete, cuy! Nadie puede escapar de mi astucia.
El cuy, sin perder la calma, miró al zorro con una expresión de gran seriedad.
—Qué pena, señor Atoq —dijo el cuy, suspirando—. Me va a comer justo ahora que acabo de hacer un gran descubrimiento.
El zorro, cuya curiosidad era tan grande como su apetito, ladeó la cabeza.
—¿Qué descubrimiento, criatura insignificante?
—En ese lago de allí —señaló el cuy hacia un charco de agua turbia—, hay un gigantesco queso de oro flotando. Lo acabo de ver. Quería sacarlo para dárselo a mi familia, pero es demasiado pesado para mí.
Atoq miró el reflejo de la Luna en el agua, que por la turbidez parecía un disco amarillo brillante. Creyó al instante que era un tesoro. Su ambición pudo más que su hambre.
—¡Tonto cuy! ¡Ese queso de oro será mío! —dijo Atoq, y soltó al cuy para correr hacia el lago.
—Pero señor Atoq, es muy pesado —le advirtió el cuy.
El zorro no le hizo caso. Decidido a tener el tesoro, Atoq se lanzó de cabeza al agua helada para buscar el "queso", luchando contra el peso que, en realidad, no existía. Al salir empapado y sin nada, se dio cuenta de la Luna reflejada y entendió el engaño.
Furioso, el zorro corrió de vuelta, pero el cuy ya no estaba. Había usado ese momento para escabullirse bajo una piedra.
Días después, Atoq encontró al cuy durmiendo al pie de un árbol. Esta vez no le daría oportunidad de escapar.
—¡Ahora sí que no te me escapas, mentiroso! —rugió el zorro, amarrando con fuerza al cuy a la rama de un árbol con una soga de ichu (paja brava).
—¡Socorro! —gritó el cuy, fingiendo terror—. ¡Sálvenme! ¡Me obligan a ser centinela del Sol!
En ese momento, pasó un campesino y miró extrañado al cuy atado.
—¿Y tú qué haces ahí, cuy? —preguntó el campesino.
—¡Ay, amigo! —gimoteó el cuy—. Me han amarrado para que cuide el camino por donde pasará el Sol. Es un trabajo muy aburrido y caluroso. ¡Si me desatan, el Sol me castigará!
El campesino, pensando que el cuy era un ser bendecido con una tarea divina, no dudó. Desató al cuy, que huyó a esconderse, y se ató él mismo, convencido de que su sacrificio le traería grandes bendiciones. Cuando el zorro regresó y encontró al campesino en lugar del cuy, solo pudo lamentar su propia lentitud y la inagotable astucia del pequeño roedor andino.
El cuy, con su ingenio, había demostrado ser más rápido y poderoso que la fuerza y la astucia del zorro.`,
            en: '',
            qu: ''
        },
        illustrations: [],
        audioSrc: 'https://drive.google.com/uc?export=download&id=1kMYxvlTQnFOaCoGdcDNmB_Q8htqQenDo',
        audioDuration: '4:15'
    },
    {
        id: '3',
        title: { es: 'La Burra y el Toro', en: '', qu: '' },
        author: { es: 'Tradición Andina', en: '', qu: '' },
        cover: 'https://i.imgur.com/XdvCHJk.png',
        content: {
            es: `En una hacienda del valle, donde las cañas de azúcar crecían altas y dulces, vivían dos animales que trabajaban para el patrón: un fuerte Toro llamado Fiero y una perezosa Burra llamada Juana.
El Toro Fiero era grande y musculoso. Cada mañana, lo unían al trapiche para moler la caña y la papa. Daba vueltas y vueltas sin descanso, desde el amanecer hasta el anochecer. Al terminar, caía agotado bajo el cocotero.
La Burra Juana, en cambio, casi no trabajaba. Solo movía pequeños paquetes de vez en cuando y pasaba la mayor parte del día masticando hierba fresca y tomando el sol.
Un día, Juana vio a Fiero tan rendido que se acercó para darle un "consejo".
—¡Ay, Torito! —rebuznó Juana con aire de superioridad—. ¡Qué sonso eres! Sufres demasiado. Con esas astas y esa fuerza, ¿por qué permites que abusen de ti? ¡Mañana, hazte el más bravo que puedas, muge y patalea, y verás cómo te dejan en paz!
El Toro, harto de su rutina, pensó que Juana tenía razón.
—Tienes razón, amiga Burra. ¡Mañana mismo verán quién es Fiero!
Sin que ellos lo supieran, el capataz, que pasaba cerca, escuchó toda la conversación. Sonrió con malicia y se retiró en silencio.
A la mañana siguiente, cuando los peones vinieron por Fiero, el Toro cumplió su palabra. Pateó el suelo, bramó con furia y arremetió contra todo. Era tan fuerte que nadie pudo acercarse a amarrarlo al molino.
Frustrado, el capataz ordenó:
—¡Ya basta! El Toro está indomable. ¡Traigan a la Burra! Puesto que ella es tan sabia para dar consejos de descanso, que trabaje ella el día de hoy.
La Burra Juana palideció. Ella no estaba acostumbrada al trabajo duro. Pero no tuvo opción. La unieron al pesado timón del trapiche. Dar vueltas y vueltas, girar sin parar, bajo el sol inclemente, moliendo el peso de la caña.
Al terminar el día, Juana estaba molida, con las patas adoloridas y el cuerpo tembloroso. Apenas pudo arrastrarse hasta el cocotero.
Fiero, que había pasado un día plácido, se acercó a Juana, sonriendo.
—Hola, amiga. ¿Cómo te fue con tu día libre? Yo descansé de maravilla, gracias a tu consejo.
La Burra, con la voz apenas audible, miró a su amigo.
—Fiero, no tienes idea de lo que me han contado —dijo Juana, mintiendo un poco para salvar su orgullo—. ¡Escucha! Oí decir al patrón que si no te dejas atrapar mañana, te va a vender al carnicero por ser inútil. ¡Te lo suplico, hazte el manso y déjate llevar! Es peligroso holgazanear.
El Toro, asustado ante la idea del carnicero, asintió con la cabeza. Al día siguiente, se dejó llevar dócilmente al trapiche.
La Burra, libre y sana, volvió a su vida de ocio. Pero, en el fondo, Juana había comprendido algo: el esfuerzo de Fiero era mucho más duro de lo que ella imaginaba, y dar consejos sobre el trabajo cuando no se ha experimentado, no sirve de nada. A veces, la ayuda más grande que se puede ofrecer es la honestidad, no el engaño para librarse de una tarea.`,
            en: '',
            qu: ''
        },
        illustrations: [],
        audioSrc: 'https://drive.google.com/uc?export=download&id=1WUok9egCCZWgtJIl9eX8Ce3IwNUpemnz',
        audioDuration: '4:30'
    },
    {
        id: '4',
        title: { es: 'El Mago de Tambor', en: '', qu: '' },
        author: { es: 'Tradición Andina', en: '', qu: '' },
        cover: 'https://i.imgur.com/38dZNyP.png',
        content: {
            es: `En la costa sur del Perú, existió en tiempos remotos una ciudad llamada Pariallá. Era un lugar bellísimo. Sus calles empedradas eran impecables, sus casas de piedra tallada lucían adornos de oro, y sus pobladores eran hábiles artesanos conocidos por su riqueza.
Sin embargo, a pesar de su prosperidad material, la gente de Pariallá había descuidado algo mucho más valioso: la educación del corazón de sus hijos. Los niños del pueblo crecían siendo malcriados, arrogantes y faltos de respeto hacia los demás, especialmente hacia los humildes.
Un día, llegó a Pariallá un anciano mendigo. Caminaba muy despacio, apoyado en un bastón, y llevaba ropa gastada y remendada. Al verlo, un grupo de niños que jugaba en la plaza comenzó a burlarse.
—¡Mira, mira, un viejo pellejo! —se reían unos. —¡Qué joroba tan grande! —gritaban otros, imitando su andar. —¿Por qué no te compras ropa nueva, anciano? ¡Hueles mal! —lo insultaban, tirándole de la ropa.
El anciano, que caminaba con dificultad, no les respondió. Soportó los insultos y las burlas en silencio. Siguió caminando sin quejarse hasta llegar a las afueras de la ciudad, cerca de una colina.
Allí se detuvo, se volteó y, con un movimiento lento, introdujo la mano en su alforja. Los niños, pensando que les iba a tirar piedras, se prepararon para huir. Pero el anciano sacó un objeto inesperado: un pequeño y hermoso tambor. Se los entregó sin decir una palabra y luego, con la misma calma, se marchó por un sendero que se perdía en el campo.
Los niños, extrañados, se olvidaron del anciano y se concentraron en el regalo. Corrieron a la colina para tocarlo.
—¡Pum, pum, pum! —sonaba el tambor. —¡Yo lo toco más fuerte! —gritó uno, golpeándolo con rabia. —¡Ahora con los pies! —dijo otro, dándole patadas.
El ruido se hizo ensordecedor, resonando en el valle. Los niños se reían del regalo del "viejo tonto" y continuaron golpeando el instrumento hasta que, inevitablemente, el tambor se rompió.
En ese instante, algo mágico y terrible sucedió. Del tambor roto no salió más sonido, sino un chorro de agua que, al principio, era solo un hilo, pero que creció en segundos hasta convertirse en un torrente indetenible.
¡El anciano mendigo era en realidad un Mago poderoso! Había visitado Pariallá para probar la nobleza de su gente. Al encontrar solo burla y desprecio, la destrucción del tambor fue el castigo por la falta de respeto de los niños.
El agua inundó la ciudad, cubriendo las calles y las casas de piedra en minutos. La gente de Pariallá no tuvo tiempo de escapar de la furia del agua y la ciudad se hundió por completo.
Cuentan que hoy, en ese lugar, existe una hermosa y profunda laguna cristalina. Y cuando el sol brilla sobre el agua, se pueden ver en el fondo los destellos de las antiguas casas de piedra de Pariallá, recordando a los viajeros que el respeto a los débiles y la humildad son la verdadera grandeza de un pueblo.`,
            en: '',
            qu: ''
        },
        illustrations: [],
        audioSrc: 'https://drive.google.com/uc?export=download&id=15jGhbwX0pzjgUh4USdTap2Q-ij2j3SJD',
        audioDuration: '5:10'
    },
    {
        id: '5',
        title: { es: 'Otorongo el Orgulloso', en: '', qu: '' },
        author: { es: 'Tradición Andina', en: '', qu: '' },
        cover: 'https://i.imgur.com/voTq3Ju.png',
        content: {
            es: `En las profundidades de la selva peruana, donde el follaje espeso apenas deja pasar la luz del sol, vivía Otorongo, un felino de manchas hermosas y ágil andar. Era un animal fuerte, pero mucho más pequeño que su temido primo, el Jaguar.
Otorongo no podía soportar esta diferencia de tamaño. Para sentirse superior, se pasaba el día presumiendo y mintiendo a los otros animales de la selva. Se acicalaba en los charcos, mirando su reflejo, y decía en voz alta:
—Soy idéntico a mi primo el Jaguar. Si fuera un poquito más grande, ¡nadie sabría la diferencia! Somos los reyes de la selva, y yo soy su pariente predilecto.
Los animales más sabios, como la Tortuga y el Loro, se burlaban de él.
—¡Otorongo, cabeza hueca! —graznaba el Loro desde la copa de los árboles—. ¡Ni tú te crees los cuentos que inventas! ¿Cuándo nos presentarás a tu ilustre primo?
—Está muy ocupado, envidioso. Vendrá cuando quiera, y ese día verán lo amigos que somos —respondió Otorongo, inflando el pecho.
Nadie se atrevía a dudar de Otorongo por miedo a que el verdadero Jaguar se molestara, así que la mentira del felino orgulloso se mantuvo por mucho tiempo.
Una tarde, mientras Otorongo presumía ante un grupo de pequeños monos, un Añuje (roedor de la selva) lanzó un grito de alarma:
—¡El Jaguar! ¡El Jaguar se acerca y viene muy hambriento!
El pánico se apoderó de la selva. Vicuñas, tapires, monos y hasta serpientes corrieron a esconderse. Otorongo, a pesar de sus fanfarronerías, fue el que huyó con más terror. Le temblaba todo el cuerpo.
—¡Que no me vea el Jaguar! ¡Ese bruto me manda al otro distrito de un zarpazo! —murmuraba Otorongo, olvidando por completo que supuestamente eran "grandes amigos".
Corrió tan atemorizado que, sin mirar por dónde iba, no vio un agujero bien disimulado bajo las hojas. Cayó de cabeza en la fosa y quedó atrapado. Por más que intentó saltar, el agujero era demasiado profundo y estrecho.
El ruido de la caída fue tan fuerte que llamó la atención del verdadero Jaguar. El gran felino se acercó al borde del hoyo y miró a Otorongo con una expresión de desprecio.
—Pero, primo Otorongo —rugió el Jaguar con ironía—. ¿Qué haces jugando a las trampas?
—¡Primo, ayúdame! —suplicó Otorongo, con el orgullo destrozado—. ¡Sácame de aquí y te daré mi cena!
El Jaguar soltó una carcajada que hizo temblar la tierra.
—¿Ayudarte? —dijo—. Yo no tengo parientes mentirosos ni débiles. Además, ¡yo soy el rey de la selva y no pido, yo tomo!
Acto seguido, el Jaguar saltó dentro del agujero para devorar a Otorongo. Sin embargo, el felino gigante no calculó el espacio. El agujero era demasiado pequeño para el Jaguar, que quedó atascado y atrapado junto a su primo.
Los animales de la selva, al ver a los dos felinos inmovilizados, no tuvieron miedo de acercarse y taparon el agujero con ramas, rocas y barro, sellando a los dos peligros.
Así fue como la mentira y el orgullo de Otorongo terminaron costándole la vida, pero, de manera irónica, su vanidad y su caída salvaron a toda la selva de la tiranía del Jaguar.`,
            en: '',
            qu: ''
        },
        illustrations: [],
        audioSrc: 'https://drive.google.com/uc?export=download&id=1rO6_2lyfqUEnRerSSQhQNS3kVmp--jyA',
        audioDuration: '4:45'
    },
    {
        id: '6',
        title: { es: 'La Garza Blanca', en: '', qu: '' },
        author: { es: 'Tradición Andina', en: '', qu: '' },
        cover: 'https://i.imgur.com/HnMa80v.png',
        content: {
            es: `En la región de Ucayali, cerca de un afluente del gran río Amazonas, vivía un modesto matrimonio con sus tres hijos: dos varones y una hermosa niña. La pequeña se llamaba Blanca porque siempre vestía túnicas de ese color, era dulce de carácter y muy trabajadora.
Blanca era la adoración de su madre, pero lo que más sorprendía a todos los habitantes del pueblo era la facilidad con la que comía pescado. La dieta de la selva estaba llena de peces, muchos de ellos con espinas finas y traicioneras. Mientras que los demás niños tenían que comer despacio, cuidándose de no atorarse, Blanca comía cualquier pescado, por espinoso que fuera, sin el menor problema.
Esta cualidad, sin embargo, despertó la peor de las emociones en sus dos hermanos mayores: la envidia.
Los hermanos, celosos de la belleza, la bondad y la habilidad de su hermana, decidieron buscar la manera de deshacerse de ella. Recorrieron la selva hasta encontrar la choza de un viejo brujo conocido por sus poderosos y oscuros hechizos.
—Queremos que nuestra hermana desaparezca —dijeron los hermanos, entregándole una bolsa de monedas de plata como pago.
El brujo, codicioso, aceptó el trato.
Aprovechando la noche de Luna Nueva, cuando la oscuridad se cierne sobre el río, el brujo preparó su pócima y pronunció las palabras prohibidas. El hechizo era tan fuerte que la joven Blanca, que dormía inocentemente en su hamaca, comenzó a cambiar. Sus brazos se hicieron más delgados y se cubrieron de plumas; sus largas piernas se estiraron; y de sus labios brotó un pico fino.
Blanca, la niña, fue convertida en una preciosa Garza Blanca, del mismo color de sus vestidos.
El brujo la condenó a vivir a orillas de los ríos y lagos, alimentándose únicamente de los peces que tanto la habían diferenciado. La Garza Blanca batió sus alas y se alejó en la oscuridad, dejando un vacío profundo en el corazón de sus padres.
Pasó el tiempo, y los pobladores del Ucayali notaron algo curioso. Casi todas las tardes, una hermosa garza blanca se posaba en la orilla del río, pescando con una habilidad asombrosa. Muchos años después, una anciana del pueblo, que en su juventud había ayudado a los hermanos por maldad, confesó en su lecho de muerte el cruel secreto.
El pueblo entendió entonces que la Garza Blanca era el espíritu de la buena de Blanca, convertida en ave por la envidia.
Desde ese día, los pobladores del Ucayali le tienen un inmenso respeto al ave. Cuando una Garza Blanca sobrevuela las casas y emite su canto característico, que suena a un susurro de advertencia, las madres les enseñan a sus hijos a tragar saliva inmediatamente. Creen que el espíritu de Blanca, transformada en garza, los protege de las espinas, de ahogarse en el río y de cualquier mal de la selva.
Gracias a la niña convertida en ave, comer pescado en el Ucayali es un placer seguro.`,
            en: '',
            qu: ''
        },
        illustrations: [],
        audioSrc: 'https://drive.google.com/uc?export=download&id=1XVf9ypMAUoVjk3i9-d_sgD2D8EHQWAb1',
        audioDuration: '5:25'
    },
    {
        id: '7',
        title: { es: 'El Loro y la Vizcacha', en: '', qu: '' },
        author: { es: 'Tradición Andina', en: '', qu: '' },
        cover: 'https://i.imgur.com/WO4g0Mh.png',
        content: {
            es: `En un hermoso bosque en las faldas de los Andes, vivían en armonía muchos animales, todos amigos y respetuosos entre sí. Esta paz se rompió el día que llegó al bosque un Loro Parlanchín y Maleducado.
El Loro, que se sentía muy gracioso, pasaba los días insultando y burlándose de todos los demás.
—¡Mono chismoso! —le gritaba a uno. —¡Tortuga vieja, chata y sin nariz! —le graznaba a otra. —¡Oso baboso que te comes los mocos! —se reía de otro.
Al poco tiempo, todos los animales estaban hartos del Loro y sus ofensas. Intentaron atraparlo para darle una lección, pero el astuto Loro siempre echaba a volar y desaparecía.
Cansados de la situación, los animales decidieron acudir a la máxima autoridad del bosque: la Vizcacha Alcaldesa, conocida por su sabiduría y su gran corazón.
El Mono fue el primero en quejarse: —Señora Alcaldesa, no soportaremos al Loro un día más. Si no hace algo, nos iremos todos a vivir a otro sitio, ¡y usted perderá su cargo!
La Vizcacha, con su habitual calma, les pidió paciencia. —No es para tanto —dijo—. Hablaré con él personalmente y le pediré que se comporte mejor.
La Vizcacha se puso su traje de Alcaldesa y fue muy segura de sí misma a buscar al Loro. Lo encontró posado en una rama, y su buen humor se esfumó en cuanto se acercó.
—¡Hola, Orejón tonto! —gritó el Loro al verla—. ¡Vizcacha lechera, que se cree bombera! ¡Da saltos como sapo, pero cae como pollo!
La Vizcacha, visiblemente molesta, lo amonestó: —Tus bromas no son graciosas y disgustan a todos. Si no cambias tu actitud, te caerá un castigo y te quedarás sin amigos.
—¡Cambia tú, oreja de carbón! —le contestó el Loro, riéndose a carcajadas.
Al verse insultada y humillada, la Vizcacha se dio cuenta de que no podría cambiar al Loro con solo palabras. Fue a su casa y recordó a su sabio familiar, el Tío Cuy, un animal místico que vivía en lo alto de la montaña.
El Tío Cuy la escuchó con atención y le reveló la solución: —Existe una planta de Maíz Mágico, Alcaldesa. Sus granos, cuando son comidos, enseñan al parlanchín más insolente una lección de silencio que dura siete días.
La Vizcacha encontró el maíz, lo molió con cuidado y, a la mañana siguiente, dejó la comida mágica cerca del nido del Loro antes de que despertara. El Loro, al despertar y ver la comida, la devoró con apetito.
Ese día, el bosque amaneció en un silencio inusual. Los animales estaban desconcertados. Cuando vieron al Loro, el ave intentaba graznar y gritar, pero ningún sonido salía de su pico. Se había quedado mudo.
El Loro pasó siete días sin poder emitir un solo sonido. Los animales del bosque, libres de insultos, paseaban tranquilos, sin hacerle caso. El Loro, solo y sin poderse comunicar, comprendió el dolor que había causado con sus palabras y lo terrible que era no tener amigos.
Al despertar el séptimo día, el Loro recuperó la voz. —¡Puedo hablar! ¡Puedo hablar! —exclamó—. ¡Perdónenme! ¡Desde ahora, prometo usar mis palabras para alabar y ser amable con todos!
El Loro cumplió su promesa. Los demás animales lo perdonaron y descubrieron que, sin sus insultos, el Loro podía ser un buen amigo. Un mes después, en lugar de expulsarlo, le hicieron una gran fiesta de bienvenida.`,
            en: '',
            qu: ''
        },
        illustrations: [],
    },
    {
        id: '8',
        title: { es: 'El Cóndor y la Muchacha', en: '', qu: '' },
        author: { es: 'Tradición Andina', en: '', qu: '' },
        cover: 'https://i.imgur.com/RIdR3xF.png',
        content: {
            es: `En un pequeño pueblo en lo alto de la Cordillera de los Andes, vivía una bella muchacha llamada Killa (Luna en quechua), que ayudaba a su padre a pastorear sus ovejas y alpacas en las faldas de la montaña. Killa era hermosa, pero muy solitaria, pues pasaba largas horas al lado de su rebaño.
Todos los días, Killa recibía la visita de un apuesto y elegante joven. Vestía siempre con traje negro y una camisa blanca, y usaba un gran sombrero. Killa y el joven se hicieron buenos amigos; él la ayudaba con el ganado y le contaba historias.
Un día, el joven le propuso a Killa: —Quiero llevarte a un lugar donde verás el mundo como nunca antes. Súbete a mis hombros.
Killa aceptó, y el joven la levantó suavemente. De repente, él comenzó a crecer y sus brazos se transformaron en enormes alas negras. El joven se convirtió en un impresionante Cóndor Andino y, sujetándola firmemente con sus garras, emprendió el vuelo hacia las cumbres más altas.
—¡Bájame! ¡Quiero volver con mi padre! —gritaba Killa, aterrada.
—No puede ser. Me enamoré de ti y serás mi compañera para siempre —respondió el Cóndor, llevándola a su nido, una cueva escondida en un barranco inaccesible.
Allí, en lo más alto, Killa vivió cautiva. El Cóndor la trataba bien y le traía carne fresca, e incluso tuvieron un hijo. Sin embargo, la muchacha no era feliz: la añoranza por su padre y su vida en el valle se hacía insoportable.
Un día, un pequeño y veloz Picaflor (colibrí) se acercó al nido buscando néctar. Desesperada, Killa le rogó ayuda:
—¡Picaflor, por favor! ¡Ayúdame a escapar! Si lo haces, le pediré a mi padre que te regale todas las flores de nuestro jardín para que te alimentes.
El Picaflor, conmovido, aceptó el trato. Voló hasta el pueblo, encontró al padre de Killa y le reveló dónde estaba su hija. Juntos, idearon un plan para engañar al temido Cóndor.
El padre, siguiendo las instrucciones del Picaflor, llevó un sapo grande y lo vistió con la ropa de Killa y otro pequeño con la ropa de su hijo. Luego, los dejó cerca del nido. Mientras tanto, el Picaflor ayudó a Killa y a su bebé a descender por el barranco.
Cuando el Cóndor regresó a su nido, el Picaflor se acercó a él con un semblante triste. —¡Oh, gran Cóndor! Sucedió algo terrible. Vi a tu amada y a tu hijo convertirse en sapos. ¡Debe ser culpa de un terrible hechizo maligno!
El Cóndor, al ver a las dos criaturas verdes vestidas con la ropa de su familia, sintió un dolor inmenso. Lloró amargas lágrimas de tristeza y desesperación por haber perdido a su amada. Tan afectado quedó por la pérdida que tomó una decisión que le partió el alma.
—¡No quiero más amores! —rugió—. Desde ahora, viviré solo el resto de mis días.
Desde entonces, el Cóndor, rey de los cielos andinos, es un animal solitario. Sobrevuela las cumbres con un semblante serio y triste, recordando aquel amor que le fue arrebatado. Killa regresó a casa con su padre y, cumpliendo su promesa, su jardín se convirtió en el lugar favorito del Picaflor, quien ya nunca pasó hambre.`,
            en: '',
            qu: ''
        },
        illustrations: [],
    }
];

export const comics: Comic[] = [
    {
        id: '1',
        title: 'Super Gato y el Misterio del Atún',
        author: 'Gatuno Ilustrado',
        cover: 'https://picsum.photos/seed/catcomic/400/600',
        pages: [
            'https://picsum.photos/seed/catpage1/800/1200',
            'https://picsum.photos/seed/catpage2/800/1200',
            'https://picsum.photos/seed/catpage3/800/1200',
            'https://picsum.photos/seed/catpage4/800/1200',
        ],
        audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        audioDuration: '5:13'
    },
    {
        id: '2',
        title: 'Aventuras en el Espacio',
        author: 'Cosmo Dibujante',
        cover: 'https://picsum.photos/seed/spacecomic/400/600',
        pages: [
            'https://picsum.photos/seed/spacepage1/800/1200',
            'https://picsum.photos/seed/spacepage2/800/1200',
        ]
    }
];

export const games: Game[] = [
    // Memory Games Category
    {
        id: '1',
        title: 'Memoria de Parejas Literarias',
        description: 'Empareja fragmentos de poemas y citas famosas. ¡Un reto para tu memoria cultural!',
        cover: 'https://picsum.photos/seed/literatura/400/300',
        category: 'Juegos de Memoria',
        component: ParejasLiterarias,
    },
    {
        id: '2',
        title: '¿Qué Palabra Desapareció?',
        description: 'Observa la lista, memorízala y descubre qué palabra falta. ¡Pon a prueba tu memoria de trabajo!',
        cover: 'https://picsum.photos/seed/palabramisteriosa/400/300',
        category: 'Juegos de Memoria',
        component: PalabraFaltante,
    },
    {
        id: '3',
        title: 'Simón Dice de Palabras',
        description: 'Escucha la secuencia de palabras y repítela en el orden correcto. ¿Hasta dónde puedes llegar?',
        cover: 'https://picsum.photos/seed/simon/400/300',
        category: 'Juegos de Memoria',
        component: SimonDePalabras,
    },
    // Language and Logic Games Category
    {
        id: '4',
        title: 'Conector Lógico',
        description: 'Elige el conector adecuado para unir las frases y darles sentido. ¡Demuestra tu comprensión!',
        cover: 'https://picsum.photos/seed/conectores/400/300',
        category: 'Juegos de Lenguaje y Lógica',
        component: ConectorLogico,
    },
    {
        id: '5',
        title: 'Generador de Sinónimos y Antónimos',
        description: '¿Cuántos sinónimos o antónimos puedes encontrar en 60 segundos? ¡Un desafío de vocabulario!',
        cover: 'https://picsum.photos/seed/vocabulario/400/300',
        category: 'Juegos de Lenguaje y Lógica',
        component: SinonimosAntonimos,
    },
    {
        id: '6',
        title: 'Ordena la Historia',
        description: 'Arrastra las frases para reconstruir una micro-historia. ¡Conviértete en un narrador!',
        cover: 'https://picsum.photos/seed/historia/400/300',
        category: 'Juegos de Lenguaje y Lógica',
        component: OrdenaLaHistoria,
    },
];


export const audiobooks: Audiobook[] = [];