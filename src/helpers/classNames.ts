type Mods = Record<string, boolean|string> //кортеж (строка: true)

//ф-ция для склеивания классов по условию - возвр. строку
//принимает: осн. класс, обьект с названием-true/false, массив классов
export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods) //получили массив объектов ключ-значение
            .filter(([className, value]) => Boolean(value)) //отфильтровали кортеж где value-true
            .map(([className]) => className) //возвратили ключ из кортежа
    ].join('')

}

//classNames('remove-btn', {hovered: false, red: true}, ['pdg'])