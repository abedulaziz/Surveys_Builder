<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Submission;
use Illuminate\Support\Facades\Auth;

class SubmissionsController extends Controller
{
    public function adminFormDetails($admin_id, $form_id) {

        if (Auth::user() and Auth::user()->id == $admin_id) {
            return response()->json([
                "message" => "Success",
                "form_details" => Submission::select("data", "created_at")->where("form_id", $form_id)->get()
            ], 201);
        }

        return response()->json([
            "message" => "You are unauthorised"
        ]);
    }
}
