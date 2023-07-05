<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('monitoring_data', function (Blueprint $table) {
            $table->id();
            $table->timestamp('time')->useCurrent();
            $table->double('temperature');
            $table->double('air_humidity');
            $table->double('soil_moisture');
            $table->double('light_intensity');
            $table->boolean('fan1_status');
            $table->boolean('fan2_status');
            $table->boolean('pump1_status');
            $table->boolean('pump2_status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monitoring_data');
    }
};
