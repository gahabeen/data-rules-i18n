function sentence(item) {
  if (typeof item === 'string') {
    return item[0].toUpperCase() + item.slice(1)
  }
  return item
}

export function interpolate(message = '') {
  return (variables = {}) => {
    return sentence(Object.keys(variables).reduce((interpolated, variable) => interpolated.replace(`{${variable}}`, variables[variable]), message))
  }
}
