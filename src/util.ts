import chalk from "chalk";
import path from 'path';

import pkg from '../package.json';

/**
 * 获取版本号
 */
export const getPkgVersion = () => pkg.version;

/**
 * 模版下载路径
 */
export const getTempPath = (projectDir: string) => {
  const cwd = process.cwd();
  return path.join(cwd, projectDir)
}

/**
 * 输出报错
 * @param content
 */
export const error = (content: string) => {
  console.log('');
  console.log(`🚫 ${chalk.red(content)}`);
  console.log('');
  process.exit(1);
}

/**
 * 输出警告
 * @param content
 */
export const warn = (content: string) => {
  console.log('')
  console.log(`⚠️  ${chalk.yellow(content)}`)
  console.log('');
  process.exit(1);
}

/**
 * 输出信息
 * @param content
 */
export const info = (content: string) => {
  console.log('');
  console.log(`⚡️  ${chalk.grey(content)}`);
  console.log('');
}