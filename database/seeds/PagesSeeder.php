<?php

use Illuminate\Database\Seeder;

class PagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'parent_id' => '0',
                'name' => 'Главная',
                'order' => '0',
                'relation' => 0,
                'url' => null,
            ],
            [
                'parent_id' => '0',
                'name' => 'О заводе',
                'order' => '1',
                'relation' => 1,
                'url' => 'o_zavode',
            ],
            [
                'parent_id' => '0',
                'name' => 'Тактильная плитка',
                'order' => '2',
                'relation' => 0,
                'url' => 'taktilnaya_plitka',
            ],
            [
                'parent_id' => '0',
                'name' => 'Тактильная лента',
                'order' => '3',
                'relation' => 0,
                'url' => 'taktilnaya_lenta',
            ],
            [
                'parent_id' => '0',
                'name' => 'Тактильные индикаторы',
                'order' => '4',
                'relation' => 0,
                'url' => 'taktilnye_indicatory',
            ],
            [
                'parent_id' => '0',
                'name' => 'Клей',
                'order' => '5',
                'relation' => 0,
                'url' => 'kley',
            ],
            [
                'parent_id' => '0',
                'name' => 'Получить смету',
                'order' => '6',
                'relation' => 0,
                'url' => 'poluchit_smetu',
            ],
            [
                'parent_id' => '0',
                'parent_id' => '2',
                'name' => 'Сертификаты',
                'order' => '1',
                'relation' => 0,
                'url' => 'sertifikaty',
            ],
            [
                'parent_id' => '2',
                'name' => 'Отзывы',
                'order' => '2',
                'relation' => 0,
                'url' => 'otzyvy',
            ],
            [
                'parent_id' => '2',
                'name' => 'ГОСТ',
                'order' => '3',
                'relation' => 0,
                'url' => 'gost',
            ],
            [
                'parent_id' => '2',
                'name' => 'Доставка',
                'order' => '4',
                'relation' => 0,
                'url' => 'dostavka',
            ],
            [
                'parent_id' => '2',
                'name' => 'Гарантиии',
                'order' => '5',
                'relation' => 0,
                'url' => 'garantii',
            ],
            [
                'parent_id' => '2',
                'name' => 'Наши объекты',
                'order' => '6',
                'relation' => 0,
                'url' => 'nashi_obekty',
            ],
            [
                'parent_id' => '2',
                'name' => 'Контакты',
                'order' => '7',
                'relation' => 0,
                'url' => 'kontakty',
            ],
        ];

        DB::table('pages')->insert($data);
    }
}
