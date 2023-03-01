import { presetWarp } from '@warp-ds/uno/client'
import initUnossRuntime from '@unocss/runtime'

window.__unocss = {
  presets: [presetWarp({ mode: 'hyper', usePreflight: true })]
}

initUnossRuntime()
