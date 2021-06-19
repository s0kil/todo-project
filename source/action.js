import { _ } from "./aid"
import { Project, State, Todo } from "./model"
import { newProject, showProjects } from "./view"
import { renderView, form } from "./utilities/action"

export const Action = {
  ShowProjects: "ShowProjects",
  CreateProject: "CreateProject",
  CreateTodo: "CreateTodo",
}

_.on("stateChange", () => {
  // Re-Render Action When State Changes
  dispatchAction(Action.ShowProjects)
})

export function dispatchAction(actionType, actionData = {}) {
  const { projects } = State

  if (actionType === Action.ShowProjects) {
    renderView([newProject(), ...showProjects(projects)])
    return
  }

  if (actionType === Action.CreateProject) {
    const formData = form("form#new-project", ["name"])
    const project = new Project(formData)
    projects.unshift(project)
    return
  }

  if (actionType === Action.CreateTodo) {
    const { projectId } = actionData
    const formData = form(`form.new-todo[data-project-id="${projectId}"]`, [
      "name",
      "priority",
    ])
    const todo = new Todo(formData)
    const project = projects.find((project) => project.id === projectId)
    project.todos.push(todo)
    return
  }

  throw new Error(
    `Your tried to dispatchAction with the Action "${actionType}" that does not exist`,
  )
}
