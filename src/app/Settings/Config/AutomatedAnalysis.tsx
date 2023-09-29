/*
 * Copyright The Cryostat Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AutomatedAnalysisConfigForm } from '@app/Dashboard/AutomatedAnalysis/AutomatedAnalysisConfigForm';
import * as React from 'react';
import { SettingTab, UserSetting } from '../types';

const Component = () => {
  return <AutomatedAnalysisConfigForm inlineForm />;
};

export const AutomatedAnalysis: UserSetting = {
  titleKey: 'SETTINGS.AUTOMATED_ANALYSIS_CONFIG.TITLE',
  descConstruct: 'SETTINGS.AUTOMATED_ANALYSIS_CONFIG.DESCRIPTION',
  content: Component,
  category: SettingTab.DASHBOARD,
  authenticated: true,
};