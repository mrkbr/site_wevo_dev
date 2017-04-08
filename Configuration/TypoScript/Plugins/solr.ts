plugin.tx_solr {
	enabled = 1
	enableDebugMode = 0
	general {
		dateFormat.date = d.m.Y H:i
	}

	templateFiles {
		#		frequentSearches = EXT:solr/resources/templates/pi_frequentsearches/frequentsearches.htm
		pagebrowser      = EXT:site_wevo/Resources/Private/Plugins/Solr/Pi_results/pagebrowser.html
		results          = EXT:site_wevo/Resources/Private/Plugins/Solr/Pi_results/results.html
		search           = EXT:site_wevo/Resources/Private/Plugins/Solr/Pi_search/searchFormHeader.html
	}

	cssFiles {
		#		results     = EXT:solr/resources/css/pi_results/results.css
		results >
		#		pagebrowser = EXT:pagebrowse/res/styles_min.css
		pagebrowser >
		# ui          = EXT:solr/resources/css/jquery-ui/jquery-ui.custom.css
		ui >
	}

	javascriptFiles {
		loadIn = none

		library = EXT:solr/resources/javascript/jquery/jquery.min.js

		ui = EXT:solr/resources/javascript/jquery/jquery-ui.core.min.js

		ui.autocomplete = EXT:solr/resources/javascript/jquery/jquery-ui.autocomplete.min.js

		ui.datepicker    = EXT:solr/resources/javascript/jquery/jquery-ui.datepicker.min.js
		ui.datepicker.de = EXT:solr/resources/javascript/jquery/ui-i18n/jquery.ui.datepicker-de.js
		ui.datepicker.fr = EXT:solr/resources/javascript/jquery/ui-i18n/jquery.ui.datepicker-fr.js
		ui.datepicker.nl = EXT:solr/resources/javascript/jquery/ui-i18n/jquery.ui.datepicker-nl.js

		ui.slider = EXT:solr/resources/javascript/jquery/jquery-ui.slider.min.js

		suggest = EXT:solr/Resources/Javascript/eidSuggest/suggest.js

		faceting.limitExpansion     = EXT:solr/resources/javascript/pi_results/results.js
		faceting.dateRangeHelper    = EXT:solr/resources/javascript/pi_results/date_range_facet.js
		faceting.numericRangeHelper = EXT:solr/resources/javascript/pi_results/numeric_range_facet.js
	}

	index {

		additionalFields {
			resultUrl =
		}

		// assigns processing instructions to Solr fields during indexing, Solr field = processing instruction
		fieldProcessingInstructions {
			changed = timestampToIsoDate
			created = timestampToIsoDate
			endtime = timestampToIsoDate
			rootline = pageUidToHierarchy
		}

		queue {

			// mapping tableName.fields.SolrFieldName => TableFieldName (+ cObj processing)

			pages = 1
			pages {
				initialization = tx_solr_indexqueue_initializer_Page

				indexingPriority = 0

				indexer = tx_solr_indexqueue_PageIndexer
				indexer {
					// add options for the indexer here
				}

				// only index standard pages
				additionalWhereClause = doktype = 1 AND no_search = 0

				fields {

				}
			}

		}
	}

	search {
		targetPage = {$wevo.pages.searchresults}

		initializeWithEmptyQuery = 0
		showResultsOfInitialEmptyQuery = 0
		keepExistingParametersForNewSearches = 0

		query {
			allowEmptyQuery = 0

			allowedSites = __solr_current_site

			fields = sortAuthor_stringS^50.0, sortTitle_stringS^50.0, sortSubTitle_stringS^50.0, section_stringS^50.0, topics_stringM^50.0, content^20.0, title^5.0, keywords^2.0, tagsH1^5.0, tagsH2H3^3.0, tagsH4H5H6^2.0, tagsInline^1.0
			fields = content^20.0, title^5.0, keywords^2.0, tagsH1^5.0, tagsH2H3^3.0, tagsH4H5H6^2.0, tagsInline^1.0

			// see http://wiki.apache.org/solr/DisMaxRequestHandler#mm_.28Minimum_.27Should.27_Match.29
			minimumMatch =

			// see http://wiki.apache.org/solr/DisMaxRequestHandler#bf_.28Boost_Functions.29
			boostFunction =

			// see http://wiki.apache.org/solr/DisMaxQParserPlugin#bq_.28Boost_Query.29
			boostQuery =

			filter {

			}

			sortBy =

			getParameter = q
		}

		results {
			resultsHighlighting = 1
			resultsHighlighting {
				highlightFields = content
				fragmentSize = 200

				wrap = <span class="c_highlight">|</span>
			}
			siteHighlighting = 1

			resultsPerPage = {$plugin.tx_solr.search.results.resultsPerPage}
			resultsPerPageSwitchOptions = 10, 25, 50

			pagebrowser {
				enabled = 1
				disableCacheHash = 1

				#				_LOCAL_LANG.default {
				#					text_first = First
				#					text_prev = Previous
				#					text_next = Next
				#					text_last = Last
				#				}
			}

			# fieldname => processing instruction, available instructions: timestamp, skip (removes the field from the result)
			fieldProcessingInstructions {
				changed = timestamp
				created = timestamp
				indexed = timestamp
				# TODO rename the skip instruction to remove?!
				spell = skip
			}

			fieldRenderingInstructions {

				url = CASE
				url {
					key.field = type

					default = TEXT
					default {
						field = url
						htmlSpecialChars = 1
						htmlSpecialChars.preserveEntities = 1
					}
				}

				link = CASE
				link {
					key.field = type

					pages  = TEXT
					pages {
						field = title

						typolink {
							parameter.field = uid
						}
					}

					default  = TEXT
					default {
						field = title

						typolink {
							parameter.field = url
							extTarget =
						}
					}
				}

				pathurl = TEXT
				pathurl {
					typolink.parameter.field = uid
					typolink.returnLast = url
				}
			}

			showDocumentScoreAnalysis = 0
		}

		spellchecking = 0
		spellchecking {
			wrap = |<div class="spelling-suggestions">###LLL:didYouMean### |</div>|
			searchUsingSpellCheckerSuggestion = 0
		}

		lastSearches = 0
		lastSearches {
			limit = 10
			# tracking mode "user" or "global"
			mode = user
		}

		frequentSearches = 0
		frequentSearches {
			minSize = 14
			maxSize = 32
			limit = 20
			select {
				SELECT = keywords as search_term, count(*) as hits
				FROM = tx_solr_statistics
				ADD_WHERE = AND num_found != 0
				GROUP_BY = keywords
				ORDER_BY = hits DESC, search_term ASC
				checkRootPageId = 1
				checkLanguage = 1
			}

			# cache lifetime in seconds (default is 86400s = 24h)
			cacheLifetime = 86400
		}

		sorting = 0
		sorting {
			defaultOrder = asc

			#			options {
			#				relevance {
			#					field = relevance
			#					label = Relevance
			#				}
			#
			#				title {
			#					field = sortTitle_stringS
			#					label = Title
			#				}
			#
			#				type {
			#					field = type
			#					label = Type
			#				}
			#
			#				author {
			#					field = sortAuthor_stringS
			#					label = Author
			#				}
			#
			#				created {
			#					field = created
			#					label = Creation Date
			#				}
			#			}
		}

		faceting = 0
		faceting {
			minimumCount = 1
			sortBy = count
			limit = 10
			singleFacetMode = 0
			showEmptyFacets = 0
			keepAllFacetsOnSelection = 0

			facetLinkATagParams = rel="nofollow"

			facetLinkUrlParameters =

			facetOrder = type, author
			facets {
				type {
					label = Content Type
					field = type
				}
			}

			// available place holders: @facetValue, @facetName, @facetLabel, @facetText
			removeFacetLinkText = @facetLabel: @facetText

			showAllLink.wrap = <li>|</li>
		}

	}

	suggest = 1
	suggest {
		numberOfSuggestions = 10
		suggestField = spell
		forceHttps = 0
	}

	statistics = 0

	viewhelpers {
		crop {
			maxLength = 300
			cropIndicator = ...
		}
	}

	logging {
		exceptions = 1

		indexing {
			indexQueueInitialization = 0
			missingTypo3SearchMarkers = 1
			pageIndexed = 0

			queue {
				pages = 0
			}
		}

		query {
			filters = 0
			searchWords = 0
			queryString = 0
			rawPost = 0
			rawGet = 0
		}
	}


	_LOCAL_LANG.de {
		no_results_nothing_found = Kein Ergebnis
		no_results_nothing_found_tryitagain = Versuchen Sie es erneut:
		no_results_nothing_found_tryitagaintip1 = Achten Sie darauf, dass alle Wörter richtig geschrieben sind.
		no_results_nothing_found_tryitagaintip2 = Probieren Sie es mit anderen Suchbegriffen.
		no_results_nothing_found_tryitagaintip3 = Probieren Sie es mit allgemeineren Suchbegriffen.
		results_range = Ergebnisse @resultsFrom - @resultsTo von @resultsTotal
		results_found = Es wurden @resultsTotal Ergebnisse in @resultsTime Millisekunden gefunden.
		results_searched_for = für „@searchWord“
		searchheadline = Suchergebnisse
		placeholder = Suche
	}

	_LOCAL_LANG.en {
		results_searched_for = @searchWord
		no_results_nothing_found = No Result
		no_results_nothing_found_tryitagaintip1 = Make shure, that all words are written correctly.
		no_results_nothing_found_tryitagaintip2 = Try different search terms.
		no_results_nothing_found_tryitagaintip3 = Try more general search terms.
		no_results_nothing_found_tryitagain = Try it again:
		results_range = Results @resultsFrom - @resultsTo of @resultsTotal
		results_found = Es wurden @resultsTotal Ergebnisse in @resultsTime Millisekunden gefunden.
		results_searched_for = for “@searchWord”
		searchheadline = Your Results
		placeholder = Search
	}
}

# deactivate solr for chinese
[globalVar = GP:L = 2]
	plugin.tx_solr.enabled = 0
[global]