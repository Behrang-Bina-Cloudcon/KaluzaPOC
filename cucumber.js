module.exports = {
  default: [
    'tests/features/**/*.feature',
    '--require-module ts-node/register',
    '--require tests/step_definitions/**/*.ts',
    '--require tests/support/**/*.ts',
    '--format progress-bar', // Keep this for nice console output
    '--format allure-cucumberjs' // Use Allure as the main reporter
  ].join(' ')
};