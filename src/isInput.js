export function getParent(element) {
  return element.parentNode === document ? null : element.parentNode;
}

export default function isInput(element) {
  switch (element.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
    case 'SELECT':
      return true;
    default:
      return false;
  }
}

export function isEditable(element) {
  return isInput(element) || isContentEditable(element)
}

export function isContentEditable(element) {
  if (element == null) { return false; }
  if (element.contentEditable === 'false') { return false; }
  if (element.contentEditable === 'true') { return true; }

  // contentEditable is set to 'inherit' -> check parents
  return isEditable(getParent(element));
}

export function isEventOverInput(event) {
  return isInput(document.elementFromPoint(event.clientX, event.clientY));
}
