<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Tiket extends Eloquent
{
    protected $connection = 'mongodb';
	protected $collection = 'tiket';
}
