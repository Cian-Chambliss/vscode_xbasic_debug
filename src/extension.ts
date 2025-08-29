import * as vscode from 'vscode';
import path from 'path';

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
    // This spawns the internal debug server (debugServer.js)
    // const command = path.join(vscode.extensions.getExtension('alphaanywhere.xbasicdebugger')!.extensionPath,'out','debugServer.js');
    // return new vscode.DebugAdapterExecutable('node', [command]);
    return new vscode.DebugAdapterServer(4711, 'localhost');
  }
}