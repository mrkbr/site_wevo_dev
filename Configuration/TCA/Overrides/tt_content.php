<?php


$additionalColumns = array(
    'wevo_image2' => array(
        'label' => 'Bild 2',
        'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('wevo_image2', array(
            'appearance' => array(
                'createNewRelationLinkTitle' => 'LLL:EXT:b13ce/Resources/Private/Language/db.xml:b13ce_items:image.addFileReference'
            ),
            // custom configuration for displaying fields in the overlay/reference table
            // to use the imageoverlayPalette instead of the basicoverlayPalette
            'foreign_types' => array(
                '0' => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_AUDIO => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_VIDEO => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                )
            )
        ), $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext'])
    ),
    'wevo_image3' => array(
        'label' => 'Bild 3',
        'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('wevo_image3', array(
            'appearance' => array(
                'createNewRelationLinkTitle' => 'LLL:EXT:b13ce/Resources/Private/Language/db.xml:b13ce_items:image.addFileReference'
            ),
            // custom configuration for displaying fields in the overlay/reference table
            // to use the imageoverlayPalette instead of the basicoverlayPalette
            'foreign_types' => array(
                '0' => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_AUDIO => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_VIDEO => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                )
            )
        ), $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext'])
    ),
    'wevo_image4' => array(
        'label' => 'Bild 4',
        'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('wevo_image4', array(
            'appearance' => array(
                'createNewRelationLinkTitle' => 'LLL:EXT:b13ce/Resources/Private/Language/db.xml:b13ce_items:image.addFileReference'
            ),
            // custom configuration for displaying fields in the overlay/reference table
            // to use the imageoverlayPalette instead of the basicoverlayPalette
            'foreign_types' => array(
                '0' => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_AUDIO => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_VIDEO => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                ),
                \TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => array(
                    'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                )
            )
        ), $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext'])
    ),
    'wevo_link3' => array(
        'label' => 'Link 3',
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
    'wevo_linktext3' => array(
        'label' => 'Link Label 3',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link4' => array(
        'label' => 'Link 4',
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
    'wevo_linktext4' => array(
        'label' => 'Link Label 4',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link5' => array(
        'label' => 'Link 5',
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
    'wevo_linktext5' => array(
        'label' => 'Link Label 5',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link6' => array(
        'label' => 'Link 6',
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
    'wevo_linktext6' => array(
        'label' => 'Link Label 6',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link7' => array(
        'label' => 'Link 7',
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
    'wevo_linktext7' => array(
        'label' => 'Link Label 7',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link8' => array(
        'label' => 'Link 8',
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
    'wevo_linktext8' => array(
        'label' => 'Link Label 8',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link9' => array(
        'label' => 'Link 9',
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
    'wevo_linktext9' => array(
        'label' => 'Link Label 9',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link10' => array(
        'label' => 'Link 10',
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
    'wevo_linktext10' => array(
        'label' => 'Link Label 10',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link11' => array(
        'label' => 'Link 11',
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
    'wevo_linktext11' => array(
        'label' => 'Link Label 11',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link12' => array(
        'label' => 'Link 12',
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
    'wevo_linktext12' => array(
        'label' => 'Link Label 12',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link13' => array(
        'label' => 'Link 13',
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
    'wevo_linktext13' => array(
        'label' => 'Link Label 13',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_link14' => array(
        'label' => 'Link 14',
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
    'wevo_linktext14' => array(
        'label' => 'Link Label 14',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_videoid' => array(
        'label' => 'Video-ID',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_videoid2' => array(
        'label' => 'Video-ID 2',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_videoid3' => array(
        'label' => 'Video-ID 3',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_videoid4' => array(
        'label' => 'Video-ID 4',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_additionaltext1' => array(
        'label' => 'Additional Text 1',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_additionaltext2' => array(
        'label' => 'Additional Text 2',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_additionaltext3' => array(
        'label' => 'Additional Text 3',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_additionaltext4' => array(
        'label' => 'Additional Text 4',
        'config' => array(
            'type' => 'input',
            'size' => '30',
            'max' => '256',
        )
    ),
    'wevo_bodytext2' => array(
        'l10n_mode' => 'prefixLangTitle',
        'l10n_cat' => 'text',
        'label' => 'Zusatztext',
        'config' => array(
            'type' => 'text',
            'cols' => '80',
            'rows' => '5',
            'wizards' => array(
                'RTE' => array(
                    'notNewRecords' => 1,
                    'RTEonly' => 1,
                    'type' => 'script',
                    'title' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext.W.RTE',
                    'icon' => 'EXT:backend/Resources/Public/Images/FormFieldWizard/wizard_rte.gif',
                    'module' => array(
                        'name' => 'wizard_rte'
                    )
                ),
                'table' => array(
                    'notNewRecords' => 1,
                    'enableByTypeConfig' => 1,
                    'type' => 'script',
                    'title' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext.W.table',
                    'icon' => 'EXT:backend/Resources/Public/Images/FormFieldWizard/wizard_table.gif',
                    'module' => array(
                        'name' => 'wizard_table'
                    ),
                    'params' => array(
                        'xmlOutput' => 0
                    )
                )
            ),
            'softref' => 'typolink_tag,images,email[subst],url',
        )
    ),
    'wevo_bodytext3' => array(
        'l10n_mode' => 'prefixLangTitle',
        'l10n_cat' => 'text',
        'label' => 'Zusatztext 2',
        'config' => array(
            'type' => 'text',
            'cols' => '80',
            'rows' => '5',
            'wizards' => array(
                'RTE' => array(
                    'notNewRecords' => 1,
                    'RTEonly' => 1,
                    'type' => 'script',
                    'title' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext.W.RTE',
                    'icon' => 'EXT:backend/Resources/Public/Images/FormFieldWizard/wizard_rte.gif',
                    'module' => array(
                        'name' => 'wizard_rte'
                    )
                ),
            ),
            'softref' => 'typolink_tag,images,email[subst],url',
        )
    ),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $additionalColumns);






// insert the showitems configuration for each element in between these two values
$tempShowitems1 = '--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,';
$tempShowitems2 = 'rowDescription,--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access,
--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories, tx_gridelements_container, tx_gridelements_columns';



// #####################################################
// standard elements
// #####################################################

// changes to the standard elements
// move the "layout" field of the "header" element to the first page
// we move the layout field to the first page and remove the tab "appearance" alltogether
$GLOBALS['TCA']['tt_content']['types']['header']['showitem'] = $tempShowitems1 . '
					--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers,layout,' . $tempShowitems2;

// add a tab to the Content Element Wizard
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array(
    0 => 'Wevo Elemente',
    1 => '--div--'
);


// this adds the keyvisual element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Keyvisual', 'wevo_keyvisual', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_keyvisual']['showitem'] = $tempShowitems1 . '
	header,layout;Icon,image;Bild im Hintergrund,
	' . $tempShowitems2;

// this adds the header/lead element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Header und Lead', 'wevo_headerlead', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_headerlead']['showitem'] = $tempShowitems1 . '
	header,layout;Farbe (für Leadtext auf Verteilerseiten),bodytext;Lead,
	' . $tempShowitems2;

// add the text and text/image elements for wevo
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Text mit Bild', 'wevo_textimage', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_textimage']['showitem'] = $tempShowitems1 . '
	header,layout;Layoutvariante,
	bodytext;Text;;richtext:rte_transform[mode=ts_css],
	image;Bild,
	' . $tempShowitems2;

// add quote element for wevo
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Zitatelement', 'wevo_quote', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_quote']['showitem'] = $tempShowitems1 . '
	bodytext,
	' . $tempShowitems2;


// add the video module element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Videomodul', 'wevo_videomodule', 'i/tt_content_header.gif');$GLOBALS['TCA']['tt_content']['types']['wevo_videomodule']['showitem'] = $tempShowitems1 . '
  --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers,layout;Layout (für Headline),
  wevo_videoid;Vimeo-ID (Video läuft mit Autoplay),
  bodytext;Text (unter Video),
  ' . $tempShowitems2;

// add the image switcher module element
// this adds the branch slider for the startpage
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'imageswitcher1', 'image;Bild 1,
    --linebreak--,
  wevo_additionaltext1;Datenteil 1 (z.B. 104°C),
  wevo_additionaltext2;Datenteil 2 (z.B. unvergossenes Bauteil)');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'imageswitcher2', 'wevo_image2;Bild 2,
    --linebreak--,
  wevo_additionaltext3;Datenteil 1 (z.B. 60°C),
  wevo_additionaltext4;Datenteil 2 (z.B. vergossenes Bauteil)');
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo Image Switcher', 'wevo_imageswitcher', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_imageswitcher']['showitem'] = $tempShowitems1 . '
  header;Überschrift,
  --palette--;Bild 1;imageswitcher1,
  --palette--;Bild 2;imageswitcher2,
  bodytext;Text neben dem Modul,
  ' . $tempShowitems2;


// add the glossary link list
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo Glossar Liste (für Marginalspalte)', 'wevo_glossarylist', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_glossarylist']['showitem'] = $tempShowitems1 . 'header;Überschrift über das gesamte Element (inkl. Linkliste),
  subheader;Überschrift über das Glossar,
    tx_b13ce_list;Glossareinträge,
  ' . $tempShowitems2;

// add the contact box for the marginal column
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo Kontakt Box (für Marginalspalte)', 'wevo_contactbox', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_contactbox']['showitem'] = $tempShowitems1 . 'header;Überschrift für Kontakt,
    bodytext;Kontaktadresse,
    subheader;Überschrift für E-Mail-Eintrag,
  ' . $tempShowitems2;

// add the property teaser element
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content','headerwithicon','header_layout;Icon,header;Überschrift');
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo Eigenschaften Teaser', 'wevo_propertyteaser', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_propertyteaser']['showitem'] = $tempShowitems1 . '
    --palette--;Headline;headerwithicon,
    layout;Layoutvariante,
    bodytext;Text,
    --palette--;Verlinkung;tx_b13ce_link_label,
    image;Bild,
  ' . $tempShowitems2;

// add the 2 column "definition list style" list element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo 2-Spalten-Listenelement', 'wevo_2collist', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_2collist']['showitem'] = $tempShowitems1 . '
    header;Überschrift über die gesamte Liste,
    
    tx_b13ce_list;Listeneinträge,
  ' . $tempShowitems2;

// add the 2 column "definition list style" list element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo 2-Spalten-Listenelement mit RTE', 'wevo_2collistRTE', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_2collistRTE']['showitem'] = $tempShowitems1 . '
    header;Überschrift über die gesamte Liste,
    tx_b13ce_config;Als Dropdown anzeigen,
    tx_b13ce_list;Listeneinträge,
  ' . $tempShowitems2;

// add the timeline element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo Timeline Element', 'wevo_timeline', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_timeline']['showitem'] = $tempShowitems1 . '
    header;Titel (wird nicht im Frontend ausgegeben),
    assets;SVG mit Zeitstrahl-Grafik,
  ' . $tempShowitems2;

// add the career page special text element, also used on imprint page
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo einfaches Textelement', 'wevo_simpletext', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_simpletext']['showitem'] = $tempShowitems1 . '
    bodytext;Text,
  ' . $tempShowitems2;

// add the career page special text element, also used on imprint page
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo einfaches Textelement mit RTE', 'wevo_simpletextRTE', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_simpletextRTE']['showitem'] = $tempShowitems1 . '
    bodytext;Text,
  ' . $tempShowitems2;
$GLOBALS['TCA']['tt_content']['types']['wevo_simpletextRTE']['columnsOverrides']['bodytext']['defaultExtras'] = 'richtext:rte_transform[mode=ts_css]';



// add the 404 element
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content','wevo_link_label3','wevo_linktext3;Linktext 3,wevo_link3;Link 3');
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo 404-Element', 'wevo_404', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_404']['showitem'] = $tempShowitems1 . '
    header;Headline (404),
    bodytext;Text,
    --palette--;Link DE-Version;tx_b13ce_link_label,
    --palette--;Link EN-Version;tx_b13ce_link_label2,
    --palette--;Link CN-Version;wevo_link_label3,
  ' . $tempShowitems2;

// add the table element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo Tabelle', 'wevo_table', 'i/tt_content_table.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_table']['showitem'] = $tempShowitems1 . '
    layout;Tabellenvariante,
    header;Headline,
    bodytext;Tabelle - 4 Spalten (Trennung von Spalten mit |) - bei wechselnden Farben 5 Spalten mit erster Spalte 1=blau 2=grau,
    tx_b13ce_list;Legende/Definitionsliste,
    subheader;Headline über Text (optional),
    wevo_bodytext2;Text,
  ' . $tempShowitems2;
$GLOBALS['TCA']['tt_content']['types']['wevo_table']['columnsOverrides']['bodytext']['defaultExtras'] = 'nowrap:wizards[table]';
$GLOBALS['TCA']['tt_content']['types']['wevo_table']['columnsOverrides']['wevo_bodytext2']['defaultExtras'] = 'richtext:rte_transform[mode=ts_css]';

// add the infographic element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Wevo Interaktive Grafik', 'wevo_interactivegraphic', 'i/tt_content_image.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_interactivegraphic']['showitem'] = $tempShowitems1 . '
    header;Headline,
    image;Bild,
    tx_b13ce_list;Hotspots,
    ' . $tempShowitems2;

// #####################################################
// startpage elements
// #####################################################

// add a tab to the Content Element Wizard
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array(
    0 => 'Startseitenelemente',
    1 => '--div--'
);

// this adds the video/image slider item configuration for the startpage slider
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Startpage Video/Bild Slider', 'wevo_startpagevideoslider', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_startpagevideoslider']['showitem'] = $tempShowitems1 . '
	tx_b13ce_list;Slider-Items,
	' . $tempShowitems2;

// this adds the short fact slider item configuration for the shortfact element on the startpage
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Short Facts Slider', 'wevo_shortfactsslider', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_shortfactsslider']['showitem'] = $tempShowitems1 . '
	header;Überschrift,
	tx_b13ce_list;Short-Facts (bis zu 6 möglich),
	' . $tempShowitems2;

// this adds the news accordion for the startpage
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Startpage News Accordion', 'wevo_startpagenews', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_startpagenews']['showitem'] = $tempShowitems1 . '
	tx_b13ce_list;News Einträge,
	' . $tempShowitems2;

// this adds the link module for the startpage
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Startpage Link Module', 'wevo_linkmodule', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_linkmodule']['showitem'] = $tempShowitems1 . '
	tx_b13ce_list;Links,
	' . $tempShowitems2;

// this adds the video element for the startpage
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Startpage Video Module', 'wevo_startpagevideo', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_startpagevideo']['showitem'] = $tempShowitems1 . '
	header;Titel (intern - wird nicht im Frontend ausgegeben),
	subheader;Vimeo VideoID,
	image;Bild/Poster,
	' . $tempShowitems2;


// this adds the branch slider for the startpage
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'branch_automotive', '
    tx_b13ce_linktext;Bezeichnung Automotive,
    tx_b13ce_link;Link für Automotive,
    --linebreak--,
    wevo_videoid;Vimeo Video-ID für Automotive,
    image;Fallback-Bild für Automotive');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'branch_household', '
    tx_b13ce_linktext2;Bezeichnung Haushalt,
    tx_b13ce_link2;Link für Haushalt,
    --linebreak--,
    wevo_videoid2;Vimeo Video-ID für Haushalt,
    wevo_image2;Fallback-Bild für Haushalt');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'branch_industry', '
    wevo_linktext3;Bezeichnung Industrie,
    wevo_link3;Link für Industrie,
    --linebreak--,
    wevo_videoid3;Vimeo Video-ID für Industrie,
    wevo_image3;Fallback-Bild für Industrie');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'branch_energy', '
    wevo_linktext4;Bezeichnung Energie,
    wevo_link4;Link für Energie,
    --linebreak--,
    wevo_videoid4;Vimeo Video-ID für Energie,
    wevo_image4;Fallback-Bild für Energie');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'branch_header', '
    header;Headline,--linebreak--,
    subheader;Button Beschriftung,header_link;Link');
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Startseite Branchen Slider', 'wevo_branchslider', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_branchslider']['showitem'] = $tempShowitems1 . '
    --palette--;Überschrift;branch_header,
    --palette--;Automotive;branch_automotive,
    --palette--;Haushalt;branch_household,
    --palette--;Industrie;branch_industry,
    --palette--;Energie;branch_energy,
    ' . $tempShowitems2;


// this adds the branch image slider for the startpage
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Startseite Branchen Bilder Slider', 'wevo_branchImageSlider', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_branchImageSlider']['showitem'] = $tempShowitems1 . '
    --palette--;Überschrift;branch_header,
    --palette--;Automotive;branch_automotive,
    --palette--;Haushalt;branch_household,
    --palette--;Industrie;branch_industry,
    --palette--;Energie;branch_energy,
    ' . $tempShowitems2;


// this adds the property module for the startpage
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_productgroups', '
    subheader;Bezeichnung Produktgruppen,--linebreak,
    tx_b13ce_linktext;Text für Link zur Übersicht,
    tx_b13ce_link;Linkziel für Link zur Übersicht');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_productgroups_pur', '
    wevo_additionaltext1;Headline PUR,
    wevo_linktext3;Text PUR,
    wevo_link3;Link PUR');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_productgroups_ep', '
    wevo_additionaltext2;Headline EP,
    wevo_linktext4;Text EP,
    wevo_link4;Link EP');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_productgroups_si', '
    wevo_additionaltext3;Headline SI,
    wevo_linktext5;Text SI,
    wevo_link5;Link SI');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties', '
    header;Bezeichnung Eigenschaften,--linebreak,
    tx_b13ce_linktext2;Text für Link zur Übersicht,
    tx_b13ce_link2;Linkziel für Link zur Übersicht');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_1', 'wevo_linktext6;Bezeichnung,wevo_link6;Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_2', 'wevo_linktext7;Bezeichnung,wevo_link7;Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_3', 'wevo_linktext8;Bezeichnung,wevo_link8;Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_4', 'wevo_linktext9;Bezeichnung,wevo_link9;Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_5', 'wevo_linktext10;Bezeichnung,wevo_link10;Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_6', 'wevo_linktext11;Bezeichnung,wevo_link11;Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_7', 'wevo_linktext12;Bezeichnung,wevo_link12;Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_8', 'wevo_linktext13;Bezeichnung,wevo_link13;Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'property_properties_9', 'wevo_linktext14;Bezeichnung,wevo_link14;Link');

$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Startseite Eigenschaften Modul', 'wevo_startpagepropertymodule', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_startpagepropertymodule']['showitem'] = $tempShowitems1 . '
    --palette--;Infos Produktgruppen;property_productgroups,
    --palette--;Infos zu PUR;property_productgroups_pur,
    --palette--;Infos zu EP;property_productgroups_ep,
    --palette--;Infos zu SI;property_productgroups_si,
    --palette--;Infos Eigenschaften;property_properties,
    --palette--;Wärmeleitfähigkeit;property_properties_1,
    --palette--;Brandverhalten;property_properties_2,
    --palette--;Fließverhalten;property_properties_3,
    --palette--;Topfzeit;property_properties_4,
    --palette--;Mechanische Eigenschaften;property_properties_5,
    --palette--;Temperatureinsatzbereich;property_properties_6,
    --palette--;Alterungsbeständigkeit;property_properties_7,
    --palette--;Elektrische Eigenschaften;property_properties_8,
    --palette--;Medienbeständigkeit;property_properties_9,
    ' . $tempShowitems2;


// add the configuration for the accordion for the startpage (formerly known as the video accordion, see #WEVO-27)
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Akkordeon Modul', 'wevo_startpageaccordion', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_startpageaccordion']['showitem'] = $tempShowitems1 . '
	tx_b13ce_list;Einträge,
	' . $tempShowitems2;


// #####################################################
// management page elements
// #####################################################

// add a tab to the Content Element Wizard
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array(
    0 => 'Management-Seiten Elemente',
    1 => '--div--'
);

// management lead/header, see #WEVO-149
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Management Header/Lead', 'wevo_managementheader', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_managementheader']['showitem'] = $tempShowitems1 . '
    bodytext;Lead-Text,
	' . $tempShowitems2;

// management subheader/divider element, see #WEVO-149
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Management Zwischenüberschrift', 'wevo_managementsubheader', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_managementsubheader']['showitem'] = $tempShowitems1 . '
    header;Zwischenüberschrift (z.B. "Vita"),
	' . $tempShowitems2;

// management vita item, see #WEVO-149
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Management Vita Element', 'wevo_managementvitaitem', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_managementvitaitem']['showitem'] = $tempShowitems1 . '
    header;Name,
    wevo_bodytext2;Stationen/Aufzählungspunkte,
    wevo_additionaltext1;Akkordionüberschrift (Wenn nichts eingetragen: Detail),
    bodytext;Text für Vita (rechte Spalte),
    image;Bild (Seitenverhältnis 2x3),
	' . $tempShowitems2;


// #####################################################
// product page elements
// #####################################################


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'productmodule_pur', '
    header;Headline "PUR", subheader;Subheadline "PUR",--linebreak--,
    bodytext;Text "PUR",--linebreak--,
    tx_b13ce_linktext;Link-Label für Detailseite "PUR", tx_b13ce_link;Link "PUR",');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'productmodule_ep', '
    wevo_additionaltext1;Headline "EP", wevo_additionaltext2;Subheadline "EP",--linebreak--,
    wevo_bodytext2;Text "EP",--linebreak--,
    tx_b13ce_linktext2;Link-Label für Detailseite "EP", tx_b13ce_link2;Link "EP",');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'productmodule_si', '
    wevo_additionaltext3;Headline "SI", wevo_additionaltext4;Subheadline "SI",--linebreak--,
    wevo_bodytext3;Text "SI",--linebreak--,
    wevo_linktext3;Link-Label für Detailseite "SI", wevo_link3;Link "SI",');

// product page three column element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Product Module', 'wevo_productmodule', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_productmodule']['showitem'] = $tempShowitems1 . '
    --palette--;Produktinformationen "PUR";productmodule_pur,
    --palette--;Produktinformationen "EP";productmodule_ep,
    --palette--;Produktinformationen "SI";productmodule_si,
	' . $tempShowitems2;


$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = array('Zertifikat Modul', 'wevo_certificates', 'i/tt_content_header.gif');
$GLOBALS['TCA']['tt_content']['types']['wevo_certificates']['showitem'] = $tempShowitems1 . '
	tx_b13ce_list;Zertifikate,
' . $tempShowitems2;