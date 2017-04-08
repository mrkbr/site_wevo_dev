<?php

$tempColumns = array(
    'wevo_link' => array(
        'label' => 'Link',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '1024',
            'eval' => 'trim',
            'wizards' => array(
                'link' => array(
                    'type' => 'popup',
                    'title' => 'LLL:EXT:cms/locallang_ttc.xlf:header_link_formlabel',
                    'icon' => 'link_popup.gif',
                    'module' => array(
                        'name' => 'wizard_element_browser',
                        'urlParameters' => array(
                            'mode' => 'wizard'
                        )
                    ),
                    'JSopenParams' => 'height=300,width=500,status=0,menubar=0,scrollbars=1'
                )
            ),
            'softref' => 'typolink'
        )
    ),
    'wevo_linktext' => array(
        'label' => 'Link Label',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $tempColumns);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'marginalcolumn',
    'wevo_link,wevo_linktext'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('pages', '--div--;Wevo Marginalspalte,--palette--;Kontaktinformation für die Marginalspalte;marginalcolumn');
