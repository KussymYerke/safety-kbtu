window.addEventListener('DOMContentLoaded', function() {
    const referringPage = document.referrer;

    let language = 'en'; // Default language is English

    if (referringPage.includes(ruPageUrl)) {
        language = 'ru'; // Russian
    } else if (referringPage.includes(kzPageUrl)) {
        language = 'kz'; // Kazakh
    }

    const roomName = document.querySelector('.firstroom h5');
    const roomsecond = document.querySelector('.secondroom h5');
    const roomthird = document.querySelector('.thirdroom h5');
    const roomfourth = document.querySelector('.fourthroom h5');
    const roomfifth = document.querySelector('.fifthroom h5');
    const roomsixth = document.querySelector('.sixthroom h5');
    const roomseventh = document.querySelector('.seventhroom h5');

    const roomfirst_four = document.querySelector('.firstroom_fourthfloor h5');
    const roomsecond_four = document.querySelector('.secondroom_fourthfloor h5');
    const roomthird_four = document.querySelector('.thirdroom_fourthfloor h5');
    const roomfourth_four = document.querySelector('.fourthroom_fourthfloor h5');
    const roomfifth_four = document.querySelector('.fifthroom_fourthfloor h5');
    const roomsixth_four = document.querySelector('.sixthroom_fourthfloor h5');
    const roomseventh_four = document.querySelector('.seventhroom_fourthfloor h5');
    const roomeigth_four = document.querySelector('.eigthroom_fourthfloor h5');
    const roomninth_four = document.querySelector('.ninthroom_fourthfloor h5')

    const roomtole = document.querySelectorAll('.tolebix')

    const roompanfilfour = document.querySelectorAll('.panfilovfour')
    const roomkazybekfour = document.querySelectorAll('.kazybekfour')
    const roomabylkfour = document.querySelectorAll('.abfour')
    const roomtolebifour = document.querySelectorAll('.tolebifour')

    const roomtolebithree = document.querySelectorAll('.tolebithree')
    const roomtbpanfthree = document.querySelectorAll('.tolebipanfilovthree')
    const roompanfilthree = document.querySelectorAll('.panfilovthree')

    const roomfirst_thirdfl = document.querySelector('.first_thirdfloor h5')
    const roomsecond_thirdfl = document.querySelector('.second_thirdfloor h5')
    const roomthird_thirdfl = document.querySelector('.third_thirdfloor h5')
    const roomfourth_thirdfl = document.querySelector('.fourth_thirdfloor h5')
    const roomfifth_thirdfl = document.querySelector('.fifth_thirdfloor h5')


    

    const roomtolebitwo = document.querySelectorAll('.tolebitwo')
    const roompanfitwo = document.querySelectorAll('.panfilovtwo')
    const roomkazybektwo = document.querySelectorAll('.kazybektwo')
    const roomabylktwo = document.querySelectorAll('.abtwo')

    const roomfirst_secondfl = document.querySelector('.first_secondfloor h5')
    const roomsecond_secondfl = document.querySelector('.second_secondfloor h5')
    const roomthird_secondfl = document.querySelector('.third_secondfloor h5')
    const roomfourth_secondfl = document.querySelector('.fourth_secondfloor h5')
    const roomfifth_secondfl = document.querySelector('.fifth_secondfloor h5')
    const roomsixth_secondfl = document.querySelector('.sixth_secondfloor h5')
    const roomseventh_secondfl = document.querySelector('.seventh_secondfloor h5')
    const roomeigth_secondfl = document.querySelector('.eighthth_secondfloor h5')
    const roomninth_secondfl = document.querySelector('.ninth_secondfloor h5')


    const roomtolebione = document.querySelectorAll('.tolebione')
    const roompanfione = document.querySelectorAll('.panfilovone')
    const roomkazybekone = document.querySelectorAll('.kazybekone')
    const roomabylkone = document.querySelectorAll('.abone')

    const roomfirst_firstfl = document.querySelector('.first_firstfloor h5')
    const roomsecond_firstfl = document.querySelector('.second_firstfloor h5')
    const roomthird_firstfl = document.querySelector('.third_firstfloor h5')
    const roomfourth_firstfl = document.querySelector('.fourth_firstfloor h5')
    const roomfifth_firstfl = document.querySelector('.fifth_firstfloor h5')
    const roomsixth_firstfl = document.querySelector('.sixth_firstfloor h5')
    const roomseventh_firstfl = document.querySelector('.seventh_firstfloor h5')
    const roomeigth_firstfl = document.querySelector('.eight_firstfloor h5')
    const roomninth_firstfl = document.querySelector('.ninth_firstfloor h5')
    const roomtenth_firstfl = document.querySelector('.tenth_firstfloor h5')


    const roomtolebizero = document.querySelectorAll('.tolebizero')

    const roomfirst_zerothfl = document.querySelector('.first_zerothfloor h5')
    const roomsecond_zerothfl = document.querySelector('.second_zerothfloor h5');
    const roomthird_zerothfl = document.querySelector('.third_zerothfloor h5')
    const roomfourth_zerothfl = document.querySelector('.fourth_zerothfloor h5')
    const roomfifth_zerothfl = document.querySelector('.fifth_zerothfloor h5')

    if (language === 'ru') {
        roomtole.forEach((element) => {
            element.textContent = 'Толе би, 5-й этаж';
        });
        roomName.innerHTML = 'Отдел Учета,<br>Отчетности и Финансов';
        roomsecond.textContent = 'Кассовый аппарат';
        roomthird.innerHTML = 'Отдел Договоров<br> и Закупок';
        roomfourth.textContent = 'Офис';
        roomfifth.textContent = 'Отдел развития персонала';
        roomsixth.textContent = 'Юридический отдел';
        roomseventh.textContent = 'Финансовый директор';


        roompanfilfour.forEach((element) => {
            element.textContent = 'Панфилова, 4-й этаж';
        });
        roomkazybekfour.forEach((element) => {
            element.textContent = 'Казыбек Би, 4-й этаж';
        });
        roomabylkfour.forEach((element) => {
            element.textContent = 'Абылай Хана, 4-й этажa';
        });
        roomtolebifour.forEach((element) => {
            element.textContent = 'Толе Би, 4-й этаж';
        });
        roomfirst_four.innerHTML = 'Международная школа<br>экономики';
        roomsecond_four.innerHTML = 'Департамент<br>международизации';
        roomthird_four.textContent = 'Школа бизнеса';
        roomfourth_four.innerHTML = 'Вице-ректор по <br>инфраструктуре';
        roomfifth_four.innerHTML = 'Вице-ректор по <br>науке и инновациям';
        roomsixth_four.innerHTML = 'Вице-ректор по <br> академическим вопросам';
        roomseventh_four.innerHTML = 'Вице-ректор по социальным<br>и образовательным <br> вопросам';
        roomeigth_four.textContent = 'Ректор';
        roomninth_four.textContent = 'Зал Аль-Фараби';




        roomtolebithree.forEach((element) => {
            element.textContent = 'Толе Би, 3-й этаж';
        });
        roomtbpanfthree.forEach((element) => {
            element.innerHTML = 'Толе Би, 3-й этаж <br> Панфилова, 3-й этаж';
        });
        roompanfilthree.forEach((element) => {
            element.textContent = 'Панфилова, 3-й этаж';
        });
        roomfirst_thirdfl.innerHTML = 'ШКОЛА ЭНЕРГЕТИКИ И<br/>Нефтегазовой<br> промышленности';
        roomsecond_thirdfl.textContent = 'ШКОЛА ГЕОЛОГИИ';
        roomthird_thirdfl.innerHTML = 'ШКОЛА ЕСТЕСТВЕННЫХ И<br/>СОЦИАЛЬНЫХ НАУК';
        roomfourth_thirdfl.innerHTML = 'ШКОЛА ПРИМЕНЕННОЙ<br/>МАТЕМАТИКИ';
        roomfifth_thirdfl.textContent = 'МЕДИЦИНСКАЯ СЛУЖБА';



        roomtolebitwo.forEach((element) => {
            element.textContent = 'Толе Би, 2-й этаж';
        });
        roompanfitwo.forEach((element) => {
            element.textContent = 'Панфилова, 2-й этаж';
        });
        roomkazybektwo.forEach((element) => {
            element.textContent = 'Казыбек Би, 2-й этаж';
        });
        roomabylktwo.forEach((element) => {
            element.textContent = 'Абылай хана, 2-й этаж';
        });
        roomfirst_secondfl.textContent = 'ДВОРЕЦ НЕЗАВИСИМОСТИ';
        roomsecond_secondfl.textContent = 'ОФИС РЕГИСТРАТУРЫ';
        roomthird_secondfl.innerHTML = 'ДЕПАРТАМЕНТ<br/>ПРОДОЛЖАЮЩЕГО<br>ОБРАЗОВАНИЯ';
        roomfourth_secondfl.innerHTML = 'КАЗАХСКАЯ <br> МОРСКАЯ АКАДЕМИЯ';
        roomfifth_secondfl.innerHTML = 'ШКОЛА ИНФОРМАЦИОННЫХ<br/>ТЕХНОЛОГИЙ И<br/>ИНЖЕНЕРИИ';
        roomsixth_secondfl.innerHTML = 'МЕНЕДЖЕР ПО СИСТЕМЕ<br/>АВТОМАТИЗИРОВАННОГО<br/>КОНТРОЛЯ ';
        roomseventh_secondfl.innerHTML = 'КОВОРК ЗОНА №2';
        roomeigth_secondfl.innerHTML = 'ПРЕСС-ЦЕНТР АБАЯ';
        roomninth_secondfl.innerHTML = 'ДЕПАРТАМЕНТ<br/>СТУДЕНЧЕСКИХ ДЕЛ';

        
        
        roomtolebione.forEach((element) => {
            element.textContent = 'Толе Би, 1-й этаж';
        });
        roompanfione.forEach((element) => {
            element.textContent = 'Панфилова, 1-й этаж';
        });
        roomkazybekone.forEach((element) => {
            element.textContent = 'Казыбек Би, 1-й этаж';
        });
        roomabylkone.forEach((element) => {
            element.textContent = 'Абылай хана, 1-й этаж';
        });
        roomfirst_firstfl.innerHTML = 'ЦЕНТР КАРЬЕРЫ <br>ВЫПУСКНИКОВ'
        roomsecond_firstfl.innerHTML = "ОФИС ПСИХОЛОГА"
        roomthird_firstfl.innerHTML = 'ДЕПАРТАМЕНТ<br>МАРКЕТИНГА<br>И НАБОРА ПЕРСОНАЛА'
        roomfourth_firstfl.innerHTML = 'ПРИЕМНАЯ КОМИССИЯ'
        roomfifth_firstfl.innerHTML = 'ИНЖЕНЕР ПО ОХРАНЕ<br>ТРУДА И БЕЗОПАСНОСТИ'
        roomsixth_firstfl.innerHTML = 'СЛУЖБА РАЗВИТИЯ<br>БИЗНЕСА'
        roomseventh_firstfl.innerHTML = 'БИБЛИОТЕКА НАУКИ'
        roomeigth_firstfl.innerHTML = 'ДЕПАРТАМЕНТ<br>ИНФОРМАЦИОННЫХ<br>ТЕХНОЛОГИЙ'
        roomninth_firstfl.innerHTML = 'ШКОЛА <br>МАТЕРИАЛОВЕДЕНИЯ И<br>ЗЕЛЕНЫХ ТЕХНОЛОГИЙ'
        roomtenth_firstfl.innerHTML = 'КОВОРК ЗОНА №1 <br>HALYK ACADEMY '

        roomtolebizero.forEach((element) => {
            element.textContent = 'Толе Би, 0-й этаж';
        });
        roomfirst_zerothfl.innerHTML = "БЕЗОПАСНОСТЬ"
        roomsecond_zerothfl.textContent = "СТОЛОВАЯ"
        roomthird_zerothfl.textContent = "КОВОРК ЗОНА"
        roomfourth_zerothfl.textContent = "БУФЕТ"
        roomfifth_zerothfl.textContent = "ИГРОВАЯ ЛАБОРАТОРИЯ"




    } 
    else if (language === 'kz') {
        roomtole.forEach((element) => {
            element.textContent = 'Толе би, 5-ші қабат';
        });
        roomName.innerHTML = 'Учет, Есеп және Қаржы бөлімі';
        roomsecond.textContent = 'Кассовый аппарат';
        roomthird.innerHTML = 'Келісімтер мен Сатып алу бөлімі';
        roomfourth.textContent = 'Офис';
        roomfifth.textContent = 'Қызметкерлерді дамыту бөлімі';
        roomsixth.textContent = 'Үйірме бөлімі';
        roomseventh.textContent = 'Қаржы директоры';
    
        roompanfilfour.forEach((element) => {
            element.textContent = 'Панфилова, 4-ші қабат';
        });
        roomkazybekfour.forEach((element) => {
            element.textContent = 'Қазыбек Би, 4-ші қабат';
        });
        roomabylkfour.forEach((element) => {
            element.textContent = 'Абылай Қана, 4-ші қабат';
        });
        roomtolebifour.forEach((element) => {
            element.textContent = 'Толе Би, 4-ші қабат';
        });
        roomfirst_four.innerHTML = 'Мемлекеттік экономика мектебі';
        roomsecond_four.innerHTML = 'Халықаралықтандыру бөлімі';
        roomthird_four.textContent = 'Бизнес мектебі';
        roomfourth_four.innerHTML = 'Инфрақұрылым бойынша ректор орынбасары';
        roomfifth_four.innerHTML = 'Білім және инновациялар бойынша ректор орынбасары';
        roomsixth_four.innerHTML = 'Академиялық сауалдар бойынша ректор орынбасары';
        roomseventh_four.innerHTML = 'Әлеуметтік және білімдік сауалдар бойынша ректор орынбасары';
        roomeigth_four.textContent = 'Ректор';
        roomninth_four.textContent = 'Аль-Фараби залы';
    
        roomtolebithree.forEach((element) => {
            element.textContent = 'Толе Би, 3-ші қабат';
        });
        roomtbpanfthree.forEach((element) => {
            element.innerHTML = 'Толе Би, 3-ші қабат <br> Панфилова, 3-ші қабат';
        });
        roompanfilthree.forEach((element) => {
            element.textContent = 'Панфилова, 3-ші қабат';
        });
        roomfirst_thirdfl.innerHTML = 'Энергетика және Нефтегаз саласы мектебі';
        roomsecond_thirdfl.textContent = 'Геология мектебі';
        roomthird_thirdfl.innerHTML = 'Табиғи және әлеуметтік ғылымдар мектебі';
        roomfourth_thirdfl.innerHTML = 'Қолданбалы математика мектебі';
        roomfifth_thirdfl.textContent = 'Медицина қызметі';
    
        roomtolebitwo.forEach((element) => {
            element.textContent = 'Толе Би, 2-ші қабат';
        });
        roompanfitwo.forEach((element) => {
            element.textContent = 'Панфилова, 2-ші қабат';
        });
        roomkazybektwo.forEach((element) => {
            element.textContent = 'Қазыбек Би, 2-ші қабат';
        });
        roomabylktwo.forEach((element) => {
            element.textContent = 'Абылай қана, 2-ші қабат';
        });
        roomfirst_secondfl.textContent = 'Тәуелсіздік сарайы';
        roomsecond_secondfl.textContent = 'Регистратура офисі';
        roomthird_secondfl.innerHTML = 'Жалғау білім беру бөлімі';
        roomfourth_secondfl.innerHTML = 'Қазақ Теңіз Академиясы';
        roomfifth_secondfl.innerHTML = 'Ақпарат технологиялары мен инженерлік мектебі';
        roomsixth_secondfl.innerHTML = 'Автоматты бақылау жүйесі менеджері';
        roomseventh_secondfl.innerHTML = 'Коворк зона №2';
        roomeigth_secondfl.innerHTML = 'Абай пресс-мәркізі';
        roomninth_secondfl.innerHTML = 'Студенттік іс-шаралар бөлімі';
    
        roomtolebione.forEach((element) => {
            element.textContent = 'Толе Би, 1-ші қабат';
        });
        roompanfione.forEach((element) => {
            element.textContent = 'Панфилова, 1-ші қабат';
        });
        roomkazybekone.forEach((element) => {
            element.textContent = 'Қазыбек Би, 1-ші қабат';
        });
        roomabylkone.forEach((element) => {
            element.textContent = 'Абылай қана, 1-ші қабат';
        });
        roomfirst_firstfl.innerHTML = 'Тұтынушылар карьерасы мерекесі';
        roomsecond_firstfl.innerHTML = 'Психолог офисі';
        roomthird_firstfl.innerHTML = 'Маркетинг және адам табысы бөлімі';
        roomfourth_firstfl.innerHTML = 'Қабылдау комиссиясы';
        roomfifth_firstfl.innerHTML = 'Жұмыс және қауіпсіздік қамтамасыз ету инженері';
        roomsixth_firstfl.innerHTML = 'Бизнесді дамыту қызметі';
        roomseventh_firstfl.innerHTML = 'Білім библиотекасы';
        roomeigth_firstfl.innerHTML = 'Ақпарат технологиялары бөлімі';
        roomninth_firstfl.innerHTML = 'Үйлесімді материалдар мен жасыл технологиялар мектебі';
        roomtenth_firstfl.innerHTML = 'Коворк зона №1 Halyk Academy';

        roomtolebizero.forEach((element) => {
            element.textContent = 'Толе Би, 0-ші қабат';
        });
        roomfirst_zerothfl.innerHTML = 'Қауіпсіздік';
        roomsecond_zerothfl.textContent = 'Мамандық';
        roomthird_zerothfl.textContent = 'Коворк зона';
        roomfourth_zerothfl.textContent = 'Буфет';
        roomfifth_zerothfl.textContent = 'Ойын қорытындылары лабораториясы';    

        
        // Adjust content for Kazakh
    } else {
    }
});
