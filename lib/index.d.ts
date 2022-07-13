/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface ExecSubProcess {
  status: string
  output: string
}
export interface ExecOptions {
  cwd?: string
  enviromentVariables?: Record<string, string>
}
export function exec(commandWithArgs: Array<string>, options?: ExecOptions | undefined | null): ExecSubProcess
export interface ProcessResult {
  stdout?: string
  stderr?: string
  exitCode?: number
  isExecuted: boolean
}
export interface Options {
  cwd?: string
  stdin?: 'inherit' | 'piped' | null
  stdout?: 'inherit' | 'piped' | null
  stderr?: 'inherit' | 'piped' | null
}
export function spawn(command: string, args: Array<string>, options?: Options | undefined | null): { stdout: undefined, stderr: undefined, exitCode?: number, isExecuted: false } | { stdout: string, stderr: string, exitCode?: number, isExecuted: true }
