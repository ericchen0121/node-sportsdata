var config = {}

config.nfl = {};
config.nfl.access_level = 't';
config.nfl.version = '1';
config.nfl.apikey = '';
config.nfl.year = '2015';
config.nfl.season = 'REG'; // Preseason (PRE), Regular Season (REG), Postseason (PST)
config.nfl.format = 'xml';

config.nba = {};
config.nba.access_level = 't';
config.nba.version = '3';
config.nba.apikey = '';
config.nba.seasonID = '2014';
config.nba.season = 'REG';
config.nfl.format = 'json';

config.mlb = {};
config.mlb.access_level = 't';
config.mlb.version = '3';
config.mlb.apikey = '';
config.mlb.year = '2013';

config.ncaaf = {};
config.ncaaf.access_level = 't';
config.ncaaf.version = '1';
config.ncaaf.season = 'REG';
config.ncaaf.apikey = '';
config.ncaaf.year = '2013';

config.nhl = {};
config.nhl.access_level = 't';
config.nhl.version = '3';
config.nhl.apikey = '';
config.nhl.seasonID = '2013';
config.nhl.season = 'REG';

module.exports = config;