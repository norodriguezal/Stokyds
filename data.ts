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
        title: { 
            es: 'La Leyenda de los Hermanos Ayar', 
            en: 'The Legend of the Ayar Brothers', 
            qu: 'Ayar Panikunapa Willan' 
        },
        author: { es: 'Tradición Andina', en: 'Andean Tradition', qu: 'Andes Willakuy' },
        cover: 'https://i.imgur.com/fmVVSA4.png',
        content: {
            es: `Hace mucho, mucho tiempo, después de que un gran diluvio cubriera la tierra y borrara todo lo conocido, el Dios Sol (Inti) sintió compasión por el mundo y decidió enviar a sus hijos a repoblarlo.
Desde la cima del Cerro Tamputoco, en la región de Pacaritambo, salieron cuatro hermanos y sus cuatro esposas. Ellos eran los Hermanos Ayar: Ayar Manco y Mama Ocllo, Ayar Cachi y Mama Cora, Ayar Uchu y Mama Rahua, Ayar Auca y Mama Huaco.
Inti les dio una misión sagrada: encontrar el lugar perfecto para fundar una gran ciudad que lo adorara a él como su Dios principal. Para guiar su camino, Inti les entregó un objeto mágico: un bastón de oro. La señal sería clara: donde el bastón se hundiera completamente en la tierra con un solo golpe, ese sería el lugar elegido.
Los ocho parientes iniciaron la travesía. Ayar Cachi, el más fuerte y valiente, era también el más impulsivo y arrogante. Su fuerza era tan grande que con un solo tiro de su honda podía derribar montañas y crear valles. Sus hermanos, temiendo que su temperamento y poder arruinaran la misión divina, idearon un plan para deshacerse de él.
Con un engaño, lo enviaron de regreso a la cueva de Tamputoco a buscar provisiones que supuestamente habían olvidado. Cuando Ayar Cachi entró en la cueva, sus hermanos taparon la entrada con una enorme roca, atrapándolo. Lleno de furia, Ayar Cachi gritó con tanta rabia que la tierra tembló, pero ya era tarde. Así, el hermano poderoso quedó convertido en piedra en el interior de la montaña.
El viaje continuó, lleno de tristeza y desafíos. Llegaron a un valle sagrado llamado Huanacauri. Allí, Ayar Uchu decidió quedarse, observando el cielo y la tierra. De pronto, fue transformado en una roca sagrada, un huaca, para velar por el camino de sus hermanos y ser una señal para ellos.
Los dos hermanos restantes, Ayar Manco y Ayar Auca, siguieron su camino. Al llegar al cerro Anahuarque, Ayar Auca desarrolló unas alas y, como le había ordenado su padre Inti, voló hacia el valle del Cusco. Al tocar la tierra, Ayar Auca también fue convertido en piedra, pero su sacrificio marcó el lugar exacto donde debía fundarse el imperio.
Finalmente, Ayar Manco y las mujeres llegaron al valle. Ayar Manco tomó el bastón de oro, y al hundirlo, la tierra lo absorbió con facilidad. ¡Habían encontrado el lugar prometido! Llenos de alegría, Ayar Manco y Mama Ocllo fundaron la ciudad, enseñando a los habitantes a cultivar la tierra y a tejer.
Desde ese momento, Ayar Manco tomó el nombre de Manco Cápac, convirtiéndose en el primer Inca y fundador del glorioso Imperio del Tahuantinsuyo.`,
            en: `A long, long time ago, after a great flood covered the earth and erased everything known, the Sun God (Inti) felt compassion for the world and decided to send his children to repopulate it.
From the top of Mount Tamputoco, in the region of Pacaritambo, emerged four brothers and their four wives. They were the Ayar Brothers: Ayar Manco and Mama Ocllo, Ayar Cachi and Mama Cora, Ayar Uchu and Mama Rahua, Ayar Auca and Mama Huaco.
Inti gave them a sacred mission: to find the perfect place to found a great city that would worship him as their main God. To guide their way, Inti gave them a magical object: a golden staff. The sign would be clear: wherever the staff sank completely into the earth with a single blow, that would be the chosen place.
The eight relatives began the journey. Ayar Cachi, the strongest and bravest, was also the most impulsive and arrogant. His strength was so great that with a single shot of his sling he could knock down mountains and create valleys. His brothers, fearing that his temper and power would ruin the divine mission, devised a plan to get rid of him.
Through deception, they sent him back to the Tamputoco cave to fetch supplies they had supposedly forgotten. When Ayar Cachi entered the cave, his brothers blocked the entrance with a huge rock, trapping him. Full of fury, Ayar Cachi screamed with such rage that the earth shook, but it was too late. Thus, the powerful brother was turned into stone inside the mountain.
The journey continued, full of sadness and challenges. They arrived at a sacred valley called Huanacauri. There, Ayar Uchu decided to stay, observing the sky and the earth. Suddenly, he was transformed into a sacred rock, a huaca, to watch over his brothers' path and be a sign for them.
The two remaining brothers, Ayar Manco and Ayar Auca, continued their way. Upon arriving at Mount Anahuarque, Ayar Auca developed wings and, as his father Inti had ordered, flew towards the Cusco valley. Upon touching the ground, Ayar Auca was also turned into stone, but his sacrifice marked the exact place where the empire was to be founded.
Finally, Ayar Manco and the women arrived at the valley. Ayar Manco took the golden staff, and upon sinking it, the earth absorbed it easily. They had found the promised land! Full of joy, Ayar Manco and Mama Ocllo founded the city, teaching the inhabitants to cultivate the land and weave.
From that moment on, Ayar Manco took the name Manco Cápac, becoming the first Inca and founder of the glorious Empire of Tahuantinsuyo.`,
            qu: `Unay, unay pacha, hatun para tukuy pachata pampaykuptin, Inti Tayta khuyapayaspa churinkunata kachamurqan.
Tamputoco orqomantam, Pacaritambo suyumanta, tawa wawqikuna tawa warminkunapiwan lloqsimurqanku. Paykunan karqanku Ayar Wawqikuna: Ayar Manco Mama Ocllowan, Ayar Cachi Mama Corawan, Ayar Uchu Mama Rahuawan, Ayar Auca Mama Huacowan.
Inti Tayta huk hatun kamachikuyta qorqan: huk sumaq llaqtata paqarichinankupaq, maypichus payta yupaychanankupaq. Ñanninkuta pusananpaq, Inti huk qori tawnata qorqan. Maypichus tawna allpaman chinkaykunqa, chaymi akllasqa lugar kanqa.
Pusaqninku puririyta qallarirqanku. Ayar Cachi, aswan kallpasapa, aswan phiña karqan. Warak'anwan orqokunata thunirqan. Wawqinkuna manchakuspa, huk pantaywan kutichirqanku.
Tamputoco mach'ayman kutichispa, rumiwan wisq'arqanku. Ayar Cachi qapariptin, allpa karkatirqan, ichaqa rumiman tukupurqan.
Huanacauri orqopi, Ayar Uchu rumiman tukurqan. Ayar Auca, phalaspa Cusco wayq'oman chayarqan, chaypi rumiman tukullarqantaq.
Tukuyman, Ayar Manco qori tawnata allpaman sat'irqan. Tawna chinkaykuptin, kusikurqanku. Ayar Manco, Manco Cápac sutichasqa, Tahuantinsuyo Inka suyuta paqarichirqan.`
        },
        illustrations: [],
        audioSrc: {
            es: 'https://drive.google.com/uc?export=download&id=1x3FFLZNpdBBN_F6IsgbFHiMhaM4ZG8EW',
            en: null, 
            qu: null
        },
        audioDuration: {
            es: '6:20'
        }
    },
    {
        id: '2',
        title: { es: 'El Zorro y el Cuy', en: 'The Fox and the Guinea Pig', qu: 'Atuqwan Ukucha' },
        author: { es: 'Tradición Andina', en: 'Andean Tradition', qu: 'Andes Willakuy' },
        cover: 'https://i.imgur.com/CtMTKPL.png',
        content: {
            es: `En las altas y frías punas de los Andes, el zorro, conocido como Atoq, se consideraba el animal más inteligente y veloz. Por su parte, el pequeño cuy era visto como una criatura simple.
Una mañana, el zorro Atoq descubrió un campo de papas frescas. Atoq ideó un plan: se escondería y esperaría a que algún cuy cayera en su trampa.
Al poco tiempo, el pequeño cuy se acercó. El zorro saltó y lo atrapó.
—¡Ja, ja, ja! —se rió Atoq—. ¡Hoy tendré un sabroso banquete!
El cuy miró al zorro con seriedad.
—Qué pena, señor Atoq —dijo el cuy—. Me va a comer justo ahora que acabo de hacer un gran descubrimiento.
—¿Qué descubrimiento?
—En ese lago de allí, hay un gigantesco queso de oro flotando. Lo acabo de ver.
Atoq miró el reflejo de la Luna en el agua, que parecía un queso. Su ambición pudo más que su hambre.
—¡Ese queso de oro será mío! —dijo Atoq, y soltó al cuy para correr hacia el lago.
El zorro se lanzó al agua helada. Al salir sin nada, entendió el engaño. Furioso, corrió de vuelta, pero el cuy ya no estaba.
Días después, Atoq encontró al cuy durmiendo. Lo amarró a un árbol.
—¡Ahora sí te comeré!
—¡Socorro! —gritó el cuy—. ¡Me obligan a ser centinela del Sol!
Pasó un campesino.
—¿Qué haces ahí, cuy?
—Me han amarrado para cuidar el camino del Sol. ¡Es un trabajo aburrido! Si me desatan, el Sol me castigará.
El campesino desató al cuy y se ató él mismo. Cuando el zorro regresó y encontró al campesino, lamentó su lentitud.
El cuy había demostrado ser más astuto que el zorro.`,
            en: `In the high and cold Andes plateaus, the fox, known as Atoq, considered himself the smartest and fastest animal. The little guinea pig, however, was seen as a simple creature.
One morning, Atoq discovered a field of fresh potatoes. He devised a plan to trap a guinea pig.
Soon, the little guinea pig approached. The fox jumped and caught him.
"Ha, ha, ha!" laughed Atoq. "Today I will have a tasty feast!"
The guinea pig looked at the fox seriously.
"What a pity, Mr. Atoq," said the guinea pig. "You are going to eat me just when I have made a great discovery."
"What discovery?"
"In that lake over there, there is a giant golden cheese floating. I just saw it."
Atoq saw the reflection of the Moon in the water. His greed was greater than his hunger.
"That golden cheese will be mine!" said Atoq, dropping the guinea pig to run towards the lake.
The fox jumped into the freezing water. Finding nothing, he realized the trick. Furious, he ran back, but the guinea pig was gone.
Days later, Atoq found the guinea pig sleeping and tied him to a tree.
"Now I will eat you!"
"Help!" shouted the guinea pig. "They are forcing me to be the Sun's sentinel!"
A farmer passed by. "What are you doing there?"
"They tied me up to watch the Sun's path. It's boring work!"
The farmer untied the guinea pig and tied himself up. When the fox returned and found the farmer, he regretted his slowness.
The guinea pig proved to be smarter than the fox.`,
            qu: `Hanaq chirisqa punapi, Atuq aswan yachayniyuq kasqanta yuyarqan. Ukuchataq pisi yuyayniyuq hina rikusqa karqan.
Huk paqarin, Atuq papa chakrata tarirqan. Ukuchata hap'iyta munarqan.
Ukucha chayamuptin, Atuq hap'irqan.
—¡Ja, ja, ja! —asikurqan—. ¡Kunanmi mikusqayki!
Ukucha nirqan: —Llakikunimi, Tayta Atuq. Huk hatun qori quesotan qochapi rikurqani.
Atuq Killaq llanthunta qochapi rikurqan.
—¡Chay qori quesoqa ñoqapaqmi! —nispa, ukuchata kacharirqan.
Atuq yakuman p'itarqan. Mana imata tarispa, phiñakurqan. Ukuchaqa ayqekusqaña.
Huk p'unchay, Atuq ukuchata watarqan.
—¡Kunanqa mikusqaykipuni!
—¡Yanapaykuway! —qaparirqan Ukucha—. ¡Intiq qhawaqninmi kani!
Huk runa tapurqan: —¿Imatan ruwanki?
—Intiq ñanninta qhawanaypaqmi watawanku.
Runa ukuchata kacharirqan, paytaq watakurqan. Atuq kutimuspa runata tarirqan.
Ukuchaqa Atuqlmanta aswan yachayniyuq karqan.`
        },
        illustrations: [],
        audioSrc: {
            es: 'https://drive.google.com/uc?export=download&id=1kMYxvlTQnFOaCoGdcDNmB_Q8htqQenDo',
            en: null,
            qu: null
        },
        audioDuration: {
            es: '4:15'
        }
    },
    {
        id: '3',
        title: { es: 'La Burra y el Toro', en: 'The Donkey and the Bull', qu: 'Asnawan Turu' },
        author: { es: 'Tradición Andina', en: 'Andean Tradition', qu: 'Andes Willakuy' },
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
La Burra, libre y sana, volvió a su vida de ocio. Pero, en el fondo, Juana había comprendido algo: el esfuerzo de Fiero era mucho más duro de lo que ella imaginaba.`,
            en: `On a hacienda in the valley, where sugar cane grew tall and sweet, lived two animals working for the boss: a strong Bull named Fiero and a lazy Donkey named Juana.
Fiero the Bull was big and muscular. Every morning, he was yoked to the mill to grind cane. He walked in circles tirelessly, from dawn to dusk.
Juana the Donkey, on the other hand, hardly worked. She only moved small packages occasionally.
One day, Juana saw Fiero so exhausted that she approached him to give him "advice".
"Oh, little Bull!" brayed Juana. "You suffer too much. With those horns and strength, why do you let them abuse you? Tomorrow, act brave, moo and kick, and you'll see how they leave you alone!"
The Bull thought Juana was right. "You're right. Tomorrow they will see who Fiero is!"
The foreman overheard the conversation and smiled maliciously.
The next morning, the Bull kicked and bellowed furiously. No one could tie him to the mill.
The foreman ordered: "Enough! Bring the Donkey! Since she is so wise in giving advice on resting, let her work today."
Juana paled. She was yoked to the heavy mill. Round and round, under the harsh sun.
At the end of the day, Juana was crushed. Fiero, who had rested, approached her.
"How was your day off?"
Juana, lying to save her pride, said: "Fiero, I heard the boss say that if you don't let yourself be caught tomorrow, he will sell you to the butcher. Please, be tame!"
The Bull, scared, nodded. The next day, he went docilely to the mill.
Juana returned to her life of leisure, but she had understood that Fiero's effort was much harder than she imagined.`,
        },
        illustrations: [],
        audioSrc: {
            es: 'https://drive.google.com/uc?export=download&id=1WUok9egCCZWgtJIl9eX8Ce3IwNUpemnz',
        },
        audioDuration: { es: '4:30' }
    },
    {
        id: '4',
        title: { es: 'El Mago de Tambor', en: 'The Drum Wizard', qu: '' },
        author: { es: 'Tradición Andina', en: 'Andean Tradition', qu: '' },
        cover: 'https://i.imgur.com/38dZNyP.png',
        content: {
            es: `En la costa sur del Perú, existió en tiempos remotos una ciudad llamada Pariallá. Era un lugar bellísimo. Sus calles empedradas eran impecables.
Sin embargo, la gente de Pariallá había descuidado la educación del corazón de sus hijos. Los niños crecían siendo malcriados y arrogantes.
Un día, llegó un anciano mendigo. Un grupo de niños comenzó a burlarse de él.
—¡Mira, un viejo pellejo! —se reían.
El anciano soportó los insultos en silencio. Al llegar a las afueras, sacó un pequeño tambor y se los entregó.
Los niños corrieron a tocarlo.
—¡Pum, pum, pum!
El ruido se hizo ensordecedor hasta que el tambor se rompió.
Del tambor roto salió un chorro de agua que creció hasta convertirse en un torrente.
¡El anciano era un Mago poderoso! Había visitado Pariallá para probar la nobleza de su gente. La destrucción del tambor fue el castigo.
El agua inundó la ciudad y Pariallá se hundió por completo.
Cuentan que hoy, en ese lugar, existe una hermosa laguna, recordando que el respeto y la humildad son la verdadera grandeza.`,
            en: `On the southern coast of Peru, there once was a city called Pariallá. It was a beautiful place.
However, the people of Pariallá had neglected the education of their children's hearts. The children grew up spoiled and arrogant.
One day, an old beggar arrived. A group of children began to mock him.
"Look, an old skinbag!" they laughed.
The old man endured the insults in silence. When he reached the outskirts, he took out a small drum and gave it to them.
The children ran to play it.
"Boom, boom, boom!"
The noise became deafening until the drum broke.
From the broken drum came a stream of water that grew into a torrent.
The old man was a powerful Wizard! He had visited Pariallá to test the nobility of its people. The destruction of the drum was the punishment.
The water flooded the city and Pariallá sank completely.
It is said that today, in that place, there is a beautiful lagoon, reminding us that respect and humility are the true greatness.`,
        },
        illustrations: [],
        audioSrc: {
            es: 'https://drive.google.com/uc?export=download&id=15jGhbwX0pzjgUh4USdTap2Q-ij2j3SJD',
        },
        audioDuration: { es: '5:10' }
    },
    {
        id: '5',
        title: { es: 'Otorongo el Orgulloso' },
        author: { es: 'Tradición Andina' },
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
        },
        illustrations: [],
        audioSrc: {
            es: 'https://drive.google.com/uc?export=download&id=1rO6_2lyfqUEnRerSSQhQNS3kVmp--jyA',
        },
        audioDuration: { es: '4:45' }
    },
    {
        id: '6',
        title: { es: 'La Garza Blanca' },
        author: { es: 'Tradición Andina' },
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
        },
        illustrations: [],
        audioSrc: {
            es: 'https://drive.google.com/uc?export=download&id=1XVf9ypMAUoVjk3i9-d_sgD2D8EHQWAb1',
        },
        audioDuration: { es: '5:25' }
    },
    {
        id: '7',
        title: { es: 'El Loro y la Vizcacha' },
        author: { es: 'Tradición Andina' },
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
        },
        illustrations: [],
    },
    {
        id: '8',
        title: { es: 'El Cóndor y la Muchacha' },
        author: { es: 'Tradición Andina' },
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