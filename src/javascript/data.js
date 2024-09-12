import { defineStore } from 'pinia'

export const useStore = defineStore('useData', {
  state: () => ({
    language: 'en',
    course: {
      en: 'course programme:',
      ru: 'программа курса:'
    },
    button: {
      en: 'learn more',
      ru: 'узнать подробности'
    },
    drachmas: {
      en: 'drachmas',
      ru: 'драхм'
    },
    courseYes: {
      en: 'buy',
      ru: 'купить'
    },
    courseNo: {
      en: 'not now',
      ru: 'не сейчас'
    },
    header: {
      title: {
        en: 'classical education - from the classics!',
        ru: 'классическое образование - от классиков!'
      },
      subtitle: {
        en: 'Ministry of Education of Ancient Greece',
        ru: 'министерство образования древней греции'
      }
    },
    professorsHeading: {
      en: 'our professors',
      ru: 'наши профессора'
    },
    teacher: {
      en: 'professor',
      ru: 'профессор'
    },
    total: {
      en: 'total :',
      ru: 'итого :'
    },
    courseFree: {
      Thales: 0,
      Parmenid: 0,
      Geraclit: 0,
    },
    onChosen: {
      en: 'no course has been chosen',
      ru: 'ни один курс не выбран'
    },
    professors: [
      {
        image: '../images/Fales.png',
        title: {
          en: 'Thales',
          ru: 'Фалес'
        },
        years: '~625 ~547',
        bc: {
          en: 'BC.',
          ru: 'до н.э.'
        },
        description: {
          en: 'In addition to clear mind work, this instructor will introduce you to mental safety techniques, how not to get hit in the gym just by watching other athletes. After all, every thought is material',
          ru: 'Помимо четкой работы ума этот преподаватель познакомит вас с техникой ментальной безопасности, как не получить удар в тренажерном зале, просто наблюдая за другими атлетами. Ведь всякая мысль- материальна'
        },
        question1: {
          en: 'Ideological reasons for the childfree movement',
          ru: 'Идеологические причины движения чайлдфри'
        },
        answer1: {
          en: '~it`s not worth having children if you really love them',
          ru: '~ не стоит обзаводится детьми, если вы действительно любите их'
        },
        question2: {
          en: 'How to choose the right age for marriage?',
          ru: 'Как правильно выбрать возраст для вступления в брак?'
        },
        answer2: {
          en: '~ there are two correct answers to this question: it`s too soon, or it`s too late',
          ru: '~ есть два правильных ответа на этот вопрос: слишком рано, или уже слишком поздно'
        },
        question3: {
          en: 'Do they, the people have ‘the one’?',
          ru: 'А у них, народ "тот"?'
        },
        answer3: {
          en: '~ The worst are in the majority everywhere',
          ru: '~ Худших везде большинство'
        },
        question4: {
          en: 'How is the living different from the non-living?',
          ru: 'Чем живое отлично от неживого?'
        },
        answer4: {
          en: '~ Death is no different from life. So why,’ someone asked, ’don`t you die? Precisely because there is no difference',
          ru: '~ Смерть ничем не отличается от жизни. Так почему же, — спросил кто-то, — ты не умираешь? Именно потому, что разницы никакой'
        },
        buyCourse: {
          en: 'Would you like to enrol on a Thales course?',
          ru: 'Вы желаете записаться на курс Фалеса?'
        },
        costCourse: 80,
        courseFree: 0,
        positionLeft: false
      },
      {
        image: '../images/Parmenid.png',
        title: {
          en: 'Parmenid',
          ru: 'Парменид'
        },
        years: '~540 ~470',
        bc: {
          en: 'BC.',
          ru: 'до н.э.'
        },
        description: {
          en: 'Among other things, the founder of the school of Italian rhetoric will teach his listeners how, even in the most heated argument, to wave their arms without sprains and strains',
          ru: 'Кроме всего прочего, основатель школы итальянской риторики научит своих слушателей как, даже в самом жарком споре махать руками, без вывихов и растяжений'
        },
        question1: {
          en: 'What is being, and why is there no non-being?',
          ru: 'Что есть бытие, и почему небытия нет?'
        },
        answer1: {
          en: '~ either a hundred drachmas are in my pocket or they`re not',
          ru: '~ либо сто драхм лежат в моем кармане, либо их там нет'
        },
        question2: {
          en: 'Why is it worth living one day at a time?',
          ru: 'Почему стоит жить одним днем?'
        },
        answer2: {
          en: '~ no past already exists, therefore it cannot exist. The same logic is true for the future - it does not exist yet, therefore it cannot be discussed',
          ru: '~ никакого прошлого уже не существует, поэтому его и не может быть. Та же логика верна и для будущего – его еще не существует, следовательно, и о нем не может быть речи'
        },
        question3: {
          en: 'Why is being still? And lying on the sofa is not only useful, but the only thing possible in our world?',
          ru: 'Почему бытие неподвижно? А лежание на диване не только полезно, но и единственно возможно в нашем мире?'
        },
        answer3: {
          en: '~ being is fixed, eternal and unchanging',
          ru: '~ бытие неподвижно, вечно и неизменно'
        },
        question4: {
          en: 'Why is it that not only can you believe nothing in this world, but even your eyes and ears can deceive you?',
          ru: 'Почему ни только нельзя ничему верить в этом мире, но даже ваши глаза и уши могут вас обманывать?'
        },
        answer4: {
          en: '~ all the various phenomena that are observed in life are mere appearances to the imperfect human mind',
          ru: '~ все разнообразные явления, которые наблюдаются в жизни, суть всего лишь видимость для несовершенного человеческого разума'
        },
        buyCourse: {
          en: 'Are you interested in enrolling in a Parmenides course?',
          ru: 'Вы желаете записаться на курс Парменида?'
        },
        costCourse: 200,
        courseFree: 0,
        positionLeft: true
      },
      {
        image: '../images/Geraclit.png',
        title: {
          en: 'Geraclit',
          ru: 'Гераклит'
        },
        years: '~544 ~483',
        bc: {
          en: 'BC.',
          ru: 'до н.э.'
        },
        description: {
          en: 'In additional lessons with this teacher you will learn some of the secrets of traditional medicine. How you can easily and simply cure almost all incurable diseases with the help of cow dung and sunshine alone',
          ru: 'На дополнительных занятиях с этим преподавателем вы постигнете некоторые тайны народной медицины. Как можно легко и просто вылечится практически ото всех неизлечимых хворей при помощи одного лишь коровьего навоза и солнца'
        },
        question1: {
          en: 'Why does money slip through your fingers like sand?',
          ru: 'Почему деньги ускользают как песок сквозь пальцы?'
        },
        answer1: {
          en: '~ everything flows, everything changes',
          ru: '~ все течет все изменяется'
        },
        question2: {
          en: 'Will there be peace on earth or is humanity doomed to doom and self-destruction?',
          ru: 'Наступит ли мир на земле или человечество обречено на гибель и саморазрушение?'
        },
        answer2: {
          en: '~ war is the mother of all things and the master of all things',
          ru: '~ война есть мать всего и повелительница всего'
        },
        question3: {
          en: 'Why do people not appreciate the really important things, but spend so much effort and money on useless and passing tinsel?',
          ru: 'Почему люди не ценят действительно важные вещи, а тратят столько сил и средств на бесполезную и проходящую мишуру?'
        },
        answer3: {
          en: '~ Pigs enjoy mud more than clean water',
          ru: '~ Свиньи грязью наслаждаются больше, чем чистой водой'
        },
        question4: {
          en: 'What is the most permanent thing in our world?',
          ru: 'Что есть самое постоянное в нашем мире?'
        },
        answer4: {
          en: '~ nothing is permanent but change',
          ru: '~ нет ничего постоянного, кроме изменений'
        },
        buyCourse: {
          en: 'Would you like to enrol on a Geraclitus course?',
          ru: 'Вы желаете записаться на курс Гераклита?'
        },
        costCourse: 120,
        courseFree: 0,
        positionLeft: false
      }
    ],
    studentsHeading: {
      en: 'Testimonials from our students',
      ru: 'Отзывы наших учеников'
    },
    students: [
      {
        id: 'Pythagoras',
        image: '../images/Pithagoras.png',
        title: {
          en: 'Pythagoras of Samos',
          ru: 'Пифагор Самосский'
        },
        years: '~570 ~490',
        bc: {
          en: 'BC.',
          ru: 'до н.э.'
        },
        description: {
          en: 'Occupation (Olympic boxing champion, musician)',
          ru: 'Род деятельности (Олимпийский чемпион по боксу, музыкант)'
        },
        question1: {
          en: 'What did you learn on the course?',
          ru: 'Чему вы научились на курсах?'
        },
        answer1: {
          en: 'I remember with unprecedented enthusiasm my studies in cut and sewing. Making fancy trousers is not an easy task without the experience of precise calculations.',
          ru: 'С небывалым восторгом вспоминаю мою учебу на курсах кройки и шитья. Пошить модные штаны не такая и простая задача без опыта точных расчетов.'
        },
        question2: {
          en: 'Also, what other positive experiences have you had at our lyceum?',
          ru: 'А еще, какой положительный опыт вы приобрели в нашем лицее?'
        },
        answer2: {
          en: 'The ability to prove a point. I was especially good at the straight right. To bring down any bull with one blow, for me, it was never an impossible task.',
          ru: 'Умение доказать свою точку зрения. Особенно у меня хорошо получался прямой справа. Свалить любого быка одним ударом, для меня, это никогда не было невыполнимой задачей.'
        },
        positionLeft: false
      },
      {
        id: 'Macedonian',
        image: '../images/Macedonian.png',
        title: {
          en: 'Alexander the Great',
          ru: 'Александр Македонский'
        },
        years: '~356 ~323',
        bc: {
          en: 'BC.',
          ru: 'до н.э.'
        },
        description: {
          en: 'Occupation (famous traveller)',
          ru: 'Род деятельности (известный путешественник)'
        },
        question1: {
          en: 'What did you learn on the course?',
          ru: 'Чему вы научились на курсах?'
        },
        answer1: {
          en: 'I was the first to notice that something was wrong with Europe and it was time to turn our eyes towards Asia. There`s a milder climate and more available girls.And you can ride elephants.The only bad thing is the mosquitoes are too vicious...',
          ru: 'Я первый заметил, что что-то неладное с Европой и пора повернуть свой взор в сторону Азии. Там и климат мягче, и девки доступнее. А еще, можно на слонах прокатится. Одно плохо- комары слишком злые...'
        },
        question2: {
          en: 'How do you advise to act when a problem seems insoluble? What techniques and methods of solution can you recommend to the new generation of thinkers?',
          ru: 'Как вы посоветуете поступать, если задача кажется неразрешимой? Какие приемы и методы решения вы можете рекомендовать новому поколению мыслителей?'
        },
        answer2: {
          en: 'If the task seems unsolvable, my advice is to chop it into pieces!',
          ru: 'Если задача кажется не разрешимой, то мой совет один- рубить ее на части!'
        },
        positionLeft: true
      },
      {
        id: 'Vasyan',
        image: '../images/Vasyan.jpg',
        title: {
          en: 'Vasyan',
          ru: 'Вассян'
        },
        years: '~ 2000',
        bc: {
          en: 'A.D.',
          ru: 'н.э.'
        },
        description: {
          en: 'Occupation (service worker)',
          ru: 'Род деятельности (работник сферы услуг)'
        },
        question1: {
          en: 'What did you learn on the course?',
          ru: 'Чему вы научились на курсах?'
        },
        answer1: {
          en: 'My main achievements, I believe, have been: mastering a competent speech, well-developed diction, and deep development of oratorical skills. Now I can conduct a dialogue with practically any interlocutor and speak in front of a large audience without getting lost.',
          ru: 'Главными моими достижениями, я считаю, стало: освоение грамотной речи, развитой дикции, глубокой проработкой ораторских навыков. Сейчас я могу вести диалог практически с любым собеседником, и совершенно не теряясь выступить перед большой аудиторией.'
        },
        question2: {
          en: 'Has it been of much use to you in your life?',
          ru: 'Это вам сильно пригодилось в жизни?'
        },
        answer2: {
          en: 'Oh, yeah! Listen to this. Free-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o!',
          ru: 'А как же! Вы только послушайте... Сво-бодна-я КАССА!!!'
        },
        positionLeft: false
      }
    ],
    basket: {
      basketOpen: false,
      title: {
        en: 'basket',
        ru: 'корзина'
      },
      farewell: {
        one: {
          en: 'excellent.',
          ru: 'отлично.'
        },
        two: {
          en: 'we look forward to seeing you in class!',
          ru: 'ждем вас на занятиях!'
        },
        three: {
          en: 'in the first Boedromion of 345 BC.',
          ru: 'в первый Боэдромион 345 года до н.э.'
        },
        four: {
          en: 'Don`t be late!',
          ru: 'не опаздывайте!'
        },
      }
    },
    numGoods: 0
  }),
  getters: {},
  actions: {},
})