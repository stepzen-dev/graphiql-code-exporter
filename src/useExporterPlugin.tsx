import {useMemo, useRef} from 'react'
import type {ComponentType} from 'react'
import CodeExporter from './CodeExporter'

import ConnectIcon from './icons/connect.svg'

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
        <ConnectIcon />
      ),
      content: () => (
        <CodeExporter codeMirrorTheme="graphiql" {...propsRef.current} />
      ),
    }),
    [],
  )
}

export {useExporterPlugin}
