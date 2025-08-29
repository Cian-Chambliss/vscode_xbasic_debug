import * as vscode from 'vscode';
import path from 'path';
const config = vscode.workspace.getConfiguration('xbasicdebugger');
const debugPort = config.get<number>('debugPort', 4711);
const debugHost = config.get<string>('debugHost', 'localhost');

export function activate(context: vscode.ExtensionContext) {
  const factory = new WebSocketDebugAdapterDescriptorFactory();
  context.subscriptions.push(
    vscode.debug.registerDebugAdapterDescriptorFactory('xbasicdebugger', factory)
  );
}

class WebSocketDebugAdapterDescriptorFactory implements vscode.DebugAdapterDescriptorFactory {
  createDebugAdapterDescriptor(
    session: vscode.DebugSession
  ): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
    return new vscode.DebugAdapterServer(debugPort, debugHost);
  }
}