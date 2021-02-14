import { Project, State, Todo } from "./model"
import { newProject, showProjects } from "./view"
import { $, renderView } from "./utilities/action"

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
				const form = $("form#new-project")
				const formData = new FormData(form)
				const project = new Project({ name: formData.get("name") })
				projects.unshift(project)
			})()
			break

		case Action.CreateTodo:
			;(function () {
				const { projectId } = actionData

				const form = $(`form.new-todo[data-project-id="${projectId}"]`)
				const formData = new FormData(form)
				const todo = new Todo({
					name: formData.get("name"),
					priority: formData.get("priority"),
				})
				const project = projects.find(
					(project) => project.id === projectId,
				)
				project.todos.push(todo)
			})()
			break

		default:
			throw new Error(
				`Your tried to dispatchAction with the Action "${actionType}" that does not exist`,
			)
	}
}
