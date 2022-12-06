import { App } from '@serverless-stack/resources';

import ApiStack from './ApiStack';
import FrontendStack from './FrontendStack';
import StorageStack from './StorageStack';

/**
 * @param {App} app
 */
export default function (app) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'services',
    bundle: {
      format: 'esm',
    },
  });

  app.stack(StorageStack).stack(ApiStack).stack(FrontendStack);
}
