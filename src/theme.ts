import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    breakpoints: {
      "3xl": "150rem"
    },
  },
})

export default createSystem(defaultConfig, config)