<INCLUDE_TYPOSCRIPT: source="FILE:EXT:site_wevo/Configuration/PageTS/TCEMAIN.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:site_wevo/Configuration/PageTS/TCEFORM.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:site_wevo/Configuration/PageTS/Rte.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:site_wevo/Configuration/PageTS/cewizard.ts">


# include backend layouts
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:site_wevo/Configuration/BackendLayouts" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:site_wevo/Configuration/GridElements" extensions="ts">

# remove "Quickedit"
mod.web_layout.menu.function.0 = 0