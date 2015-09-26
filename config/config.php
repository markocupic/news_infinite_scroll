<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2015 Leo Feyer
 *
 * @license LGPL-3.0+
 */

if(TL_MODE == 'FE' && !\Environment::get('isAjaxRequest')){
    $GLOBALS['TL_JAVASCRIPT'][] = 'system/modules/news_infinite_scroll/assets/js/news_infinite_scroll.js';
}

$GLOBALS['FE_MOD']['news']['newslist_infinite_scroll'] = 'ModuleNewsListInfiniteScroll';





