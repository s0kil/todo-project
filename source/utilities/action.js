import { _ } from "../aid"

export function renderView(htmlElements) {
  _.body.innerHTML = null

  if (htmlElements instanceof Array) {
    // Render Array Of Elements
    const fragment = _.createDocumentFragment()
    htmlElements.forEach((htmlElement) => fragment.append(htmlElement))
    _.body.append(fragment)
  } else {
    // Render An Element
    _.body.append(htmlElements)
  }
}

export function form(formSelector, fields = []) {
  const formData = new FormData($(formSelector))
  return fields.reduce((object, field) => {
    object[field] = formData.get(field)
    return object
  }, {})
}
