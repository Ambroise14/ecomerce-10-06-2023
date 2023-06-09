<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Gallery;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function new(Request $request){
      $product=new Product();
      if($request->hasFile('image')){
        $file=$request->file('image');
        $file_name=$file->getClientOriginalName();
        $file->move('images/products',$file_name);
        $product->image=$file_name;
      }
      $product->ref=rand(111111,99999);
      $product->category_id=$request->category_id;
      $product->code=$request->code;
      $product->name=$request->name;
      $product->price=$request->price;
      $product->description=$request->description;
      $product->status=$request->status;
      $product->popular=$request->popular;
      $product->save();
      if($request->hasFile('photos')){
        foreach($request->file('photos') as $files){
          $photos=new Gallery();
         $file=rand(111,999).$files->getClientOriginalName();
         $photos->product_id=$product->id;
         $photos->photo=$file;
        $files->move('images/products',$file);
        $photos->save();

        }
      }
      return response()->json(['status'=>200]);
    }
    public function update(Request $request){
      $product=Product::find($request->id);
      if($request->hasFile('image')){
        $file=$request->file('image');
        $file_name=$file->getClientOriginalName();
        $file->move('images/products',$file_name);
        $product->image=$file_name;
      }
      $product->ref=rand(111111,99999);
      $product->category_id=$request->category_id;
      $product->code=$request->code;
      $product->name=$request->name;
      $product->price=$request->price;
      $product->description=$request->description;
      $product->status=$request->status;
      $product->popular=$request->popular;
      $product->update();
      return response()->json(['status'=>200]);
    }

    public function getAll(){
      $prod=Product::orderBy('id','DESC')->get();
      $cat=Category::orderBy('id','DESC')->get();
      
      return response()->json(['status'=>200,'prod'=>$prod,'cat'=>$cat]);

    }

    public function edit($id){
      $product=Product::find($id);
      return response()->json(['status'=>200,'pro'=>$product]);

    }
    
    public function delete($id){
      Product::where('id',$id)->delete();
      return response()->json(['status'=>200]);

    }

    public function description($id){
      $product=Product::find($id);
      $images=Gallery::where('product_id',$id)->get();
      $prod=Product::orderBy('id','DESC')->get();
      return response()->json(['status'=>200,'prod'=>$product,'images'=>$images,'prods'=>$prod]);

    }
}
