<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use Illuminate\Support\Facades\Auth;

class FormsController extends Controller
{
    public function getAdminForms($admin_id) {

        if (Auth::user()) {

            if (Auth::user()->id == $admin_id) {
                return response()->json([
                    "message" => "Success",
                    "admin_forms" => Form::where("admin_id", $admin_id)->get()
                ], 201);
            }
        }
        return response()->json([
            "message" => "You are unauthorised"
        ]);
    }


    public function createForm($admin_id, Request $request) {


        if (Auth::user() and Auth::user()->id == $admin_id) {
            $title = $request->title;
            $HTML_data = $request->HTML_data;

            Form::insert([
                "admin_id" => $admin_id,
                "title" => $title,
                "HTML_data" => $HTML_data
            ]);

            return response()->json([
                "message" => "Success",
            ], 201);
        }

        return response()->json([
            "message" => "You are unauthorised"
        ]);
    }
}
