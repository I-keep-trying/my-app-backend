For the 1,000th time, I am attempting to log the exact steps required for Heroku deployment. 

1. Create Heroku account if needed
2. Install if needed with `npm i -g heroku` 
3. Create app with `heroku create` and copy the generated app name somewhere
4. Create git repo - Note: I committed and pushed to git, not sure if necessary for Heroku
5. Create Heroku app with name from step 3: `heroku git:remote -a heroku-generated-app-name-012345` 
6. Push to heroku with `git push heroku master` 

If step 6 fails, your `master` branch might be called `main` or something else.

