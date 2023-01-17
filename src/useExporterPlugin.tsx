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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
          <path d="M19.6387 21.1999C18.1638 21.2075 16.7185 20.7856 15.4791 19.9858C14.2398 19.1861 13.26 18.043 12.6591 16.6959C12.0583 15.3489 11.8624 13.8561 12.0954 12.3996C12.3284 10.9431 12.9801 9.58593 13.9712 8.49351C14.9622 7.40109 16.2497 6.62066 17.6767 6.24739C19.1037 5.87412 20.6084 5.92415 22.0075 6.39138C23.4065 6.8586 24.6393 7.72283 25.5556 8.87867C26.4719 10.0345 27.0321 11.432 27.1678 12.9007C27.7136 12.2477 28.4153 11.743 29.208 11.4334C30.0007 11.1238 30.8587 11.0192 31.7026 11.1294C32.5464 11.2397 33.3488 11.5611 34.0354 12.0639C34.722 12.5667 35.2706 13.2347 35.6303 14.006C35.99 14.7772 36.1493 15.6268 36.0933 16.476C36.0373 17.3252 35.7679 18.1465 35.3101 18.8639C34.8522 19.5812 34.2207 20.1714 33.4741 20.5798C32.7274 20.9881 31.8898 21.2015 31.0388 21.1999H29.7721" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29.7721 28.7999L24.7054 33.8666V23.7332" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.6388 28.7999L24.7055 33.8666" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M24.7054 38.9333V44" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3721 44H31.0388" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.0388 25V36.4C12.0388 37.0719 12.3057 37.7163 12.7808 38.1914C13.2559 38.6665 13.9003 38.9334 14.5722 38.9334H34.8389C35.5108 38.9334 36.1551 38.6665 36.6302 38.1914C37.1053 37.7163 37.3722 37.0719 37.3722 36.4V25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
