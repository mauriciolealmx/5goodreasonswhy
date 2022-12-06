import { ReactStaticSite, use } from '@serverless-stack/resources';

import ApiStack from './ApiStack';

const FrontendStack = ({ stack, app }) => {
  const { api } = use(ApiStack);

  const site = new ReactStaticSite(stack, 'ReactSite', {
    path: 'client',
    environment: {
      REACT_APP_API_URL: api.customDomainUrl || api.url,
      REACT_APP_REGION: app.region,
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
};

export default FrontendStack;
