#!/bin/bash

# Travis CI Deployment Script

set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

function doCompile {
  npm run build
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    # echo "Skipping deploy; just doing a build."
    # doCompile
    exit 0
fi

# Variables
ORIGIN_URL=`git config --get remote.origin.url`
ORIGIN_CREDENTIALS=${ORIGIN_URL/\/\/github.com/\/\/$GITHUB_TOKEN@github.com}
COMMIT_MESSAGE=$(git log -1 --pretty=%B)

echo "Started deploying"

cd client

# Build site.
doCompile

git clone https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git my_repo
cd my_repo

git config user.name "Deployment Bot"
git config user.email "deploy@travis-ci.org"

# Checkout gh-pages branch.
if [ `git branch | grep gh-pages` ]
then
  git branch -D gh-pages
fi
git checkout -b gh-pages

rsync -az --delete --exclude '.git*' ../build/ .

git add -fA
git commit --allow-empty -m "$COMMIT_MESSAGE [ci skip]"
git push -f -q $ORIGIN_CREDENTIALS gh-pages

echo "Deployed Successfully!"

exit 0
