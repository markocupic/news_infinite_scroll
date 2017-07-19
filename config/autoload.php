<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2017 Leo Feyer
 *
 * @license LGPL-3.0+
 */


/**
 * Register the classes
 */
ClassLoader::addClasses(array
(
	// Modules
	'Contao\ModuleNewsListInfiniteScroll' => 'system/modules/news_infinite_scroll/modules/ModuleNewsListInfiniteScroll.php',
));


/**
 * Register the templates
 */
TemplateLoader::addFiles(array
(
	'mod_infinite_scroll_blank'  => 'system/modules/news_infinite_scroll/templates/modules',
	'j_newslist_infinite_scroll' => 'system/modules/news_infinite_scroll/templates/jquery',
));
