<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Submission;
use Illuminate\Support\Facades\Auth;

class SubmissionsController extends Controller
{
    public function adminFormDetails($id) {

        if (Auth::user() and Auth::user()->id == $id) {
            return response()->json([
                "message" => "Success",
                "admin_forms" => Submission::select("data", "created_at")->where("form_id", $id)->get()
            ], 201);
        }

        return response()->json([
            "message" => "You are unauthorised"
        ]);
    }
}
