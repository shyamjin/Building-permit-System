import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { RequestView } from 'src/sections/request/request-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Requests - ${CONFIG.appName}`}</title>
      </Helmet>

      <RequestView />
    </>
  );
}
