<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use Illuminate\Support\Facades\Auth;

class FormsController extends Controller
{
    public function getAdminForms($id) {

        if (Auth::user()) {

            if (Auth::user()->id == $id) {
                return response()->json([
                    "message" => "Success",
                    "admin_forms" => Form::where("admin_id", $id)->get()
                ], 201);
            }
        }
        return response()->json([
            "message" => "You are unauthorised"
        ]);
    }
}
