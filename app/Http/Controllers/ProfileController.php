<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        // dd(Auth::user());
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    // update_dates
    public function update_dates(Request $request): RedirectResponse
    {
        // it is an array of dates every one has date attribute and hours atrribute which is array of hours available in this day
        $dates = $request->dates;
        foreach($dates as $date) {
            if ($date['date'] != null && !empty($date['hours'])) {
                $hours = array();
                foreach ($date['hours'] as $hour) {
                    if (!empty($hour['hour'])) {
                        $hours[] = $hour;
                    }
                }
                $avialable_dates[] = array(
                    'date' => $date['date'],
                    'hours' => $hours
                );

            }
        }
        $user = Auth::user();
        if ($user->user_type != 'employee') {
            return Redirect::route('profile.edit');
        }
        $user->available_dates = $avialable_dates;
        $user->save();

        return Redirect::route('profile.edit');
    }
}
