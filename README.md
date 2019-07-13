# Mongoose-HW
Задание №1.
Создайте схему GameSchema со следующим описанием свойств:
•	name – строка, обязательное, длина от 1 до 20 символов
•	platform – строка, обязательное, длина от 2 до 30 символов
•	developers – массив строк
•	price – число, положительное, по умолчанию 0
Создайте модель с названием Game на основе схемы GameSchema.
Добавьте в модель Game, объекты со следующих содержимым:
name	platform	developers	price
Shatter	PC	[Sidhe Interactive]	10
Clutch	PC	[Targem Games]	10
Asteria	PC	[Legend Studio]	10
Zombi	Playstation 4	[Ubisoft Montpellier]	20
Doom	Playstation 4	[id Software]	20

Измените значение Price в следующих объектах модели:
name	platform	developers	price
Shatter	PC	[Sidhe Interactive]	15
Clutch	PC	[Targem Games]	10
Asteria	PC	[Legend Studio]	5
Zombi	Playstation 4	[Ubisoft Montpellier]	20
Doom	Playstation 4	[id Software]	40

Выведите в консоль все содержимое всех объектов модели
Получите объект модели, у которого name = Asteria
Выведите в консоль значение name всех объектов модели
Удалите все объекты модели, у которых platform = Playstation 4
