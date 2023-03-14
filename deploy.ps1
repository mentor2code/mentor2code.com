#!/usr/bin/env sh

# abort on errors
# set -e

# build
yarn build

# navigate into the build output directory
# cd .vuepress/dist
Set-Location .vuepress/dist

# if you are deploying to a custom domain
# echo 'mentor2code.com' > CNAME
Write-Output 'mentor2code.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:mentor2code/mentor2code.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -
Set-Location ../..
