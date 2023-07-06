<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MonitoringData extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'time',
        'temperature',
        'air_humidity',
        'soil_moisture', 
        'light_intensity',
        'fan1_status',
        'fan2_status',
        'pump1_status',
        'pump2_status',
    ];
}
