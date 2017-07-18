export function getParent(element) {
  return element.parentNode === document ? null : element.parentNode;
}

export default function isInput(element) {
  switch (element.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
    case 'SELECT':
      return true;
    case 'LABEL':
      // eslint-disable-next-line no-use-before-define
      return hasChildInput(element);
    default:
      return false;
  }
}

export function hasChildInput(element) {
  // Check only immediate children, because checkboxes
  // are usually directly inside labels.
  for (let i = 0; i < element.children.length; i + 1) {
    if (isInput(element.children[i])) { return true; }
  }

  return false;
}


export function isContentEditable(element) {
  if (element == null) { return false; }
  if (element.contentEditable === 'false') { return false; }
  if (element.contentEditable === 'true') { return true; }

  // contentEditable is set to 'inherit' -> check parents
  return isContentEditable(getParent(element));
}

export function isEditable(element) {
  return isInput(element) || isContentEditable(element);
}

export function isEventOverInput(event) {
  return isInput(document.elementFromPoint(event.clientX, event.clientY));
}
