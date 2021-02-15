import { h } from "./utilities/view"
import { dispatchAction, Action } from "./action"
import { TodoPriority } from "./model"

export function newProject() {
  return h("form")({
    id: "new-project",
    onsubmit: (event) => {
      event.preventDefault()
      dispatchAction(Action.CreateProject)
    },
  })([
    h("label")({ for: "name" })(["Create Project: "]),
    h("input")({ name: "name", id: "name", placeholder: "Project Name" })(),
  ])
}

export function showProjects(projects) {
  return projects.map((project) => showProject(project))
}

export function showProject({ id, name, todos }) {
  return h("ul")()([
    h("li")()([h("span")()([name, ": ", newTodo(id)]), showTodos(todos)]),
  ])
}

export function newTodo(projectId) {
  const form = h("form")({
    className: "new-todo",
    style: "display: inline;",
    onsubmit: (event) => {
      event.preventDefault()
      dispatchAction(Action.CreateTodo, { projectId })
    },
  })([
    h("input")({
      name: "name",
      id: "name",
      placeholder: "New Todo Name",
    })(),
    h("label")({ for: "priority" })(["Priority: "]),
    h("select")({ name: "priority", id: "priority" })([
      ...Object.values(TodoPriority).map((priority) =>
        h("option")({ value: priority })([priority]),
      ),
    ]),
  ])
  form.dataset.projectId = projectId
  return form
}

export function showTodos(todos) {
  return h("ol")()([...todos.map((todo) => showTodo(todo))])
}

export function showTodo({ name }) {
  return h("li")()([name])
}
