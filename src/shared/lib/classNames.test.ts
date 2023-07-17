import { classNames } from './classNames'

describe(classNames, () => {
  test('test1',() => {
    expect(classNames("someClass", {}, [])).toBe("someClass")
  })

  test('test2',() => {
    const exp = "someClass classes2 classes3"
    expect(classNames("someClass", {}, ['classes2', 'classes3'])).toBe(exp)
  })

  test('test3',() => {
    const exp = "someClass isVisible hovered classes2 classes3"
    expect(classNames("someClass", {isVisible: true, hovered: true}, ['classes2', 'classes3']))
        .toBe(exp)
  })
})
