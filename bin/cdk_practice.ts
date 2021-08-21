#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkPracticeStack } from '../lib/cdk_practice-stack';

const app = new cdk.App();
new CdkPracticeStack(app, 'CdkPracticeStack');
