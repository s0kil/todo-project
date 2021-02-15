// Global Helpers

export function $(selector) {
  return _.querySelector(selector)
}

const _ = document
_.on = _.addEventListener
export { _ }
