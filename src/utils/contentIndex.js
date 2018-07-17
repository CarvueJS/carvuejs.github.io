const componentList = [
  {
    'name': 'Accordion',
    'title': 'Accordion',
    'content': 'Accordion Content',
  },
  {
    'name': 'Breadcrumb',
    'title': 'Breadcrumb',
    'content': 'Breadcrumb Content',
  },
  {
    'name': 'Button',
    'title': 'Button',
    'content': 'Button Content',
  },
  {
    'name': 'Checkbox',
    'title': 'Checkbox',
    'content': 'Checkbox Content',
  },
  {
    'name': 'CodeSnippet',
    'title': 'CodeSnippet',
    'content': 'CodeSnippet Content',
  },
  {
    'name': 'ContentSwitcher',
    'title': 'ContentSwitcher',
    'content': 'ContentSwitcher Content',
  },
]

export function getNames () {
  return componentList.map(componentItem => componentItem.name)
}

export function getList () {
  return componentList
}
