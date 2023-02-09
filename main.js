import { presetWarp } from '@warp-ds/uno'
import initUnossRuntime from '@unocss/runtime'

window.__unocss = {
  presets: [presetWarp({ mode: 'hyper' })]
}

initUnossRuntime()
