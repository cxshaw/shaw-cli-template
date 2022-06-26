#! /usr/bin/env node

import { Command } from 'commander';

import { getPkgVersion } from "./util";
import { ICliOption } from "./interface";

console.log('shaw-cli command start');

const program = new Command();

program
  .version(getPkgVersion(), '-v -V --version', 'current cli version')
  // .command('create', 'download template files')
  .option('-t, --template <type>', 'template type', 'vite')
  .requiredOption('-n, --name <name>', 'project name', 'new_template_project')

program.parse(process.argv);

const options: ICliOption = program.opts();

console.log(options)