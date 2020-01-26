<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubDomain extends Model
{
    protected $table = 'subdomains';

    protected $fillable = ['name','title','description','keywords','notice','text'];

}
