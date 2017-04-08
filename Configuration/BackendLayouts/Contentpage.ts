mod.web_layout.BackendLayouts {
	Contentpage {
		title = Inhaltsseite
		config {
			backend_layout {
				colCount = 1
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Seiteninhalt
								colPos = 0
								colspan = 1
								allowed = menu,wevo_headerlead,wevo_videomodule,wevo_2collist,wevo_2collistRTE,wevo_timeline,wevo_simpletext,wevo_simpletextRTE,gridelements_pi1,header,text,textpic,image,list,dce_dceuid1,dce_dceuid2,dce_dceuid3,dce_dceuid4,dce_dceuid5
								allowedGridTypes = Propertyteasercontainer
							}
						}
					}
				}
			}
		}
	}
}


mod.web_layout.BackendLayouts {
	ContentpageFullWidth {
		title = Inhaltsseite Volle Breite
		config {
			backend_layout {
				colCount = 4
				rowCount = 2
				rows {
					1 {

						columns {
							1 {
								name = Key Visual (optional)
								colPos = 2
								colspan = 1
								allowed = wevo_keyvisual,header,text,textpic,image
							}
						}
					}

					2 {
						columns {



							1 {
								name = Seiteninhalt
								colPos = 0
								colspan = 4
								allowed = menu,wevo_headerlead,wevo_videomodule,wevo_2collist,wevo_2collistRTE,wevo_timeline,wevo_simpletext,wevo_simpletextRTE,gridelements_pi1,header,text,textpic,image,list,dce_dceuid1,dce_dceuid2,dce_dceuid3,dce_dceuid4,dce_dceuid5
								allowedGridTypes = Propertyteasercontainer
							}
						}
					}
				}
			}
		}
	}
}