EMBERROOT BIOFUELS — GITHUB PAGES STATIC BUILD

This package is prepared for GitHub Pages. Upload the CONTENTS of this folder to the ROOT of your repository.

WHAT WAS CHANGED
- Removed Apache/PHP-only files (.htaccess, contact-submit.php, order-submit.php, order-config.php).
- Added .nojekyll so GitHub Pages serves the static folders exactly as packaged.
- Added CNAME for emberrootbiofuels.com. Remove CNAME only if you want to use the default github.io address instead.
- Contact forms now submit through FormSubmit using AJAX, with a normal POST fallback if JavaScript is disabled.
- Checkout/order requests now submit through FormSubmit instead of PHP.
- Existing multilingual URLs, catalogue, cart, account, wishlist, compare, blog, SEO metadata, sitemap and robots.txt remain static.

DEPLOYMENT
1. Create/open the GitHub repository.
2. Upload every file/folder in this package directly to the repository root (index.html must be at repository root).
3. In GitHub: Settings > Pages > Build and deployment > Deploy from a branch.
4. Select the main branch and /(root), then save.
5. If using emberrootbiofuels.com, configure the domain in GitHub Pages and point DNS to GitHub Pages. The included CNAME expects emberrootbiofuels.com.

IMPORTANT — FORM ACTIVATION
FormSubmit requires the receiving email address to be confirmed the first time a form is used. After the site is live, submit one contact test and one checkout test, then approve the activation email sent to sales@emberrootbiofuels.com.

NOTE
GitHub Pages is static hosting. It cannot run PHP, databases, private SMTP credentials or server-side order processing. The current build keeps those public-facing forms operational through FormSubmit.
