# YGLF Website 2017

## Development
It's a classic react application. It contains `components` and `pages` folder with `react-dom` router.

Run `yarn install` to get all dependencies. Before pushing, make sure to run `yarn format` to comply with coding standards.

## Deployment
### Staging
Run `yarn staging` to create the build and copy it to the `docs` folder. Commit the changes.
The staging version will be available at [https://yougottalovefrontend.github.io/website-2017/](https://yougottalovefrontend.github.io/website-2017/).
### Production
Whenever you are ready to deploy to production, just run `yarn deploy`. It will run `yarn build` and `firebase deploy`. 
The production version is available at [https://yougottalovefrontend.com/](https://yougottalovefrontend.com/)