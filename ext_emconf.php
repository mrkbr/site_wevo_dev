<?php

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Site Package Wevo Relaunch 2016',
	'description' => '',
	'category' => 'templates',
	'version' => '1.0.0',
	'state' => 'stable',
	'clearcacheonload' => 1,
	'author' => 'David Steeb',
	'author_email' => 'typo3@b13.de',
	'author_company' => 'b:dreizehn GmbH',
	'constraints' => array(
		'depends' => array(
			'typo3' => '7.0-7.99.99',
			'b13ce' => '',
			'pagetsconfig' => '',
			'seo_basics' => ''
		),
		'conflicts' => array(
			'fluidpages' => '*',
			'themes' => '*',
		),
	),
);