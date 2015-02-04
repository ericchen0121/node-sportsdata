var config = require('../config');

function createUrlWithEndpoint(entity, endpoint) {
  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[season]/[nba_season]/[endpoint].xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version 
    + '/'
    + entity
    + '/'
    + config.nba.seasonID
    + '/'
    + config.nba.season
    + '/'
    + endpoint
    + '.'
    + config.nba.format
    + '?api_key='
    + config.nba.apikey;
}

function createUrlWithEndpointWithDate(entity, endpoint, year, month, day) {
  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[year]/[month]/[day]/[endpoint].xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/'
    + entity
    + '/'
    + year
    + '/'
    + month
    + '/'
    + day
    + '/'
    + endpoint
    + '.xml?api_key='
    + config.nba.apikey;
}

function createSeasonScheduleUrl() {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[season]/[nba_season]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpoint('games', 'schedule');
}

function createDailyScheduleUrl(year, month, day) {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[year]/[month]/[day]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpointWithDate('games', 'schedule', year, month, day);
}

function createSeriesScheduleUrl() {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[year]/[month]/[day]/schedule.xml?api_key=[your_api_key]
  return createUrlWithEndpointWithDate('series', 'schedule', year, month, day);
}

function createBoxScoreUrl(gameID) {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[game_id]/boxscore.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/games/'
    + gameID
    + '/boxscore.json?api_key='
    + config.nba.apikey;
}

function createStandingsUrl() {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/seasontd/[season]/[nba_season]/standings.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/seasontd/'
    + config.nba.seasonID
    + '/'
    + config.nba.season
    + '/standings.json?api_key='
    + config.nba.apikey;
}

function createRankingsUrl() {
  // URL should look like:  http://api.sportsdatallc.org/nba-[access_level][version]/seasontd/[season]/[nba_season]/rankings.xml?api_key=[your_api_key]
return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/seasontd/'
    + config.nba.seasonID
    + '/'
    + config.nba.season
    + '/rankings.json?api_key='
    + config.nba.apikey;
}

function createLeagueHierarchyUrl() {
  // URL should look like: nba-t3/league/hierarchy:format
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/league/'
    + '/hierarchy.json?api_key='
    + config.nba.apikey;
}

function createTeamProfileUrl(teamID) {
  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/teams/[team_id]/profile.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/teams/'
    + teamID
    + '/profile.json?api_key='
    + config.nba.apikey;
}

function createPlayerProfileUrl(playerID) {
  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/teams/[team_id]/profile.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/players/'
    + playerID
    + '/profile.json?api_key='
    + config.nba.apikey;
}
function createGameSummaryUrl(gameID) {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/games/[game_id]/summary.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/games/'
    + gameID
    + '/summary.json?api_key='
    + config.nba.apikey;
}

function createInjuriesUrl() {

  // URL should look like: http://api.sportsdatallc.org/nba-[access_level][version]/league/injuries.xml?api_key=[your_api_key]
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/league/'
    + '/injuries.json?api_key='
    + config.nba.apikey;
}

function createPlayByPlayUrl(gameID) {
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/games/'
    + gameID
    + '/pbp.json?api_key='
    + config.nba.apikey;

}

function createSeasonalStatisticsUrl(teamID) {
  return 'http://api.sportsdatallc.org/nba-'
    + config.nba.access_level
    + config.nba.version
    + '/seasontd/'
    + config.nba.seasonID
    + '/'
    + config.nba.season
    + '/teams/'
    + teamID
    + '/statistics.json?api_key='
    + config.nba.apikey;
}

function createDailyChangeLogUrl(year, month, day) {
  return createUrlWithEndpointWithDate('league', 'changes', year, month, day);
}

function createDailyTransfersUrl(year, month, day) {
  return createUrlWithEndpointWithDate('league', 'transfers', year, month, day);
}

module.exports = {

  getSeasonScheduleUrl: function () {
    return createSeasonScheduleUrl();
  },

  getDailyScheduleUrl: function (year, month, day) {
    return createDailyScheduleUrl(year, month, day);
  },

  getSeriesSchedulesUrl: function (year, month, day) {
    return createSeriesScheduleUrl();
  },

  getBoxScoreUrl: function (gameID) {
    return createBoxScoreUrl(gameID);
  },

  getGameSummaryUrl: function (gameID) {
    return createGameSummaryUrl(gameID);
  },

  getStandingsUrl: function () {
    return createStandingsUrl();
  },

  getRankingsUrl: function () {
    return createRankingsUrl();
  },

  getLeagueHierarchyUrl: function() {
    return createLeagueHierarchyUrl()
  }, 

  getInjuriesUrl: function () {
    return createInjuriesUrl();
  },

  getTeamProfileUrl: function (teamID) {
    return createTeamProfileUrl(teamID);
  }, 

  getPlayerProfileUrl: function (playerID) {
    return createPlayerProfileUrl(teamID);
  }

  getGameSummaryUrl: function (gameID) {
    return createGameSummaryUrl(gameID)
  
  getPlayByPlayUrl: function(gameID) {
    return createPlayByPlayUrl(gameID)
  }

  getSeasonalStatisticsUrl: function(teamID) {
    return createSeasonalStatisticsUrl(teamID)
  }

  getDailyChangeLogUrl: function(year, month, day) {
    return createDailyChangeLogUrl(year, month, day)
  }

  getDailyTransfersUrl: function(year, month, day) {
    return createDailyTransfersUrl(year, month, day)
  }
  
}

