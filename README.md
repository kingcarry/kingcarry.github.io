# Personal Blog

## How To Deploy

> use hash route, like `site.io/#/path`, with help of `react-router-dom/HashRouter`

[reference](https://create-react-app.dev/docs/deployment)

1. switch to branch `pre-build`
2. code on `pre-build`
3. remember `git push` before deploy(or after), not nessary, but to keep master and pre-build branch sync
4. once done, run `yarn deploy`

_deploy without hash route, [reference](https://github.com/rafrex/spa-github-pages)_

## Recommand

1. consider using cdn or other cloud server(like google, qiniu) to maintain **media source** like image, article, audio, video...