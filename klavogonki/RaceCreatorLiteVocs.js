﻿function INSERT_OPTIONS(select) {
    var option = (value, text) => {
        var x = document.createElement('option');
        x.setAttribute('value', value);
        x.textContent = text;
        return x;
    }
    select.insert(option("normal", "✅ Обычный"));
    select.insert(option("noerror", "✅ Безошибочный"));
    select.insert(option("marathon", "✅ Марафон"));
    select.insert(option("chars", "✅ Буквы"));
    select.insert(option("sprint", "✅ Спринт"));
    select.insert(option("abra", "✅ Абракадабра"));
    select.insert(option("digits", "✅ Цифры"));
    select.insert(option("referats", "✅ Рефераты"));
    select.insert(option('62238', 'Цифросоточка'));
    select.insert(option('25856', 'Соточка'));
    select.insert(option('5539', 'Обычный in English'));
    select.insert(option('115606', 'Кибертекст 2.0'));
    select.insert(option('192', 'Частотный словарь'));
    select.insert(option('179169', 'Новый Ной'));
    select.insert(option('1789', 'Короткие тексты'));
    select.insert(option('188795', 'Книга'));
    select.insert(option('6018', 'Мини-марафон, 800 знаков'));
    select.insert(option('181536', 'Кибертекст: так что'));
    select.insert(option('1', 'Буквы "ва ол"'));
    select.insert(option('62586', 'One Hundred'));
    select.insert(option('179171', 'White Fang'));
    select.insert(option('6562', 'Кибертекст'));
    select.insert(option('12726', 'легкие обычки'));
    select.insert(option('203', '5000 самых частых слов'));
    select.insert(option('3714', 'Мизинцы+'));
    select.insert(option('8835', 'Мини-марафон in English'));
    select.insert(option('23329', 'Тексты 0-1 сложность'));
    select.insert(option('2', 'Буквы "фы дж"'));
    select.insert(option('38606', 'Периферия+'));
    select.insert(option('13589', 'Забористый'));
    select.insert(option('14878', 'Short Texts in English'));
    select.insert(option('13571', 'Упражнение №1'));
    select.insert(option('9590', 'А. Сапковский «Ведьмак»'));
    select.insert(option('10163', 'Кибертекст: Слова или дом'));
    select.insert(option('128247', 'УК.157.ент'));
    select.insert(option('128442', 'УК.351.ину'));
    select.insert(option('128420', 'УК.330.ичн'));
    select.insert(option('128453', 'УК.362.ску'));
    select.insert(option('128236', 'УК.146.уст'));
    select.insert(option('165701', 'Частотный чередующийся'));
    select.insert(option('128284', 'УК.194.нии'));
    select.insert(option('126198', 'Гарри Поттер и методы рационального мышления'));
    select.insert(option('1432', 'Частотный английский'));
    select.insert(option('128315', 'УК.225.стн'));
    select.insert(option('4', 'Буквы "еп нр"'));
    select.insert(option('128417', 'УК.327.нск'));
    select.insert(option('13572', 'Упражнение №2'));
    select.insert(option('127904', 'УК.31.ски'));
    select.insert(option('128319', 'УК.229.ких'));
    select.insert(option('127893', 'УК.20.ест'));
    select.insert(option('3122', 'Числа от 1 до 100'));
    select.insert(option('165646', 'SAMP captcha (цифры)'));
    select.insert(option('159569', 'Тренировка капчи для Arizona Rp'));
    select.insert(option('127974', 'УК.64.ист'));
    select.insert(option('127824', 'УК.3.енн'));
    select.insert(option('140910', 'Идиот'));
    select.insert(option('7548', 'Частотный для экстракиберов'));
    select.insert(option('3', 'Буквы "ми ть"'));
    select.insert(option('128351', 'УК.261.ект'));
    select.insert(option('4242', 'Русский Синхронизация'));
    select.insert(option('189438', 'Журавлёнок и молнии'));
    select.insert(option('226', 'Тренируем указательные'));
    select.insert(option('11429', 'The Lord Of The Rings'));
    select.insert(option('66804', 'Слова ы+я'));
    select.insert(option('133548', 'Генератор кибер-текстов'));
    select.insert(option('125670', 'Метаграммы. 2'));
    select.insert(option('67852', 'Указательные: соточка'));
    select.insert(option('22263', 'Бомботексты'));
    select.insert(option('9063', '«Мастер и Маргарита»'));
    select.insert(option('18702', '«Привычки на миллионы долларов»'));
    select.insert(option('46304', 'Гарри Поттер и Философский камень'));
    select.insert(option('1670', '(Да ну?) - "Ну да!"'));
    select.insert(option('103146', '6-ти буквенные слова'));
    select.insert(option('15444', 'Трансерфинг реальности'));
    select.insert(option('182146', 'time arz rp'));
    select.insert(option('31676', 'Частотный-3000 [English]'));
    select.insert(option('13584', 'Упражнение №6'));
    select.insert(option('74714', 'Гарри Поттер и Принц-полукровка'));
    select.insert(option('83559', 'Harry Potter and the Philosopher\'s Stone'));
    select.insert(option('13573', 'Упражнение №3'));
    select.insert(option('13583', 'Упражнение №5'));
    select.insert(option('163240', 'Криминальный талант'));
    select.insert(option('189437', 'Звёзды под дождём'));
    select.insert(option('124195', '5-letter words'));
    select.insert(option('60358', 'Цифры с тчк'));
    select.insert(option('13574', 'Упражнение №4'));
    select.insert(option('106487', 'Обычный испанский'));
    select.insert(option('693', 'Frequency list of pron'));
    select.insert(option('64438', 'English dynamics'));
    select.insert(option('88410', 'Сверхдлинные: восьмисоточка'));
    select.insert(option('9620', '1984'));
    select.insert(option('46660', '10000 частых словоформ'));
    select.insert(option('21357', 'Loser-тексты'));
    select.insert(option('168619', 'Цифры СИГНАЛЫ'));
    select.insert(option('187136', 'Несказанное, синее, нежное...'));
    select.insert(option('188287', 'Болото'));
    select.insert(option('5874', '850 базовых англ. слов.'));
    select.insert(option('64611', 'Купер «Кожаный чулок»'));
    select.insert(option('13585', 'Упражнение №7'));
    select.insert(option('31141', 'разгон торможение'));
    select.insert(option('931', 'Частотный словарь-2'));
    select.insert(option('104853', 'Harry Potter and the Order of the Phoenix'));
    select.insert(option('5', 'Буквы "ук гш"'));
    select.insert(option('4125', 'Русский Частотный'));
    select.insert(option('99072', 'Как перестать беспокоиться и начать жить'));
    select.insert(option('54838', 'ultraSHIFT'));
    select.insert(option('189227', 'ЧАК'));
    select.insert(option('7056', 'Мизинцы 60%'));
    select.insert(option('25130', 'Обычный итальянский'));
}