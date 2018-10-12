/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { TestInstantiationService } from 'vs/platform/instantiation/test/common/instantiationServiceMock';
import { IWorkspaceContextService } from 'vs/platform/workspace/common/workspace';
import { INextStorage2Service } from 'vs/platform/storage2/common/storage2';

suite('Workbench - GettingStarted', () => {
	let instantiation: TestInstantiationService | null = null;
	let welcomePageEnvConfig: string | null = null;
	let hideWelcomeSettingsValue: string | null = null;
	// let machineId: string | null = null;
	let appName: string | null = null;

	suiteSetup(() => {
		instantiation = new TestInstantiationService();
		instantiation.stub(IWorkspaceContextService, {
			getConfiguration: () => {
				return {
					env: {
						welcomePage: welcomePageEnvConfig,
						appName: appName
					}
				};
			}
		});
		instantiation.stub(INextStorage2Service, {
			get: () => hideWelcomeSettingsValue,
			set: (value) => hideWelcomeSettingsValue = value
		});
	});

	suiteTeardown(() => {
		instantiation = null;
	});

	setup(() => {
		welcomePageEnvConfig = null;
		hideWelcomeSettingsValue = null;
		appName = null;
	});
});