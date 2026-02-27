You need to login to Railway CLI first. Run these commands in your terminal:

# Step 1: Login to Railway

railway login

# Step 2: Link to your project

cd /Users/kouchlyhour/Documents/portfolio_projects/backends_portfolios/universe
railway link

# Step 3: Run migrations

railway run php artisan migrate --force

# Step 4: Create admin user (if needed)

railway run php artisan db:seed --force
Or you can check the logs in Railway Dashboard → Logs tab to see the exact error.

The 500 error is happening because:

Database tables don't exist (migrations haven't run)
The entrypoint tried to migrate but may have failed silently
Quick fix: After the build finishes, go to Railway Dashboard → your app → Logs tab and look for any error messages

Open Terminal:
Press Cmd + Space to open Spotlight
Type Terminal and press Enter
Run these commands:

railway login
This will open your browser to authenticate. After login, run:

cd /Users/kouchlyhour/Documents/portfolio_projects/backends_portfolios/universe
railway link
Then select your project when prompted.

Finally, run migrations:

railway run php artisan migrate --force

Click Variables tab
Click + New Variable button
Add each one:

SESSION_DOMAIN = .uninversal-global.online
SANCTUM_STATEFUL_DOMAINS = www.uninversal-global.online,uninversal-global.online
SESSION_SECURE_COOKIE = true
Or use CLI:

railway variables set SESSION_DOMAIN=.uninversal-global.online
railway variables set "SANCTUM_STATEFUL_DOMAINS=www.uninversal-global.online,uninversal-global.online"
railway variables set SESSION_SECURE_COOKIE=true
Railway will auto-redeploy after adding variables.

Railway vars
