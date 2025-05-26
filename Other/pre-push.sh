# Put this file in the .git directory inside a project and run it from the project root. Make sure that your local bitbucket-pipelines repo is up to date and that your config files are up to date inside the project folder.

#!/usr/bin/env bash
set -e

# Lint javascript
cd resources/assets/admin
npm run lint
cd -

# Run phpstan
./vendor/bin/phpstan analyse

# Run csfixer tests
PHP_CS_FIXER_FOLDERS="app modules tests database routes"
../bitbucket-pipelines/vendor/bin/php-cs-fixer fix $PHP_CS_FIXER_FOLDERS --dry-run --diff --allow-risky=yes --config=.php_cs

# Run phpmd
PHPMD_FOLDERS="app,modules,database,routes"
../bitbucket-pipelines/vendor/bin/phpmd $PHPMD_FOLDERS ansi phpmd.xml

# Run tests
composer test
