# 1. Start valet

valet start

# 2. Check if your site is linked

valet links

# 3. If universe is not listed, link it

cd /Users/kouchlyhour/Documents/portfolio_projects/backends_portfolios/universe
valet link universe

# 4. Then secure it for HTTPS

valet secure universe
Common fixes if valet still doesn't work:

Restart valet completely:

valet restart
Check valet status:

valet status
If using Laravel Herd instead of Valet:

Open the Herd app from your menu bar
Make sure Herd is running
Check if the site is in Herd's sites list
Check if port 80 is blocked:

sudo lsof -i :80
Run valet start or open Laravel Herd app first, then try accessing http://universe.test again.
