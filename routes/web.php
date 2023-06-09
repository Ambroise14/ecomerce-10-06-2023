<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

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

Route::get('/user/new',[HomeController::class,'home']);
Route::get('/user/all',[HomeController::class,'home']);
Route::get('/user/get',[HomeController::class,'get']);
Route::get('/user/delete/{id}',[HomeController::class,'delete']);
Route::post('/user/deleteAll',[HomeController::class,'deleteAll']);
Route::get('/user/edit/{id}',[HomeController::class,'edit']);





Route::post('/user/new',[HomeController::class,'new']);
Route::get('/user/restore',[HomeController::class,'restore']);
Route::post('/user/update',[HomeController::class,'update']);

//category
Route::get('/category/new',[HomeController::class,'home']);
Route::get('/category/list',[HomeController::class,'home']);
Route::post('/category/new',[CategoryController::class,'create']);
Route::get('/category/all',[CategoryController::class,'all']);
Route::get('/category/delete/{id}',[CategoryController::class,'delete']);
Route::get('/category/restore',[CategoryController::class,'restore']);
Route::get('/category/edit/{id}',[CategoryController::class,'edit']);

Route::post('/category/update',[CategoryController::class,'update']);

//product
Route::get('/product/new',[HomeController::class,'home']);
Route::get('/product/list',[HomeController::class,'home']);
Route::post('/product/new',[ProductController::class,'new']);
Route::post('/product/update',[ProductController::class,'update']);
Route::get('/product/delete/{id}',[ProductController::class,'delete']);
Route::get('/product/all',[ProductController::class,'getAll']);
Route::get('/product/edit/{id}',[ProductController::class,'edit']);

//product
Route::get('/catalogue/home',[HomeController::class,'home']);
Route::get('/description/d/{id}',[HomeController::class,'home']);
Route::get('/description/{id}',[ProductController::class,'description']);

//cart
Route::get('/cart/view',[HomeController::class,'home']);
Route::post('/cart/add',[CartController::class,'add']);
Route::get('/cart/get',[CartController::class,'get']);
Route::post('/cart/remove',[CartController::class,'remove']);
Route::post('/cart/update',[CartController::class,'update']);











