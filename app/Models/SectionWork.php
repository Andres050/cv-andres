<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class SectionWork extends Model
{

    protected $table = "sections_works";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'date_start',
        'date_end',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date_start' => 'datetime',
        'date_end' => 'datetime',
    ];

    /**
     * The functions that are relations.
     *
     * @var array<int, string>
     */
    protected $relations = [
        'section',
    ];

    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }

    public function getDateFormatAttribute()
    {
        $dateStart = $this->date_start ?? null;
        if ($dateStart) {
            $dateEnd = $this->date_end ?? new Carbon();

            return $this->date_start->format('F \of Y') .' - '. $dateEnd->format('F \of Y');
        }
        return null;
    }
}
