import { css } from 'glamor'

export const createCSS = styles => {
  return Object.keys(styles).reduce((result, name) => {
    return { ...result, [name]: css(styles[name]) }
  }, {})
}

export const createGlobalCSS = styles => {
  return Object.keys(styles).forEach((name) => {
    return css.global(name, styles[name])
  })
}
