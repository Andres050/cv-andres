<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Section extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'works'
    ];

    /**
     * The functions that are relations.
     *
     * @var array<int, string>
     */
    protected $relations = [
        'user',
        'works'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function works(): HasMany
    {
        return $this->hasMany(SectionWork::class);
    }
}
