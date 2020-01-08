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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/search', 'PageController@searchPages');
Route::post('/send_form/{id}', 'PageController@sendFormData');
Route::post('/send_quest/{id}', 'PageController@sendQuestData');
Route::get('/archiv', 'NewsController@showArch');
Route::get('/news/all/{id?}', 'NewsController@showAll');
Route::get('/news/{id?}', 'NewsController@show');
Route::get('/events', 'EventController@showAll');
Route::get('/events/show/{id}', 'EventController@show');
Route::get('/events/month/{month?}', 'EventController@showAll');


//Route::any('/ckfinder/examples/{example?}', 'CKSource\CKFinderBridge\Controller\CKFinderController@examplesAction')
//    ->name('ckfinder_examples');
