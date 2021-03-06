#!/usr/bin/env node

import * as program from 'commander';
import {getVersion} from './helpers';

program.version(getVersion())
  .command('migrator', 'Work with your migrations.')
  .command('snapshot', 'Work with mapping snapshots.')
  .command('generator', 'Work with multiple generators.')
  .parse(process.argv);
