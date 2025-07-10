import { IWorldOptions, setWorldConstructor, World, Before, AfterAll, BeforeAll } from '@cucumber/cucumber';
import nock from 'nock';

export class CustomWorld extends World {
    name: string | string[] = '';
    countryId?: string;
    response: any = null;
    apiKey?: string;
  
    constructor(options: IWorldOptions) {
      super(options);
    }
}
  
setWorldConstructor(CustomWorld);

// Conditionally setup hooks for mocking
if (process.env.USE_MOCK === 'true') {
  BeforeAll(function() {
    if (!nock.isActive()) {
      nock.activate();
    }
  });

  // Before each scenario, clean up any existing mock interceptions
  Before(function () {
    nock.cleanAll();
  });
  
  // After all tests are done, restore the HTTP interceptor
  AfterAll(function() {
    nock.cleanAll();
    nock.restore();
  });
}