<?php

namespace App\Http\Controllers;

use App\Models\Periodental;
use Illuminate\Http\Request;

class PeriodentalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('content.periodentalchart.new');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Periodental $periodental)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Periodental $periodental)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Periodental $periodental)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Periodental $periodental)
    {
        //
    }
}
