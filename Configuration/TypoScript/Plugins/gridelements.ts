tt_content.gridelements_pi1.20.10.setup {
	# inserts the container for property teasers
	Propertyteasercontainer < lib.gridelements.defaultGridSetup
	Propertyteasercontainer {
		columns {
			10 < .default
			10.wrap (
				<div class="bJS_showMobileHover b_ct-attributeTeaserModule row">
					|
				</div>
			)
		}
	}
}