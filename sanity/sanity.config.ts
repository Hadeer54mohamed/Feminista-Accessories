import {defineConfig, isDev} from 'sanity'

import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

import {visionTool} from '@sanity/vision'
import Navbar from './components/studio/Navbar'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'feminista-glow',
  basePath: '/studio',

  projectId: '1rdc358t',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: Navbar,
    },
  },
})
