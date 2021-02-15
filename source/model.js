export function Project({ name, todos }) {
  this.id = Date.now()
  this.name = name
  this.todos = todos || []
}

export function Todo({ name, priority, status }) {
  this.id = Date.now()
  this.name = name
  this.status = status || TodoStatus.Todo
  this.priority = priority || TodoPriority.Low
}

export const TodoPriority = {
  High: "High",
  Medium: "Medium",
  Low: "Low",
}

export const TodoStatus = {
  Todo: "Todo",
  InProgress: "InProgress",
  Completed: "Completed",
}

const initialState = JSON.parse(localStorage.getItem("state")) || {
  projects: [],
}

const stateChangedEvent = new Event("stateChange")

const stateReactor = {
  get: function (object, property) {
    // Trap Nested Objects
    if (typeof object[property] === "object" && object[property] !== null) {
      return new Proxy(object[property], stateReactor)
    } else return object[property]
  },

  set: function (object, property, value) {
    // The default behavior to store the value
    object[property] = value

    // Any time `State` is mutated, save it to localStorage
    localStorage.setItem("state", JSON.stringify(State))

    // Dispatch event stating that State has changed
    _.dispatchEvent(stateChangedEvent)

    // Success
    return true
  },
}

export const State = new Proxy(initialState, stateReactor)
