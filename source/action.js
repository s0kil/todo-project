import { Project, State, Todo } from "./model"
import { newProject, showProjects } from "./view"
import { renderView, form } from "./utilities/action"

export const Action = {
  ShowProjects: "ShowProjects",
  CreateProject: "CreateProject",
  CreateTodo: "CreateTodo",
}

document.addEventListener("stateChange", () => {
  dispatchAction(Action.ShowProjects)
})

export function dispatchAction(actionType, actionData = {}) {
  const { projects } = State

  switch (actionType) {
    case Action.ShowProjects:
      ;(function () {
        renderView([newProject(), ...showProjects(projects)])
      })()
      break

    case Action.CreateProject:
      ;(function () {
        const formData = form("form#new-project", ["name"])
        const project = new Project(formData)
        projects.unshift(project)
      })()
      break

    case Action.CreateTodo:
      ;(function () {
        const { projectId } = actionData
        const formData = form(`form.new-todo[data-project-id="${projectId}"]`, [
          "name",
          "priority",
        ])
        const todo = new Todo(formData)
        const project = projects.find((project) => project.id === projectId)
        project.todos.push(todo)
      })()
      break

    default:
      throw new Error(
        `Your tried to dispatchAction with the Action "${actionType}" that does not exist`,
      )
  }
}
