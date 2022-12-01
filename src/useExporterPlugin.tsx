import {useMemo, useRef} from 'react'
import type {ComponentType} from 'react'
import CodeExporter from './CodeExporter'

// Copied from `@graphiql/react` to avoid adding a dependency for a single type definition
type GraphiQLPlugin = {
  /**
   * A component that renders content into the plugin pane.
   */
  content: ComponentType;
  /**
   * A component that renders an icon that will be shown inside a button that
   * toggles the plugin visibility.
   */
  icon: ComponentType;
  /**
   * The unique title of the plugin. If two plugins are present with the same
   * title the provider component will throw an error.
   */
  title: string;
};

function useExporterPlugin(props: any) {
  const propsRef = useRef(props)
  propsRef.current = props
  return useMemo<GraphiQLPlugin>(
    () => ({
      title: 'Connect',
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
          />
        </svg>
      ),
      content: () => (
        <CodeExporter codeMirrorTheme="graphiql" {...propsRef.current} />
      ),
    }),
    [],
  )
}

export {useExporterPlugin}
