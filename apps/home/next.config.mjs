//@ts-check

import { composePlugins, withNx } from '@nx/next';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const WORKSPACE_ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '../..');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  env: { WORKSPACE_ROOT },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default composePlugins(...plugins)(nextConfig);
