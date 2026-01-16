<?php

namespace Modules\Movice\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MoviceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('movice::index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('movice::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('movice::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('movice::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
