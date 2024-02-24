<?php

namespace App\Http\Controllers;

use App\Models\Section;
use App\Models\SectionWork;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Facades\Date;

class HomeController extends Controller
{
    /**
     * Show the landing page
     *
     * @return
     */
    public function index()
    {
        $user = User::with('sections')->hasEmail('andres.garciabauza@icloud.com')->first();

        if (!$user || env('ONLY_LOCALE', false)) {
            // Only usage if database is not created and is running only on local
            $user = $this->getUserLocale();
        }

        return view('pages.index')->with([
            'user' => $user
        ]);
    }

    /** ONLY FOR LOCALE USAGE */

    public function getUserLocale() : User
    {
        return $this->getSectionsLocale(new User([
            'name' => "andres",
            'surnames' => "garcia bauza",
            'phone' => "651106803",
            'professional_title' => "programador web",
            'small_description' => "(Islas Baleares) Carrer Sorteta 13, 07570 Arta",
            'email' => "andres.garciabauza@icloud.com",
        ]));
    }

    public function getSectionsLocale(User $user) : User
    {
        $user->sections = new Collection([
            new Section([
                'title' => "Aptitudes",
                'description' => "Soy una persona confiable y muy activa en cuanto al trabajo se trata. Me gusta mucho la programación web en todos los ámbitos, tanto el front o el backend. De pasatiempos tengo el hacer deporte y seguir programando o trabajando en proyectos personales",
            ]),
            new Section([
                'title' => "Experiencia",
                'description' => null,
                'works' => new Collection([
                    new SectionWork([
                        'title' => "Refineria Web",
                        'subtitle' => "Programador Web Fullstack",
                        'description' => "<p>Tareas de maquetación donde estas conllevan conocimiento de:</p>
                                        <ul>
                                            <li>Javascript</li>
                                            <li>Css</li>
                                            <li>Sass</li>
                                            <li>Html</li>
                                            <li>Xml</li>
                                        </ul>
                                        <p>Tareas de programación back donde estas conllevan conocimiento de:</p>
                                        <ul>
                                            <li>Blade</li>
                                            <li>Php</li>
                                            <li>Laravel</li>
                                            <li>Octobercms</li>
                                        </ul>",
                        'date_start' => '1-06-2022',
                        'date_end' => null,
                    ]),
                ])
            ]),
            new Section([
                'title' => "Formación",
                'description' => null,
                'works' => new Collection([
                    new SectionWork([
                        'title' => "ESO",
                        'subtitle' => "Educación Secundaria Obligatoria",
                        'date_start' => '11-09-2014',
                        'date_end' => '21-06-2018',
                    ]),
                    new SectionWork([
                        'title' => "GM",
                        'subtitle' => "Técnico en sistemas microinformáticos y redes",
                        'date_start' => '11-09-2018',
                        'date_end' => '21-06-2020',
                    ]),
                    new SectionWork([
                        'title' => "GS",
                        'subtitle' => "Desarrollo de aplicaciones web",
                        'date_start' => '11-09-2020',
                        'date_end' => '21-06-2022',
                    ])
                ])
            ]),
            new Section([
                'title' => "Idiomas",
                'description' => null,
                'works' => new Collection([
                    new SectionWork([
                        'title' => "Español",
                        'description' => "<input type='range' readonly value='100'>",
                        'subtitle' => "Nativo",
                        'date_start' => null,
                        'date_end' => null,
                    ]),
                    new SectionWork([
                        'title' => "Ingles",
                        'description' => "<input type='range' readonly value='60'>",
                        'subtitle' => "B2",
                        'date_start' => null,
                        'date_end' => null,
                    ]),
                    new SectionWork([
                        'title' => "Catalan",
                        'description' => "<input type='range' readonly value='75'>",
                        'subtitle' => "C1",
                        'date_start' => null,
                        'date_end' => null,
                    ]),
                ])
            ])
        ]);

        return $user;
    }
}
