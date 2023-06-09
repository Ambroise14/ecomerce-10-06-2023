<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table='products';
    protected $fillable=[
      'category_id',
      'code',
      'name',
      'price',
      'description',
      'status',
      'popular',
      'image',
    ];
    protected $with='category';
    public function category(){
      return $this->belongsTo(Category::class);
    }
}
