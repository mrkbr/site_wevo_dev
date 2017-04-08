<?php

if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// add our wevo contact fields from the pages table to work with slide and translations
$GLOBALS['TYPO3_CONF_VARS']['FE']['pageOverlayFields'] .= ',wevo_link,wevo_linktext';
