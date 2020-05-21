<?php

namespace App\Exceptions;

use App\SubDomain;
use Exception;
use App\Page;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {

        $location = '';
        $domain = explode('.', $_SERVER['HTTP_HOST']);
        if(count($domain)==3 and $domain[0]!='www') {
            $location = $domain[0];
        }
        if ($location=='') {
            $subdomain = SubDomain::first();
        }
        else {
            $subdomain = SubDomain::where('name', $location)->get()->first();
            if(!$subdomain)
                $subdomain = SubDomain::first();
        }

        if ($location!='') {
            $location .= '_';
        }

        $page = new Page();

        $data['locate'] = $location;
        $data['headers'] = $subdomain;



        $data = ['data' => $page->find(1)];
        $data['pages'] = $page->getMenu();

        if ($exception instanceof NotFoundHttpException) {
            return view('404', $data, 404);
        }

        return parent::render($request, $exception);
    }
}
