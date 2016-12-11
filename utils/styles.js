import { css } from 'glamor'

export const createCSS = styles => {
  return Object.keys(styles).reduce((result, name) => {
    let rules = [].concat(styles[name])
    return { ...result, [name]: css.apply(null, rules) }
  }, {})
}

export const createGlobalCSS = styles => {
  return Object.keys(styles).forEach((name) => {
    return css.global(name, styles[name])
  })
}
