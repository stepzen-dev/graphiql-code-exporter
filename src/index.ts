import CodeExporter, {computeOperationDataList} from './CodeExporter';
import {useExporterPlugin} from './useExporterPlugin';
import capitalizeFirstLetter from './utils/capitalizeFirstLetter';
import jsCommentsFactory from './utils/jsCommentsFactory';
import snippets from './snippets/index';

export type {
  CodesandboxFile,
  CodesandboxFiles,
  Snippet,
  GenerateOptions,
  OperationData,
  Options,
  OptionValues,
  Variables,
} from './CodeExporter';

export {
  capitalizeFirstLetter,
  CodeExporter,
  computeOperationDataList,
  jsCommentsFactory,
  snippets,
  useExporterPlugin,
};
