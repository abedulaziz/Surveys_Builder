<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class FormsController extends Controller
{
    public function getAdminForms($admin_id) {


        if (Auth::user() and Auth::id() == $admin_id) {
            return response()->json([
                "message" => "Success",
                "admin_forms" => Form::where("admin_id", $admin_id)->get()
            ], 201);
        }

        return response()->json([
            "message" => "You are unauthorised"
        ]);
    }


    public function createForm($admin_id, Request $request) {


        if (Auth::user() and Auth::id() == $admin_id) {
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

    public function listForms($user_id) {

        if (Auth::user() and Auth::id() == $user_id) {

            $data = array();

            foreach (Form::all() as $form) {
                $formOwner = User::find($form->admin_id);

                $formData = (object)[];
                $formData->admin = $formOwner->fname . " " . $formOwner->lname;
                $formData->body = $form->HTML_data;

                $data[] = $formData;
            }

            return response()->json([
                "message" => "Success",
                "data" => $data
            ]);
        }

        return response()->json([
            "message" => "You are unauthorised"
        ]);
    }
}
