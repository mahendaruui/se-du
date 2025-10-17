<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlockedIp extends Model
{
    protected $fillable = [
        'ip_address',
        'reason',
        'blocked_at',
        'expires_at',
        'is_permanent',
    ];

    protected $casts = [
        'blocked_at' => 'datetime',
        'expires_at' => 'datetime',
        'is_permanent' => 'boolean',
    ];

    /**
     * Check if an IP is currently blocked.
     */
    public static function isBlocked(string $ip): bool
    {
        $blocked = self::where('ip_address', $ip)
            ->where(function ($query) {
                $query->where('is_permanent', true)
                    ->orWhere(function ($q) {
                        $q->where('expires_at', '>', now())
                            ->orWhereNull('expires_at');
                    });
            })
            ->exists();

        return $blocked;
    }

    /**
     * Block an IP address.
     */
    public static function blockIp(string $ip, ?string $reason = null, ?int $hours = null): self
    {
        return self::create([
            'ip_address' => $ip,
            'reason' => $reason ?? 'Suspicious activity detected',
            'blocked_at' => now(),
            'expires_at' => $hours ? now()->addHours($hours) : null,
            'is_permanent' => $hours === null,
        ]);
    }
}
