<?php
defined('TYPO3_MODE') or die();

/**
 * add fields to tx_b13ce_items table
 */
$additionalColumns = array(
    'subheader2' => array(
        'label' => $l10n . 'b13ce_items.subheader',
        'config' => array(
            'type' => 'input',
            'size' => '50',
            'max' => '256',
            'softref' => 'email[subst]'
        )
    ),
    'layout' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.layout',
        'config' => array(
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => array(),
            'default' => 0
        )
    ),

    'headeralt' => array(
        'l10n_mode' => 'prefixLangTitle',
        'l10n_cat' => 'text',
        'label' => $l10n . 'b13ce_items.header',
        'config' => array(
            'type' => 'input',
            'size' => '50',
            'max' => '256'
        )
    ),
    'subheaderalt' => array(
        'label' => $l10n . 'b13ce_items.subheader',
        'config' => array(
            'type' => 'input',
            'size' => '50',
            'max' => '256',
            'softref' => 'email[subst]'
        )
    ),
    'subheader2alt' => array(
        'label' => $l10n . 'b13ce_items.subheader',
        'config' => array(
            'type' => 'input',
            'size' => '50',
            'max' => '256',
            'softref' => 'email[subst]'
        )
    ),
    'bodytextalt' => array(
        'l10n_mode' => 'prefixLangTitle',
        'l10n_cat' => 'text',
        'label' => $l10n . 'b13ce_items.bodytext',
        'config' => array(
            'type' => 'text',
            'cols' => '80',
            'rows' => '15',
            'wizards' => array(
                '_PADDING' => 4,
                '_VALIGN' => 'middle',
                'RTE' => array(
                    'notNewRecords' => 1,
                    'RTEonly' => 1,
                    'type' => 'script',
                    'title' => 'LLL:EXT:cms/locallang_ttc.xlf:bodytext.W.RTE',
                    'icon' => 'wizard_rte2.gif',
                    'module' => array(
                        'name' => 'wizard_rte'
                    )
                ),
            ),
            'softref' => 'typolink_tag,images,email[subst],url',
        )
    ),

);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tx_b13ce_items', $additionalColumns);


// this adds the slider item configuration for the startpage slider
// with up to three headlines, link/button and main teaser image OR videoid (YouTube-ID)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items', 'startpageslider', '
    linklabel;Button Beschriftung,
    link;Button Link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items', 'startpagesliderhl1', 'header;Headline 1,headeralt;Headline 1 (Phone)');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items', 'startpagesliderhl2', 'subheader;Headline 2,subheaderalt;Headline 2 (Phone)');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items', 'startpagesliderhl3', 'subheader2;Headline 3,subheader2alt;Headline 3 (Phone)');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items', 'startpageslidertext', 'bodytext;Kurztext,bodytextalt;Kurztext (Phone)');
    $GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_startpagevideoslider']['showitem'] = '
    --palette--;Headline Zeile 1;startpagesliderhl1,
    --palette--;Headline Zeile 2;startpagesliderhl2,
    --palette--;Headline Zeile 3;startpagesliderhl3,
    --palette--;Headline Zeile 3;startpageslidertext,
    --palette--;Button/Link;startpageslider,
    image;Hintergrundbild,
    image2;Teaser-Vorschaubild,
    videoid;Vimeo Video-ID,
	--palette--;;hiddenpalette';




// this adds the slider items/count up item configuration for the startpage short facts slider
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items', 'startpageshortfacts', '
    header;Zahl,
    subheader;Text');
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_shortfactsslider']['showitem'] = '
    --palette--;Fact;startpageshortfacts,
    --palette--;;hiddenpalette';


// this adds the accordion for news for the startpage
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_startpagenews']['showitem'] = '
    header;Headline,
    subheader;Lead,
    bodytext;Text;;richtext:rte_transform[mode=ts_css],
    image;Bild,
    --palette--;;hiddenpalette';

// this adds the configuration for the link module
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_linkmodule']['showitem'] = '
    --palette--;Link;link_label_1,
    --palette--;;hiddenpalette';

// this adds the configuration for the accordion module for the startpage
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items', 'startpageaccordion', 'layout;Farbgebung (in geschlossenem Zustand),config;Icon');
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_startpageaccordion']['showitem'] = '
    subheader;Akkordeon-Titel (klick öffnet den Inhalt),
    --palette--;Farbgebung und Icon;startpageaccordion,
    header;Überschrift (auf dem Bildteaser),
    --palette--;Verlinkung;link_label_1,
    image;Bild,
    --palette--;;hiddenpalette';


// add the glossary list item configuration
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_glossarylist']['showitem'] = '
    header;Titel,
    subheader;Kurztext,
    link;Weiterführender LInk,
    linktype;Icon,
    --palette--;;hiddenpalette';

// add the definition-style list item configuration
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_2collist']['showitem'] = '
    header;Überschrift (linke Spalte),
    subheader;Subheader (optional),
    bodytext;Text,
    --palette--;;hiddenpalette';

// add the definition-style list item configuration
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_2collistRTE']['showitem'] = '
    header;Überschrift (linke Spalte),
    subheader;Subheader (optional),
    bodytext;Text,
    --palette--;;hiddenpalette';
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_2collistRTE']['columnsOverrides']['bodytext']['defaultExtras'] = 'richtext:rte_transform[mode=ts_css]';


// add the definition list for wevo_table
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_table']['showitem'] = '
    header;Bezeichner,
    subheader;Erklärungstext,
    --palette--;;hiddenpalette';


// add the definition list for wevo_certificates
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_certificates']['showitem'] = '
    image;Zertifikat (SVG),
    bodytext;Text,
    --palette--;;hiddenpalette';

// wevo interactive graphic
$GLOBALS['TCA']['tx_b13ce_items']['types']['wevo_interactivegraphic']['showitem'] = '
    --palette--;Flaggentitel und Textgröße;wevo_interactivegraphic_headline,
    --palette--;Hotspot- und Flaggenplatzierung;wevo_interactivegraphic_coordinates,
    ' . $tempShowitems1;
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items','wevo_interactivegraphic_headline','    
    header;LLL:EXT:site_wevo/Resources/Private/Language/db.xml:header,
    subheader;LLL:EXT:site_wevo/Resources/Private/Language/db.xml:subheader,
');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tx_b13ce_items','wevo_interactivegraphic_coordinates','    
    subheader2;LLL:EXT:site_wevo/Resources/Private/Language/db.xml:subheader2,
    subheaderalt;LLL:EXT:site_wevo/Resources/Private/Language/db.xml:subheaderalt,--linebreak--,
    subheader2alt;LLL:EXT:site_wevo/Resources/Private/Language/db.xml:subheader2alt,
');
