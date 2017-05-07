const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.sass('resources/assets/sass/blog.custom.scss', 'public/css');
mix.sass('resources/assets/sass/blog-auth.scss', 'public/css');

mix.sass('vendor/bower_components/font-awesome/scss/font-awesome.scss', 'public/assets/app/css/app.css').version();

mix.styles([
    'vendor/bower_components/gentelella/vendors/bootstrap/dist/css/bootstrap.css',
    'vendor/bower_components/gentelella/vendors/animate.css/animate.css',
    'vendor/bower_components/gentelella/build/css/custom.css',
], 'public/assets/admin/css/admin.css').version();

mix.copy('vendor/bower_components/gentelella/vendors/bootstrap/fonts', 'public/assets/admin/fonts');

mix.browserSync('ocliuziyang.dev');
