<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('surnames')->nullable(false)->after('name');
            $table->string('phone')->nullable(false)->after('surnames');
            $table->string('professional_title')->nullable(false)->after('phone');
            $table->string('small_description')->nullable(false)->after('professional_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('surnames');
            $table->dropColumn('phone');
            $table->dropColumn('professional_title');
            $table->dropColumn('small_description');
        });
    }
}
