<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CartController extends Controller
{
    public function add(Request $request){
      $product=Product::find($request->product_id);
      $content=array('id'=>$product->id,'name'=>$product->name,'price'=>$product->price,'quantity'=>1,'image'=>$product->image);
      $cart=session('cart1',[]);
      array_push($cart,$content);
      session(['cart1'=>$cart]);
      return response()->json(['status'=>200]);

    }

    public function add2(Request $request){
      $product=Product::find($request->product_id);
     
      $cart=session('cart',[]);
      $cart['id']=$product->id;
      $cart['name']=$product->name;
      $cart['description']=$product->description;
      $cart['price']=$product->price;
      $cart['quantity']=1;
      array_push($cart,$cart);
      $p=session(['cart'=>$cart]);

    
      return response()->json(['status'=>200,'p'=>$cart]);

    }



    public function get(){
      $cart=session('cart1',[]);
      $data=['cart1'=>$cart];
      return response()->json(['status'=>200,'gets'=>$data]);
    
     }
    
     public function remove(Request $request){
      $cart_id=$request->ids;
      $cart=session('cart1',[]);
      if(isset($cart[$cart_id])){
        unset($cart[$cart_id]);
      }
      $data=session(['cart1'=>$cart]);
      return response()->json(['status'=>200,'gets'=>$data]);

}

    
public function update(Request $request){
  $cart_id=$request->id;
  $cart=session('cart1',[]);
  if($cart_id && !$cart[0]['id']==$cart_id){
    dd('okkkkk');
   
  }
  
  session(['cart1'=>$cart]);
  return response()->json(['status'=>200]);

}
}