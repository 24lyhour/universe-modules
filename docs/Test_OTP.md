php artisan tinker --execute="echo env('MAIL_HOST')"

smtp.gmail.com
kouchlyhour@KouchLyhours-MacBook-Pro universe % php artisan tinker  
Psy Shell v0.12.20 (PHP 8.4.7 — cli) by Justin Hileman
New PHP manual is available (latest: 3.0.2). Update with `doc --update-manual`

> try { Mail::raw('Test', fn($m) => $m->to('Kouchlyhour@gmail.com')->subject('Test')); echo "Sent!"; } catch (\Exception $e) { echo $e->getMessage(); }
