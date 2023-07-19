import {useMemo, useRef} from 'react';
import type {ComponentType} from 'react';
import CodeExporter from './CodeExporter';

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
  const propsRef = useRef(props);
  propsRef.current = props;
  return useMemo<GraphiQLPlugin>(
    () => ({
      title: 'Connect',
      icon: () => (
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.0107 43V26.2137"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M37.1064 30.77C38.2138 30.4927 39.2468 29.9754 40.1322 29.2549C41.0177 28.5343 41.734 27.628 42.2306 26.6001C42.7272 25.5722 42.9919 24.4477 43.0061 23.3062C43.0202 22.1647 42.7833 21.034 42.3123 19.9941C41.8413 18.9542 41.1475 18.0305 40.2802 17.2883C39.4128 16.5461 38.3929 16.0035 37.2927 15.6988C36.1926 15.3942 35.0389 15.335 33.9133 15.5254C32.7876 15.7157 31.7176 16.1511 30.7788 16.8006C30.4344 14.9463 29.6574 13.1994 28.5109 11.7018C27.3644 10.2042 25.8809 8.99815 24.1807 8.1817C22.4805 7.36524 20.6118 6.96137 18.7262 7.00291C16.8406 7.04444 14.9914 7.5302 13.3288 8.42073C11.6663 9.31126 10.2372 10.5814 9.15782 12.128C8.07842 13.6747 7.37908 15.4541 7.11665 17.3218C6.85421 19.1895 7.03607 21.0928 7.64745 22.877C8.25883 24.6612 9.28248 26.276 10.6352 27.5902"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.8069 31.0098L19.0108 26.2137L14.2147 31.0098"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.001 26.2137V43"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.205 38.2039L31.001 42.9999L35.7971 38.2039"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      content: () => (
        <CodeExporter codeMirrorTheme="graphiql" {...propsRef.current} />
      ),
    }),
    [],
  );
}

export {useExporterPlugin};
