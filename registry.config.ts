import path from 'node:path';
import { addons } from 'seven/registry.config';
import type { ConfigSettings } from '@robgietema/nick/src/types';

const dirname = path.resolve(
  process.env.REGISTRYCONFIG
    ? path.dirname(process.env.REGISTRYCONFIG)
    : process.cwd(),
);

export const nick: Partial<ConfigSettings> = {
  blobs: 'db',
  profiles: [
    `${dirname}/nick/src/profiles/core`,
    `${dirname}/packages/plone7-nick-nick/profiles/default`,
  ],
};

addons.push('plone7-nick');

export { addons };
