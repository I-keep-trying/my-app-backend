React front end with express + mongodb back end

For the 1,000th time, I am attempting to log the exact steps required for Heroku deployment. Somehow my previous attempts always left something out.

The following steps assume your app is already built and running locally.

1. Create Heroku account if needed
2. Install globally if needed with `npm i -g heroku`
3. Login with `heroku login`, then create app with `heroku create` and copy the generated app name somewhere
4. Create git repo (add a copy of the `\build` directory from front end), commit and push
5. Connect your Heroku app with your git repo using the name from step 3:
   `heroku git:remote -a heroku-generated-app-name-012345`
6. Push to heroku with `git push heroku master` or `git push heroku main` depending on how your git repo was created

At this point, your app /should/ be running on Heroku IF you don't have environment variables, e.g., mongodb password. The easiest way (imo) to add these is through your Heroku dashboard, under the 'Settings' tab, in the 'Config Vars' section.

Note: None of this works if your node app was configured with Babel to use `import` statements. Only basic node app `require` statements will work with Heroku without additional configuration. See the most recent answer to this [SO question](https://stackoverflow.com/questions/36781542/package-json-start-script-babel-node-not-found-on-heroku-deploy/56894885) updated in 2020.

Once the app is successfully running on Heroku, the front end proxy can be changed to the new Heroku url.

Copy front end `build` directory to back end root (on Windows, I just use file manager)

For bonus points, add this to `package.json` : `git add . && git commit -m server-config && git push origin master && git push heroku master`. Then all you have to do is copy the build directory, and run the command. The syntax might be different on non-Windows environments.

[live demo](https://sheltered-scrubland-08732.herokuapp.com/)

[front end repo](https://github.com/I-keep-trying/countries3.1)
