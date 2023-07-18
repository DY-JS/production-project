type Mods = Record<string, boolean | string> // кортеж (строка: true)

// ф-ция для склеивания классов по условию - возвр. строку
// принимает: осн. класс, обьект с названием-true/false, массив классов
// export function classNames (cls: string, mods: Mods, additional: string[]): string {
//   // mods и additional будет необязательный
//   return [
//     cls,
//     ...Object.entries(mods) // получили массив объектов ключ-значение
//       .filter(([_, value]) => Boolean(value)) // отфильтровали кортеж где value-true
//       .map(([className]) => className) // возвратили ключ из кортежа
//     ...additional.filter(Boolean), // будет необязательный
//   ].join(' ')
// }

export function classNames (cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean) // Add the missing comma here
  ].join(' ')
}

// classNames('remove-btn', {hovered: false, red: true}, ['pdg'])
