<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Blog
Route::group(['domain' => 'blog.ocliuziyang.dev'], function () {
    Route::get('/', function () {
        //
        return '博客首页';
    });
});

// Home
Route::get('/', function () {
    return view('welcome');
});


