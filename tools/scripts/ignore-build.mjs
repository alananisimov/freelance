#!/usr/bin/env node

import { exec } from 'child_process';

const APP = process.argv.slice(2)[0];
const GIT_BRANCH_VERCEL = process.env['VERCEL_GIT_COMMIT_REF'];

console.log(`current branch: "${GIT_BRANCH_VERCEL}"`);
console.log(`check build need for "${APP}"`);

if (GIT_BRANCH_VERCEL === 'dev' || GIT_BRANCH_VERCEL === 'prod') {
  console.log(`current branch is 'dev' or 'prod', force build`);
  process.exit(1);
} else {
  console.log(
    `current branch is not 'dev' or 'prod', check build need for "${APP}"`,
  );
  const IGNORE_CMD = `yarn dlx nx-ignore ${APP}`;

  exec(IGNORE_CMD).on('close', (code) => {
    console.log(
      code === 0 ? `ignore build for "${APP}"` : `need to build "${APP}"`,
    );
    process.exit(code);
  });
}
