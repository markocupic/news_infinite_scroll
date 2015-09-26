<?php

/**
 * Created by PhpStorm.
 * User: Marko
 * Date: 06.09.2015
 * Time: 17:20
 */
if(TL_MODE == 'FE' && !\Environment::get('isAjaxRequest')){
    $GLOBALS['TL_JAVASCRIPT'][] = 'system/modules/news_infinite_scroll/assets/js/news_infinite_scroll.js';
}

$GLOBALS['FE_MOD']['news']['newslist_infinite_scroll'] = 'ModuleNewsListInfiniteScroll';





