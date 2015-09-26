<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2015 Leo Feyer
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
	'mod_newslist_infinite_scroll' => 'system/modules/news_infinite_scroll/templates',
));
