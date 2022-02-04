export const createElement = (tag: string, attributes: any = {}, ...children: any[]) => {
    const element = document.createElement(tag)
    for (const attribute in attributes) {
        if (attributes.hasOwnProperty(attribute)) {
            element.setAttribute(attribute, attributes[attribute])
        }
    }
    if(children){
        const fragment = document.createDocumentFragment()
        children.forEach((child) => {
            if (typeof child === 'string') {
                child = document.createTextNode(child)
            }
            fragment.appendChild(child)
        })
        element.appendChild(fragment)
    }

    return element
}