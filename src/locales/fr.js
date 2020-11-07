import { interpolate } from '../interpolate'

export default {
  text: interpolate(`{label} n'est pas un texte.`),
  textMin: interpolate(`{label} doit contenir au moins {textMin} charactères.`),
  textMax: interpolate(`{label} doit contenir au maximum {textMax} charactères.`),
}
