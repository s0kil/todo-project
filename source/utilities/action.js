export function $(selector) {
	return document.querySelector(selector)
}

export function renderView(htmlElements) {
	document.body.innerHTML = null

	if (htmlElements instanceof Array) {
		// Render Array Of Elements
		const fragment = document.createDocumentFragment()
		htmlElements.forEach((htmlElement) => fragment.append(htmlElement))
		document.body.append(fragment)
	} else {
		// Render An Element
		document.body.append(htmlElements)
	}
}
