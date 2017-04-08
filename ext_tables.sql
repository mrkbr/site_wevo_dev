CREATE TABLE pages (
	wevo_link varchar(1024) DEFAULT '' NOT NULL,
	wevo_linktext varchar(255) DEFAULT '' NOT NULL,
);

CREATE TABLE pages_language_overlay (
	wevo_link varchar(1024) DEFAULT '' NOT NULL,
	wevo_linktext varchar(255) DEFAULT '' NOT NULL,
);

CREATE TABLE tt_content (
	wevo_image2 text,
	wevo_image3 text,
	wevo_image4 text,
	wevo_videoid varchar(255) DEFAULT '' NOT NULL,
	wevo_videoid2 varchar(255) DEFAULT '' NOT NULL,
	wevo_videoid3 varchar(255) DEFAULT '' NOT NULL,
	wevo_videoid4 varchar(255) DEFAULT '' NOT NULL,
	wevo_link3 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext3 varchar(255) DEFAULT '' NOT NULL,
	wevo_link4 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext4 varchar(255) DEFAULT '' NOT NULL,
	wevo_link5 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext5 varchar(255) DEFAULT '' NOT NULL,
	wevo_link6 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext6 varchar(255) DEFAULT '' NOT NULL,
	wevo_link7 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext7 varchar(255) DEFAULT '' NOT NULL,
	wevo_link8 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext8 varchar(255) DEFAULT '' NOT NULL,
	wevo_link9 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext9 varchar(255) DEFAULT '' NOT NULL,
	wevo_link10 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext10 varchar(255) DEFAULT '' NOT NULL,
	wevo_link11 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext11 varchar(255) DEFAULT '' NOT NULL,
	wevo_link12 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext12 varchar(255) DEFAULT '' NOT NULL,
	wevo_link13 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext13 varchar(255) DEFAULT '' NOT NULL,
	wevo_link14 varchar(512) DEFAULT '' NOT NULL,
	wevo_linktext14 varchar(255) DEFAULT '' NOT NULL,
	wevo_additionaltext1 varchar(100) DEFAULT '' NOT NULL,
	wevo_additionaltext2 varchar(100) DEFAULT '' NOT NULL,
	wevo_additionaltext3 varchar(100) DEFAULT '' NOT NULL,
	wevo_additionaltext4 varchar(100) DEFAULT '' NOT NULL,
	wevo_bodytext2 mediumtext,
	wevo_bodytext3 mediumtext,
);

CREATE TABLE tx_b13ce_items (
	subheader2 varchar(255) DEFAULT '' NOT NULL,
	subheader mediumtext,
	headeralt varchar(255) DEFAULT '' NOT NULL,
	subheaderalt mediumtext,
	subheader2alt varchar(255) DEFAULT '' NOT NULL,
	bodytextalt mediumtext,
	layout int(11) unsigned DEFAULT '0' NOT NULL,
);