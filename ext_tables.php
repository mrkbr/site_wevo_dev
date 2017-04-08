<?php

if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// Add the pageTSConfig file(s) from this extension to be available for selection in Page-Records
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile('site_wevo',
		'Configuration/PageTS/PageTSConfig.ts',
		'PageTS-Configuration for Wevo Relaunch 2016'
);

// Add the TypoScript configuration for this site package
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('site_wevo', 'Configuration/TypoScript/', 'Setup wevo.de');
