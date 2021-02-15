import { _ } from "../aid"

export function h(tagName) {
  const element = _.createElement(tagName)

  return function (attributes = {}) {
    for (const attribute in attributes) {
      element[attribute] = attributes[attribute]
    }

    return function (children = []) {
      for (const child of children) {
        element.append(child)
      }

      return element
    }
  }
}
