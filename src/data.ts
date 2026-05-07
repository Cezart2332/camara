// Menu Images
import espressoImg from './assets/menu/espresso.jpg';
import cappuccinoImg from './assets/menu/cappuccino.jpg';
import flatWhiteImg from './assets/menu/flat_white.jpg';
import latteImg from './assets/menu/latte_macchiato.avif';
import v60Img from './assets/menu/v60.webp';
import coldBrewImg from './assets/menu/cold_brew.jpg';
import greenTeaImg from './assets/menu/green_tea.jpg';
import blackTeaImg from './assets/menu/black_tea.jpg';
import fruitTeaImg from './assets/menu/fruit_tea.jpg';
import mintTeaImg from './assets/menu/mint_tea.jpg';
import tiramisuImg from './assets/menu/tiramisu.jpg';
import cheesecakeImg from './assets/menu/cheeseecake.webp';
import brownieImg from './assets/menu/brownie.webp';
// Shop Images
import ethiopiaImg from './assets/shop/coffee-bag-with-roasted-beans.jpg';
import brazilImg from './assets/shop/coffee-bag-mockup-with-beans-cloth.jpg';
import colombiaImg from './assets/shop/coffee-bean-bag-with-eucalyptus-roasted-coffee.jpg';
import kenyaImg from './assets/shop/black-coffee-bag-mockup-isolated.jpg';

export const menuData = {
  coffee: [
    {
      slug: 'espresso',
      name: 'Espresso',
      price: '10 RON',
      desc: 'Cafea intensă și aromată extrasă la presiune înaltă.',
      img: espressoImg,
      longDesc: 'Espresso-ul nostru este fundamentul tuturor băuturilor noastre. Folosim un amestec select de boabe 100% Arabica, prăjite mediu pentru a evidenția notele de ciocolată neagră și nuci. Fiecare extracție este monitorizată cu precizie pentru a asigura echilibrul perfect între aciditate, amăreală și dulceață.'
    },
    {
      slug: 'cappuccino',
      name: 'Cappuccino',
      price: '14 RON',
      desc: 'Espresso echilibrat cu lapte cremos și spumă fină.',
      img: cappuccinoImg,
      longDesc: 'Cappuccino-ul Camara este o simfonie a texturilor. Începem cu un espresso bogat, peste care turnăm lapte proaspăt, spumat la temperatura ideală pentru a crea o micro-spumă densă și catifelată. Rezultatul este o băutură cremoasă, cu un gust dulceag natural datorită lactozei din laptele perfect preparat.'
    },
    {
      slug: 'flat-white',
      name: 'Flat White',
      price: '16 RON',
      desc: 'Dublu espresso cu lapte catifelat.',
      img: flatWhiteImg,
      longDesc: 'Pentru cei care doresc un gust mai intens de cafea, Flat White-ul este alegerea ideală. Două doze de espresso scurt (ristretto) sunt combinate cu un strat subțire de lapte fin, oferind o experiență robustă dar fină în același timp.'
    },
    {
      slug: 'latte-macchiato',
      name: 'Latte Macchiato',
      price: '15 RON',
      desc: 'Trei straturi: lapte, espresso și spumă.',
      img: latteImg,
      longDesc: 'O băutură vizuală și delicioasă. Stratul generos de lapte cald primește un "semn" (macchia) de espresso, fiind completat de o spumă aerată la suprafață. Este băutura perfectă pentru cei care preferă o cafea mai lungă și mai lăptoasă.'
    },
    {
      slug: 'v60',
      name: 'V60 Pour Over',
      price: '18 RON',
      desc: 'Cafea de specialitate preparată manual.',
      img: v60Img,
      longDesc: 'Metoda V60 pune în valoare cele mai fine nuanțe ale cafelei de specialitate. Prin turnarea manuală a apei peste cafeaua proaspăt măcinată într-un filtru de hârtie, obținem o ceașcă de cafea clară, curată, care evidențiază aromele florale sau fructate ale originii respective.'
    },
    {
      slug: 'cold-brew',
      name: 'Cold Brew',
      price: '17 RON',
      desc: 'Cafea extrasă la rece timp de 12 ore.',
      img: coldBrewImg,
      longDesc: 'Răbdarea este ingredientul principal. Cafeaua este extrasă cu apă rece pe parcursul a 12-14 ore, rezultând o băutură cu aciditate foarte scăzută, natural dulceagă și extrem de revigorantă, perfectă pentru zilele călduroase.'
    },
  ],
  teas: [
    {
      slug: 'green-tea',
      name: 'Ceai Verde Sencha',
      price: '12 RON',
      desc: 'Ceai japonez tradițional cu note proaspete.',
      img: greenTeaImg,
      longDesc: 'Sencha este cel mai popular ceai din Japonia. Infuzia noastră oferă un gust proaspăt, ușor ierbos și o culoare galben-verzuie vibrantă. Este bogat în antioxidanți și oferă o energie calmă și susținută.'
    },
    {
      slug: 'black-tea',
      name: 'Ceai Negru Earl Grey',
      price: '12 RON',
      desc: 'Ceai negru clasic infuzat cu ulei de bergamotă.',
      img: blackTeaImg,
      longDesc: 'Un clasic britanic reinterpretat. Ceaiul negru de calitate superioară este armonizat cu aromele citrice ale bergamotei italiene. O băutură sofisticată, ideală pentru după-amiezile relaxante.'
    },
    {
      slug: 'fruit-tea',
      name: 'Ceai de Fructe',
      price: '12 RON',
      desc: 'Mix delicios de fructe de pădure și hibiscus.',
      img: fruitTeaImg,
      longDesc: 'O explozie de arome naturale. Amestecul nostru conține bucăți întregi de fructe de pădure uscate, măr și flori de hibiscus, oferind o infuzie roșie intensă, natural dulce-acrișoară, excelentă atât caldă cât și rece.'
    },
    {
      slug: 'mint-tea',
      name: 'Ceai de Mentă',
      price: '12 RON',
      desc: 'Infuzie răcoritoare din frunze de mentă.',
      img: mintTeaImg,
      longDesc: 'Simplitatea în cea mai bună formă a ei. Frunze de mentă premium care oferă o infuzie extrem de răcoritoare, digestivă și calmantă. Fără teină, poate fi savurat în orice moment al zilei.'
    },
  ],
  desserts: [
    {
      slug: 'tiramisu',
      name: 'Tiramisu',
      price: '22 RON',
      desc: 'Desert clasic italian cu cafea și mascarpone.',
      img: tiramisuImg,
      longDesc: 'Tiramisu-ul nostru respectă rețeta tradițională, dar cu un twist: folosim propriul nostru espresso proaspăt extras pentru a însiropa pișcoturile. Mascarponele cremos și pudra fină de cacao completează acest desert care "te ridică" (tira mi sù).'
    },
    {
      slug: 'cheesecake',
      name: 'Cheesecake',
      price: '20 RON',
      desc: 'Prăjitură fină cu brânză și fructe de sezon.',
      img: cheesecakeImg,
      longDesc: 'O textură fină și densă, pe un blat crocant de biscuiți artizanali. Cheesecake-ul nostru este servit cu un topping generos de fructe proaspete sau coulis de fructe de pădure, pregătit în casă.'
    },
    {
      slug: 'brownie',
      name: 'Brownie cu Nuci',
      price: '18 RON',
      desc: 'Prăjitură densă de ciocolată cu nuci crocante.',
      img: brownieImg,
      longDesc: 'Iubitorii de ciocolată se vor îndrăgosti de acest brownie. Folosim ciocolată cu 70% cacao pentru un gust intens, păstrând interiorul moale și "fudgy", în contrast cu nucile românești crocante.'
    },
  ],
  products: [
    {
      slug: 'etiopia-yirgacheffe',
      name: 'Etiopia Yirgacheffe',
      desc: 'Note florale și fructate, aciditate vibrantă.',
      img: ethiopiaImg,
      longDesc: 'Etiopia este considerată locul de naștere al cafelei, iar boabele de aici sunt renumite pentru complexitatea și delicatețea lor. Cultivată la altitudini foarte mari (adesea peste 1.800 de metri), cafeaua etiopiană dezvoltă arome foarte fine, fiind adesea comparată cu un ceai rafinat, mai degrabă decât cu o cafea clasică.\n\nNote de degustare: Foarte florale (iasomie, lavandă) și fructate. Vei simți adesea note clare de afine, căpșuni, piersici, bergamotă sau lămâie.\n\nCorp și aciditate: Are un corp delicat (subțire) și o aciditate vibrantă, luminoasă, asemănătoare cu cea a citricelor.\n\nPreparare recomandată: Excelentă la filtru (V60, Chemex) pentru a-i scoate în evidență claritatea și notele subtile de ceai și fructe.',
      sizes: [
        { label: '250g', price: '65 RON' },
        { label: '500g', price: '115 RON' },
        { label: '1000g', price: '210 RON' }
      ]
    },
    {
      slug: 'brazilia-cerrado',
      name: 'Brazilia Cerrado',
      desc: 'Note de ciocolată și nuci, aciditate scăzută.',
      img: brazilImg,
      longDesc: 'Brazilia este cel mai mare producător de cafea din lume, iar profilul ei este ceea ce majoritatea oamenilor consideră a fi gustul „clasic” de cafea. Cultivată la altitudini mai joase, boabele braziliene sunt adesea procesate natural (uscate cu tot cu pulpa fructului), ceea ce le dă o dulceață specifică și un gust reconfortant.\n\nNote de degustare: Domină notele de ciocolată cu lapte, nuci prăjite, alune de pădure, caramel și cacao. Gustul este pământos, dulceag și prăjit.\n\nCorp și aciditate: Are un corp plin, rotund și cremos, cu o aciditate foarte scăzută (deloc acră).\n\nPreparare recomandată: Ideală pentru espresso, ibric sau Moka Pot. Este baza perfectă pentru băuturile cu lapte (cappuccino, flat white), deoarece ciocolata și nucile se îmbină perfect cu dulceața laptelui.',
      sizes: [
        { label: '250g', price: '45 RON' },
        { label: '500g', price: '85 RON' },
        { label: '1000g', price: '160 RON' }
      ]
    },
    {
      slug: 'columbia-huila',
      name: 'Columbia Huila',
      desc: 'Echilibru perfect, note de caramel și fructe roșii.',
      img: colombiaImg,
      longDesc: 'Cafeaua columbiană este renumită la nivel mondial pentru echilibrul ei perfect. Nu este nici prea extremă în aciditate ca cea africană, nici prea „plată” ca alte cafele sud-americane. Solul vulcanic din Munții Anzi îi oferă o bogăție aparte, fiind o cafea care mulțumește aproape orice tip de băutor.\n\nNote de degustare: Foarte dulce, cu note pronunțate de zahăr brun, panela, caramel, măr roșu, cireșe și uneori un strop de ciocolată neagră pe final.\n\nCorp și aciditate: Corp mediu, adesea siropos sau catifelat. Aciditatea este medie-ridicată, dar suculentă, amintind de mușcătura dintr-un măr proaspăt (aciditate malică).\n\nPreparare recomandată: Este extrem de versatilă. Strălucește atât ca un espresso dulce și echilibrat, cât și preparată la filtru sau Aeropress.',
      sizes: [
        { label: '250g', price: '55 RON' },
        { label: '500g', price: '100 RON' },
        { label: '1000g', price: '185 RON' }
      ]
    },
    {
      slug: 'kenya-aa',
      name: 'Kenya AA',
      desc: 'Intensă și fructată, note de coacăze negre.',
      img: kenyaImg,
      longDesc: 'Dacă vrei o experiență a cafelei care să îți trezească toate simțurile, Kenya este alegerea. Cafeaua de aici crește pe solurile roșii, bogate în fier, din jurul Muntelui Kenya. Sistemul lor de licitație și gradare (AA fiind cele mai mari și, de obicei, cele mai bune boabe) asigură o calitate excepțională, rezultând una dintre cele mai intense cafele din lume.\n\nNote de degustare: Extrem de savuroasă și suculentă. Notele distinctive sunt de coacăze negre, mure, grapefruit roz, struguri roșii și, uneori, o notă subtilă de roșie (grație solului specific).\n\nCorp și aciditate: Corp mediu spre plin, textură de sirop gros. Aciditatea este foarte ridicată, citrică și complexă, asemănătoare unui vin roșu sec și fructat.\n\nPreparare recomandată: Metodele de extracție manuală (Brew/Filtru) sunt cele mai bune pentru a deschide acest buchet aromatic complex. Ca espresso, poate fi mult prea intensă sau acidă pentru unii, dar absolut spectaculoasă pentru pasionații de arome extreme.',
      sizes: [
        { label: '250g', price: '75 RON' },
        { label: '500g', price: '140 RON' },
        { label: '1000g', price: '260 RON' }
      ]
    }
  ]
};
