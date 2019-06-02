import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '@okta/okta-react'
import Country_Europa from '../Country'
import { Button, Icon } from 'semantic-ui-react'
import left from '../../../imagesSrc/left.png'
import img from '../../../imagesSrc/danya.jpg'
import prazdn from '../../../imagesSrc/Belguim/prazdn1.jpg'
import prazdn2 from '../../../imagesSrc/Belguim/prazdn2.jpg'
import prazdn3 from '../../../imagesSrc/Belguim/prazdn3.jpg'
import pointer from '../../../imagesSrc/pointer.png'
import right from '../../../imagesSrc/right.png'
import down from '../../../imagesSrc/douwn.png'
import ReactWeather from 'react-open-weather'
import 'react-open-weather/lib/css/ReactWeather.css'
import WeatherIcons from 'react-weathericons'
import { Slide } from 'react-slideshow-image'
import 'react-image-gallery/styles/css/image-gallery.css'
import Navbar from '../../layout/Navbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps'
import Modal from 'react-responsive-modal'
import { Dropdown, Menu } from 'semantic-ui-react'
import Slider from '../../Slider'
import Template from '../../Template'
import Citys from '../../Citys'
import { connect } from 'react-redux'
import lion1 from '../../../imagesSrc/eiffel.jpg'
import lion2 from '../../../imagesSrc/lyvr.jpg'
import cityPhoto from '../../../imagesSrc/NightParis.jpg'

class Denmark extends Component {
  state = {
    authenticated: null,
    showWeather: false,
    showSlide: true,
    showMap: false,
    width: 1500,
    width1: 750,
    height: 500,
    small: true,
  }


  weatherMap() {
    const apikey = '597bea37916f4ffbb6c172914192501'
    const { showWeather, show, showText } = this.state
    this.setState({ showWeather: !showWeather, show: !show, showText: false })
  }


  async componentDidMount() {
  }

  async componentDidUpdate() {
  }


  render() {

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
    }

    const apikey = '597bea37916f4ffbb6c172914192501'
    const ReactWeather = require('react-open-weather').default
//Optional include of the default css styles
    require('react-open-weather/lib/css/ReactWeather.css')
    const { width, height } = this.state
    const mapState = {
      center: [55.6759400, 12.5655300], zoom: 10,
      bounds: undefined,
    }
    const mapState_city = {
      center: [50.5101, 4.2055], zoom: 10,
      bounds: undefined,
    }
    const weather = [
      <div>
        <ReactWeather
          forecast="5days"
          apikey="597bea37916f4ffbb6c172914192501"
          type="city"
          city="Esbjerg"
          lang="ru"/>
        <ReactWeather
          forecast="5days"
          apikey="597bea37916f4ffbb6c172914192501"
          type="city"
          city="Denmark"
          lang="ru"/>
        <ReactWeather
          forecast="5days"
          apikey="597bea37916f4ffbb6c172914192501"
          type="city"
          city="Odense"
          lang="ru"/>
      </div>,
    ]
    const esdi = {
      coordinates: [50.50, 4.00],
    }


    const mainContent = (
      <Template
        photoCountry={img}
        countryInfo={'Сказочная Дания — жемчужина Скандинавии. Отдых на пляжах\n' +
        '                                            Датской Ривьеры и экскурсии по достопримечательностям Копенгагена, пряничные\n' +
        '                                            фермы и старинные крепости, спа-отели, морские круизы и парк развлечений\n' +
        '                                            Леголенд. Все о Дании: виза, туры, карты и фото.'}
        imgsrc={pointer}
        intro={<nav><p>В снежную пору эта гостеприимная страна предлагает провести незабываемые новогодние каникулы в
          сказочной столице Копенгагене или богатом достопримечательностями Орхусе. Или же отправиться в Оденсе — город,
          где родился, пожалуй, самый знаменитый сказочник на свете — Ганс Христиан Андерсен. Кроме того, зимняя Дания
          манит любителей круизов — новогодняя поездка на пароме с посещением нескольких стран Скандинавии доставит
          истинное удовольствие как взрослым, так и детям.</p>
          <p>Летом Королевство готовит особые сюрпризы, которые по заслуге оценят семейные туристы. Во-первых, это
            удивительные парки развлечений — «Леголенд» и «Тиволи». Во-вторых, сказочные пляжи Датской Ривьеры, где
            уставшие за зиму мамы смогут насладиться качественными процедурами в местных спа-отелях. В-третьих,
            изумительная природа. Красивейшие озера с песчаными пляжами, словно игрушечные, пряничные фермы, где можно
            отведать вкуснейшие национальные блюда и попробовать местные сыры. Наконец, старинные романтичные крепости,
            часть из которых сегодня открыты в качестве гостеприимных отелей.</p></nav>}
        countryName={'Дания'}
        mapState={mapState}
        weather={weather}
        esdi={esdi}
        countryNames={'Дании'}
        countryNames1={'Копенгагена'}
        infoGeograf={<nav><p>Крупнейший датский аэропорт Каструп расположен в 8 км от центра Копенгагена. Прямые рейсы
          из Москвы есть у «Аэрофлота»: вылет из Шереметьево, продолжительность — от 2 часов 40 минут. С пересадками
          добираться дешевле: «Эгейские авиалинии» доставляют из Домодедово через Афины за 7,5 часов; «Эйр Балтик» —
          через Ригу 4,5 часа; «Эйр Франс» — через Париж, 9 часов.</p>
          <p>Единственный аэропорт Южной Дании находится в окрестностях Биллунда. Несколько раз в месяц сюда запускают
            стыковочные рейсы из Москвы. «Эйр Балтик» организует перелеты — 23,5 часа из Шереметьево с пересадкой в
            Риге), «Турецкие авиалинии» — от 14,5 часов из Внуково с пересадкой в Стамбуле), «Британские авиалинии» —
            19,5 часов из Домодедово с пересадкой в Лондоне. Из Санкт-Петербурга можно долететь с «Финнэйр» за 6 часов
            со стыковкой в Хельсинки.</p>
          <p>Свой аэропорт есть и на Фарерских островах. Из Москвы в Вагар выгоднее добираться с двумя пересадками: к
            примеру, у «Скандинавских авиалиний» и «Эйр Балтик» есть маршруты через Ригу и Копенгаген, время в дороге —
            28,5 часов. Самые быстрые перелеты — у «Эйр Балтик» и «Атлантик Эйрвэйс»: 11 часов со стыковками в тех же
            городах. Рейсы из Питера дешевле всего у «Скандинавских авиалиний» — 26,5 часов через шведскую и датскую
            столицы, быстрее — у той же компании в тандеме с «Атлантик Эйрвэйс», 6 часов 45 минут с аналогичными
            пересадками.</p>
        </nav>
        }
        //Горыне лыжи
        info_block={<nav><p>Дания вряд ли удивит поклонников крутых виражей и головокружительных высот: впечатляющих гор
          в королевстве нет. Зато небольшие, аккуратные и абсолютно безопасные для катания холмы прекрасно подходят
          новичкам и семьям с детьми. Большинство трасс покрыты искусственным снегом, посему рассекать на лыжах можно
          круглый год. Но лучшее время для посещения горных курортов — конечно, зима: обжигающий щеки мороз и летящие с
          неба снежинки создают идеальную атмосферу для отдыха.
        </p>

          <p>В списке наиболее популярных мест для катания — городок Силькеборг на полуострове Ютландия. Лыжники,
            сноубордисты и саночники лавируют по ухоженным трекам, оснащенным подъемниками. Для детей есть отдельный
            маленький холм, для опытных спортсменов — красные трассы повышенной сложности. Жить можно здесь же: на
            курорте построены очаровательные домики с удобствами.
          </p>
          <p>На острове Борнхольм расположен курорт Остерларс с трассами высотой 70-110 м (70 % — легкие, остальные
            посложнее). Насладиться активным досугом можно и в окрестностях Копенгагена: в Hedeland Skicenter
            оборудованы синие и черные спуски высотой 35-80 м, есть лыжная школа и зоны для ночного катания, однодневный
            ски-пасс стоит 130 DKK для взрослых и 80 DKK для детей. В ближайшее время откроется и CopenHill —
            круглогодичный курорт с фристайл-парком, смотровой площадкой и маршрутами для пробежек и хайкинга.</p>

        </nav>
        }
        //Исторя
        info_block_2={<p>Первые поселения человека на территории современной Дании датируются эпохой верхнего палеолита.
          В первом тысячелетии до нашей эры здесь жили племена кимвров и тевтонов. В 4 веке н.э. на датские земли пришли
          племена ютов и англов. В ходе Великого переселения народов они в итоге заняли Великобританию, а им на смену
          пришли племена данов. Первые упоминания о данах датируются 7 - 8 столетием. В раннее Средневековье они были
          объединены в родовые союзы, возглавляемые конунгами. </p>}
        info_block_2_1={<nav><p>В эпоху викингов даны активно участвовали в походах на Великобританию и Францию, создали
          поселения в Гренландии, Исландии и даже в Северной Америке. Датские конунги воевали с Карлом Великим и даже
          захватывали Париж. В 9 - 10 веках началась христианизация Дании. В начале 12 века в Скандинавии было
          образовано первое архиепископство. К 1028 году Кнуд Великий объединил под своей властью Данию, Норвегию и
          Англию. Однако это государство распалось сразу после его смерти и до 12 века в стране началась череда
          междоусобиц.</p><p>Период междоусобиц был завершён в 1157 году королём Вальдемаром I Великим. Он и его потомки
          значительно расширили границы Датского королевства, завоевав Померанию, Мекленбург и Гольштейн. В 14 веке в
          результате династических браков почти вся Скандинавия оказалась под властью датчан. В 14 - 16 веках власть в
          Дании принадлежала королевскому совету (ригсроду), который избирал короля. С 1468 года начал созываться
          ригсдаг (собрание из представителей разных сословий), который имел мало реальных полномочий. </p><p>В 1536
          году была официально закреплена Реформация и Дания стала лютеранской. В 1563 году началась война против
          Швеции, которая стала первой из череды военных конфликтов между двумя странами. В 17 веке Дания стала
          абсолютной монархией и одной из ведущих держав Европы. В 1788 году было окончательно отменено крепостное
          право. В ходе наполеоновских войн Дания выступила на стороне Франции. В 1813 - 1814 годах датская армия была
          разгромлена шведскими войсками. В итоге страна потеряла Норвегию и лишилась своего статуса мощной европейской
          державы. В 19 веке в ходе войн с Пруссией Дания потеряла Шлезвиг и Гольштейн.</p></nav>}
        //Регионы и курорты
        info_block_3={<nav>
          <p>Столица — Копенгаген, не по-столичному миниатюрный, уютный и аккуратный. Небоскребов тут почти нет, зато
            есть исторические достопримечательности, большинство из которых сосредоточены в Старом центре. Район Нюхавн
            населяют писатели и художники, Нёрребро — студенты и иммигранты, Вестербро славится злачными заведениями, а
            Остербро — элегантной застройкой. В компактной столице нашлось место даже Свободному городу Христиании,
            основанному в 1970-е гг. хиппи-анархистами и до сих пор живущему по собственным законам.</p>
          <p>Второй по величине город в Дании — Орхус, красующийся на берегу залива Орхус-Бугт. Неофициальная столица
            Ютландии — важный культурный и образовательный центр, здесь много студентов, а значит, и модных баров,
            галерей, бутиков с хенд-мейдом. Ценители природы отдыхают в живописных парках и наслаждаются рыбалкой,
            поклонники архитектуры гуляют по Старому городу, гурманы дегустируют фермерские продукты и эль в ресторанах
            и пабах.</p>
          <p>Оденсе — родина Андерсена: когда-то на тихих пряничных улицах он искал вдохновение для будущих шедевров, а
            сегодня эти же улицы украшают увековеченные в камне герои его сказок. Старинные дворцы и храмы наверняка
            помнят великого писателя, а Фюнская деревня приглашает вернуться в его времена: в музее под открытым небом
            собраны традиционные постройки 17-19 веков.</p>
          <p>Еще одна датская жемчужина — Ольборг, переплетающий историю с современностью. Тут есть все атрибуты
            средневекового города: купеческие особняки, торжественные соборы, неприступный замок и вереница музеев. А
            еще — крупные промышленные предприятия, оживленная гавань и целая улица из баров и ресторанов. Биллунд
            знаменит первым в мире заводом «Лего» и парком развлечений «Леголенд», Роскилле — культовым рок-фестивалем,
            а Фареры — великолепными пейзажами, высоким уровнем жизни и званием лучших островов на планете по версии
            National Geographic.</p>
        </nav>}
        // //Климат
        info_block_4={<nav>
          <p>Умеренный морской, достаточно мягкий климат без резких перепадов температур и с относительно равномерным
            выпадением осадков в течение всего года. Зима длится с декабря по март и характеризуется высокой влажностью
            и затяжными периодами сравнительно холодной погоды: температура воздуха в январе 0...-7 °C. Лето прохладное,
            средняя температура июля +15...+16 °C. Лучшее время для посещения страны — июль-август, когда теплее всего,
            а осадков относительно мало.</p>
        </nav>}
        actual={'прогноз погоды на основных курортах Бельгии на ближайшие дни.'}
        //Кухня
        info_block_5={<nav>
          <p>Датская кухня — воплощение скандинавских традиций: простая, сытная, изобилующая морепродуктами и овощами.
            Ее главный символ — бутерброд, он же «смёрреброд»: многослойные шедевры с мясом, рыбой, сыром, зеленью,
            соусами и специями блистают и в прославленных ресторанах, и в скромных уличных закусочных. Зачастую гарниром
            к ним выступают салаты, тоже сытные и калорийные: с ветчиной, макаронами, фасолью и майонезом.</p>
          <p>Обожают датчане и рыбу: сельдь, лосось, макрель и камбалу варят, жарят, солят, вялят и коптят — разве что в
            десерты не добавляют. Из мяса предпочитают свинину в виде котлет, паштетов, фрикаделек, колбасок и сосисок.
            Еще одно интересное блюдо — соленая курица с ананасами, подаваемая к столу как горячей, так и холодной. К
            каждому яству — тщательно подобранный соус: горчичный, коричневый, петрушковый или ягодный.</p>
          <p>На сладкое стоит отведать густой ягодный кисель «рёд-грёз-мез-флёзе» со взбитыми сливками, морковный торт,
            клубничный суп, яблочный пирог со смородиновым желе, абрикосовые пирожные и всевозможные булочки. Самый
            распространенный алкоголь — пиво, ликеры и шнапс, на Рождество варят особое вино, напоминающее
            глинтвейн.</p>
          <p>В Дании есть классические и экспериментальные заведения с национальным меню, рестораны греческой,
            итальянской, китайской, японской, индийской кухонь. «Джус-бары» предлагают свежевыжатые соки и легкие
            закуски, стейк-хаусы — аппетитное мясо, маленькие частные пивоварни — десятки видов хмельного. Едальни в
            регионах часто специализируются на аутентичных блюдах: на острове Эрё угощают дрожжевыми оладьями с медом,
            на Фанё — мучными пудингами «саккук», на Борнхольме — копченостями, а на Мёне — пряной селедкой.</p>

        </nav>}
        //Праздники
        //
        info_block_6={<nav><p>Из всех датских праздников Рождество — любимейший: готовятся к нему заранее, украшают дома
          и улицы, выбирают подарки близким. Ровно за месяц ставят на стол еловый венок с 4 свечами и зажигают по одной
          в неделю, предвкушая грядущий праздник. В Сочельник ходят на церковные службы, а 25 декабря устраивают теплые
          семейные пиршества.

        </p>
          <p>Новый год встречают, почти как мы: пьют шампанское под бой курантов, меняются подарками, запускают в небо
            фейерверки, вот только телепоздравление читает не президент, а королева. Еще один зимний праздник —
            Масленица перед долгим постом: ребятня наряжается в костюмы и распевает на улицах песни, выпрашивая конфеты
            и монетки в благодарность. Главные государственные торжества — День битвы при Дюббёле 18 апреля и День
            конституции 5 июня.</p>
          <p>23 июня — языческий День святого Ханса с радостными гуляньями и плясками вокруг костров. Майский
            Ольборгский карнавал — грандиозный калейдоскоп костюмов и талантов. В преддверии осени в столицу съезжаются
            гурманы со всего мира: гастрофест Copenhagen Cooking — торжество скандинавской кухни. В летнем Роскилле
            гремит одна из главных европейских рок-тусовок, а во Фредерикссунне — зрелищный фестиваль викингов. Кстати,
            ярмарки, посвященные культуре и нравам могучих воинов, проходят во многих городах от Орхуса до Ольборга.</p>
        </nav>}

        //City
        img1={prazdn}
        information={'Праздник Дуду проводится в Монсе. Традиционно он отмечается в день религиозного праздника Троицы на 57-й день после Пасхи и длится целую неделю. Праздник Дуду символизирует победу чумы, которая в средние века терроризировала всю Европу. Праздник имеет два основных направления – религиозное и светское.\n' +
        'Впервые праздник Дуду был проведен в 1349-м году, тогда в Монсе появилась чума, и было принято решение об изгнании болезни из города с помощью религиозного шествия. Через несколько лет шествие стали проводить каждый год в память о чуде.\n' +
        '\n' +
        'В конце 14-го столетия к участникам праздника присоединились члены общества Святого Георгия, которые привнесли в религиозное шествие элементы театрального искусства. В частности, с этого момента начали проводить инсценировку битвы Святого Георгия с драконом. Правда, в 19-м веке праздник разделили на две составляющие – религиозную и светскую.\n' +
        'В субботу перед праздником проходит спуск раки с мощами святой Вудру и торжественная процессия проходит через город к главной площади. А уже в воскресенье начинается торжественное шествие, во главе колонны едет колесница с ракой, а за ней идут тысячи людей, одетых в средневековые костюмы. В это же воскресенье проходит и битва с драконом. Такие битвы проводятся не только в Монсе, они представляют собой тщательно отрепетированной мероприятие, собирающие огромное количество зрителей.'}
        img2={prazdn2}
        information1={'Праздник Оммеганг, который проводится в бельгийской столице Брюсселе, относится в группе так называемых фольклорных праздников. Он проводится с 30-го июня по 2-е июля. Празднику Оммеганг уже несколько веков. Первое упоминание о празднике датируется 1359-м годом, но тогда это был не праздник, а религиозное шествие. Кстати, слово «оммеганг» как раз и обозначает «обход» вокруг чего-либо, в данном случает вокруг церкви.\n' +
        '\n' +
        'Спустя 200 лет праздник превратился из религиозного в общенародный. В 1549-м году Бельгию посетил Карл V Габсбург, в честь которого на главной площади города собрались представители всех городских сословий. Со временем религиозная подоплека праздника забылась напрочь, и Оммеганг превратился в костюмированное представление, призванное показать блеск и красоту Брюсселя.\n' +
        'Впоследствии Оммеганг несколько утерял свое значение и даже был период, когда праздник не проводился, но в 1930 году традицию возродили снова. В эти дни на главной площади Брюсселя, Гранд-Плас сооружается средневековая деревня, участники праздника наряжаются в костюмы 16-го века.\n' +
        'В первый и последний день праздника проводится шествие всех его участников от церкви Notre Dame du Sablon к Гранд-Плас, на которой в 21.00 будет грандиозное представление. Представление является платным, от 30 до 60 евро, а вот шествия можно смотреть бесплатно.\n' +
        '\n'}
        img3={prazdn3}
        information2={'Основным и самым главным праздником страны является День Бельгии, который отмечается 21 июля. В этот день Бельгия стала независимым государством. Произошло это знаменательное событие 21 июля 1831 года, в этот день Леопольд I, первый король Бельгии, принял присягу на верность народу.\n' +
        'Этому событию предшествовали принятие декларации о независимости Бельгии осенью 1830 года и принятие конституции в феврале 1831 года, по которой Бельгия была признана конституционной монархией. Серьезные споры возникли по поводу выбора монарха, выбранный парламентом французский принц стал предметом международного конфликта, разрешением которого стал Леопольд I, родственник королевы Виктории.\n' +
        '\n' +
        'В День Бельгии на Гранд-Плас, главной площади Брюсселя, проводится военный парад, после которого по улицам города начинаются народные гуляния. Они сопровождаются игрой оркестров, выступлением музыкантов, актеров, клоунов. Завершается праздник грандиозным салютом на Гранд-Плас.\n' +
        'В других городах проводится тоже самое, только с меньшим размахом и без военного парада. Например, в Генте ко Дню Бельгии приурочен танцевальный фестиваль. Большим плюсом для туристов является возможность бесплатно посетить некоторые столичные музеи, которые по случаю праздника распахивают свои двери перед всеми желающими.\n' +
        '\n'}


        cityName={'Копенгаген'}
        info_city={<nav><p>Во всем мире Копенгаген известен как город Ганса Христиана Андерсена, поэтому главный символ
          датской столицы — памятник Русалочке. Это самый посещаемый город не только в Дании, но и во всей Скандинавии.
          Он расположен на заливе, и от него легко добраться до Стокгольма и Осло, а также до Германии, Нидерландов и
          Польши.</p>
          <p>Копенгаген — очень компактный и уютный город, в нем почти нет небоскребов, зато много старинных домиков,
            парков и набережных. В центре города расположена одна из самых длинных пешеходных улиц Европы — Строгет. В
            Копенгагене будет комфортно как пешим туристам, так и велосипедистам: половина населения передвигается на
            двух колесах, общая протяженность велодорожек превышает 400 км. На весну и лето приходится большинство
            культурных событий: Фестиваль Ночного кино, Джазовый фестиваль и знаменитый Копенгагенский карнавал.</p>
        </nav>}
        info_city1={<nav><p>Город поделен на районы, из которых туристов интересует в первую очередь Старый Копенгаген
          (Индре-Бай, средневековый город или просто Центр) с его церковными шпилями, историческими зданиями и узкими
          аллеями. Кристиансхавн изначально был рабочим районом, а теперь славится своими каналами и Христианией —
          Свободным городом, расположенным в восточной его части, рядом с модным Хольменом.</p>
          <p>Вестербро — одно из хипповых мест с обилием кафе и баров, разбросанных по его главной артерии — Истедгаде.
            Фридериксберг окружает одноименный замок; Норребро — весьма оживленная часть Копенгагена (здесь живут
            студенты, иммигранты и рабочий класс). Остербро примечателен «домом» знаменитой Русалочки, цитаделью
            Кастеллет и многочисленными пирсами для круизных лайнеров и яхт.</p>
        </nav>}
        info_city2={<nav><p>Жители России в основном добираются до датской столицы по воздуху: это самый быстрый и
          дешевый вариант. Больше возможностей у москвичей: выполняется примерно 20 рейсов в день. Жителям Северной
          столицы доступны только перелеты со стыковками. Все самолеты прибывают в международный аэропорт города
          Каструп. Прямого железнодорожного и автобусного сообщения между российскими городами и Копенгагеном нет,
          однако из Москвы можно доехать на поезде с пересадкой в одной из европейских столиц. Этот вариант будет более
          затратным как по времени, так и по деньгам. </p></nav>}
        info_city3={<nav><p>Самые известные Достопримечательности Копенгагена расположены в центре. Маршрут большинства
          туристов обычно начинается от памятника Русалочке, что у входа в Копенгагенскую гавань. Моделью для скульптора
          Эдварда Эриксена была известная датская балерина начала 20 века. Если развернуться спиной к статуе,
          открывается вид на крепость Кастеллет, расположенную на острове в форме 5-конечной звезды. Она была построена
          в 17 веке, но до сих пор находится в ведении Министерства обороны Дании: форт охраняется солдатами, на насыпях
          стоят старинные пушки, которыми не пользовались более века. По соседству с крепостью стоит фонтан Гефион,
          посвященный скандинавской богине плодородия. Согласно преданию, благодаря ей появился остров Зеландия,
          входящий в состав современной Дании.</p>
          <p>На набережной расположился дворцовый ансамбль Амалиенборг — визитная карточка Дании и официальная
            резиденция монархов. В комплекс входят 4 одинаковых дворца, расположенных друг напротив друга, и площадь с
            памятником королю Фредерику V. Здесь также работают музеи: во дворцах Кристиана VII и Кристиана VIII. Каждый
            день, в 11:30, из дворца Розенборг выходят Королевские Гвардейцы для торжественной смены караула.
          </p>
          <p>Одно из самых романтических мест для прогулок в Копенгагене — Новая гавань. Набережную украшают
            разноцветные домики 17 века. В некоторых из них жил Ганс Христиан Андерсон. Прибрежная полоса усыпана кафе и
            ресторанчиками, но цены в них довольно высокие.

          </p></nav>}
        //Достопримечательности
        lionName={'Эйфелева башня'}
        lionInfo={'Сейчас уже никто не может представить Париж без Эйфелевой башни, и большинство парижан если и не полюбили ее, то, во всяком случае, сумели с ней смириться. Но так было далеко не всегда — после постройки она вызывала сильное недовольство у многих горожан, находивших ее крайне несуразной. Гюго и Мопассан, например, неоднократно настаивали на том, что башню следует убрать с улиц Парижа.\n' +
        '\n' +
        'Первоначально сооружение планировали разобрать в 1909 г., через 20 лет после возведения — но после ошеломительного коммерческого успеха башня получила «вечную прописку».\n' +
        '\n' +
        'Тем не менее, у большинства туристов Эйфелева башня неизменно вызывает восхищение. Даже спустя 120 лет она остается самым высоким сооружением в Париже и пятым по высоте во всей Франции. Несмотря на величественные размеры, ее общий вес не превышает 10 тыс. тонн, она оказывает давление за землю, равное давлению сидящего на стуле человека, а если весь металл башни переплавить в единый блок, он займет площадь 25 на 5 м и будет всего 6 см в высоту! Впрочем, в наше время на возведение аналогичной конструкции и вовсе потребовалось бы втрое меньше металла — технологии не стоят на месте.'}
        photoLion={lion1}
        lionName1={'Лувр'}
        lionInfo1={<p>Почти 10 млн людей ежегодно стремятся в Лувр не только ради Моны Лизы и Венеры
          Милосской.
          Музей предлагает для осмотра 35 000 полотен, статуй, фресок, гравюр, эстампов. И это лишь малая
          часть: всего в фондах музея их треть миллиона (картина в среднем экспонируется три месяца, а
          затем
          отправляется в запасник во избежание порчи — атмосфера в публичных залах вредит сохранности
          полотен). Если вы сильны, выносливы и готовы потратить на осмотр до 10 часов — каждому экспонату
          достанется не более секунды вашего времени. Отсюда логичный вывод: планировать осмотр нужно
          заранее
          (и заодно расстаться с идеей осмотреть все).</p>}
        photoLion1={lion2}
        //Фото города
        Cityimg1={lion1}
        Cityimg2={cityPhoto}
        Cityimg3={img}
        informationPhotoCity={'Эйфелева башня'}
        informationPhotoCity1={'Ночной париж'}
        informationPhotoCity2={'SS'}
        text={'Какой город является столицей Франции'}
        text1={'Ницца'}
        text2={'Париж'}
        text3={'Марсель'}
        vopros={'Что иозображенно на фотографии'}
        text4={'Версальский дворец'}
        text5={'Лувр'}
        text6={'Нотр-Дам-де-Пари'}
        imgAnsw={lion2}/>
    )

    return (
      <div>
        {/*<div id="main" className="wrapper style3">*/}
        {/*<div className="container">*/}
        {/*<header className="major">*/}
        {/*<h2 id="countryName">Дания</h2>*/}
        {/*</header>*/}
        {/*<div className="row 150%">*/}
        {/*<div className="8u 12u$(medium)">*/}
        {/*<section id="content">*/}
        {/*<a href="#" className="image fit"><img src={img} alt=""/></a>*/}
        {/*</section>*/}
        {/*</div>*/}
        {/*<div className="4u$ 12u$(medium)">*/}

        {/*<section id="sidebar">*/}
        {/*<section>*/}
        {/*<h3 id="countryName">Дания</h3>*/}
        {/*<p id="countryInfo">Сказочная Дания — жемчужина Скандинавии. Отдых на пляжах*/}
        {/*Датской Ривьеры и экскурсии по достопримечательностям Копенгагена, пряничные*/}
        {/*фермы и старинные крепости, спа-отели, морские круизы и парк развлечений*/}
        {/*Леголенд. Все о Дании: виза, туры, карты и фото.</p>*/}
        {/*</section>*/}
        {/*<hr/>*/}
        {/*</section>*/}

        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*</div>*/}
        <section id="HotTurs1">
          <Navbar/>
          {mainContent}
          {/*<Template toggleMap={this.toggleMap} content={mainContent}/>*/}
        </section>
      </div>


    )
  }
}

export default Denmark
