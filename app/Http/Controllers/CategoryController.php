<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create(Request $request){
      $cat=new Category();
      if($request->hasFile('image')){
        $file=$request->file('image');
        $file_name=$file->getClientOriginalName();
        $file->move('images/category',$file_name);
        $cat->image=$file_name;
      }
      $cat->code=$request->code;
      $cat->name=$request->name;
      $cat->status=$request->status;
      $cat->save();
      return response()->json(['status'=>200]);
    }

    public function all(){
      $cat=Category::orderBy('id','DESC')->get();
      return response()->json(['status'=>200,'categories'=>$cat]);
    }

    public function delete($id){
      Category::where('id',$id)->delete();
      return response()->json(['status'=>200]);
    }
    public function  restore(){
      Category::withTrashed()->restore();
      return response()->json(['status'=>200]);

    }

    public function update(Request $request){
      $cat=Category::find($request->id);
      if($request->hasFile('image')){
        $file=$request->file('image');
        $file_name=$file->getClientOriginalName();
        $file->move('images/category',$file_name);
        $cat->image=$file_name;
      }
      $cat->code=$request->code;
      $cat->name=$request->name;
      $cat->status=$request->status;
      $cat->update();
      $cat=Category::orderBy('id','DESC')->get();
      return response()->json(['status'=>200,'categories'=>$cat]);
    }

    public function edit($id){
      $cat=Category::find($id);
      return response()->json(['status'=>200,'cat'=>$cat]);

    }
}
