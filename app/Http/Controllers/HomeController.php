<?php

namespace App\Http\Controllers;

use App\Models\Phone;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home(){
      return view('welcome');
    }

    public function restore(){
      Phone::withTrashed()->restore();
      return response()->json(['status'=>200]);
    }

    public function new(Request $request){
      $phone=new Phone();
      $phone->name=$request->name;
      $phone->phone=$request->phone;
      $phone->save();
      return response()->json(['status'=>200]);
    }

    public function update(Request $request){
      $phone=Phone::find($request->id);
      $phone->name=$request->name;
      $phone->phone=$request->phone;
      $phone->status=$request->status;

      $phone->update();
      return response()->json(['status'=>200,'users'=>Phone::all()]);
    }

    public function get(){
      return response()->json(['status'=>200,'users'=>Phone::all()]);
    }


    
    public function delete($id){
      $p=Phone::find($id);
      $p->delete();
      return response()->json(['status'=>200]);
    }
    public function deleteAll(Request $request){
      $ids=$request->ids;
      Phone::whereIn('id',$ids)->delete();
      return response()->json(['status'=>200]);

    }
    public function edit($id){
      $cat=Phone::find($id);
      return response()->json(['status'=>200,'phone'=>$cat]);

    }
}
