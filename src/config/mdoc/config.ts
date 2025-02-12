import type { Schema, Config } from '@markdoc/markdoc'
import type { Render } from '@astrojs/markdoc/config'

// To make compiler happy
export type MarkdocComponent = Schema<Config, Render>
