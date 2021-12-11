import * as vscode from 'vscode';
import {WebAppPanel} from './WebAppPanel'

export function activate(
    context: vscode.ExtensionContext) {
        context.subscriptions.push(
			vscode.commands.registerCommand(
			   'vscodeexample.helloWorld',
			   () => {
				   vscode.window.showInformationMessage('Hello World');
				}
			)
		);

		context.subscriptions.push(   
			vscode.commands.registerCommand(
				'vscodevuecli:openVueApp', () => 
					{
						WebAppPanel.createOrShow(context.extensionUri);
					}
			)
		);
    }

export function deactivate() {}
