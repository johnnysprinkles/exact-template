This is a starter template for an isomorphic multipage Node/Express/React app.
It would normally be used via the
[create-exact-app](https://www.npmjs.com/package/create-exact-app) generator:

    npx create-exact-app <app-name>

But you may also want to use this directly, either by cloning the Github repo,
or by running the template with npx:

    npx exact-template
    http://localhost:3000 in a browser

You can see this template in running in its virgin state here:

https://exact.royalbarrel.com

Which is literally just running this script in a nightly cron job:

    kill -9 `cat pid.txt`
    nohup npx exact-template > my.log 2>&1 &
    echo $! > pid.txt
