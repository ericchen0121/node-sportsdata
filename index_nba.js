// 2015 Eric Chen
// Copyright 2010-2012 Ryan Gerard
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.


var config = require('./config'),
    request = require('request'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    urlHelper = require('./util/url_helper_nba');

// http://api.sportradar.us/nba-t3/games/2014/REG/schedule.json?api_key=zy2799hzfk77uhcwjax5c58n
function init(access_level, version, apikey, seasonID, season, format) {
    config.nba.access_level = access_level;
    config.nba.version = version;
    config.nba.apikey = apikey;
    config.nba.seasonID = seasonID;
    config.nba.season = season;
    config.nba.format = format;
}

function getSeasonSchedule(callback) {
    var url = urlHelper.getSeasonScheduleUrl();
    createRequest(url, callback);
}

function getDailySchedule(year, month, day, callback) {
    var url = urlHelper.getDailyScheduleUrl(year, month, day);
    createRequest(url, callback);
}

function getSeriesSchedules(callback) {
    var url = urlHelper.getSeriesScheduleUrl();
    createRequest(url, callback);
}

function getBoxScore(gameID, callback) {
  var url = urlHelper.getBoxScoreUrl(gameID);
  createRequest(url, callback);
}

function getStandings(callback) {
    var url = urlHelper.getStandingsUrl();
    createRequest(url, callback);
}

function getRankings(callback) {
    var url = urlHelper.getRankingsUrl();
    createRequest(url, callback);
}

function leagueHierarchy(callback) {
    var url = urlHelper.getLeagueHierarchyUrl();
    createRequest(url, callback);
}

function getGameSummary(gameID, callback) {
  var url = urlHelper.getGameSummaryUrl(gameID);
  createRequest(url, callback);
}

function teamProfile(teamID, callback) {
    var url = urlHelper.getTeamProfileUrl(teamID);
    createRequest(url, callback);
}

function playerProfile(callback) {
    var url = urlHelper.getPlayerProfileUrl();
    createRequest(url, callback);
}

function getInjuries(callback) {
    var url = urlHelper.getInjuriesUrl();
    createRequest(url, callback);
}

function getPlayByPlay(teamID, callback) {
    var url = urlHelper.getPlayByPlayUrl(teamID);
    createRequest(url, callback);
}

function getSeasonalStatistics(teamID, callback) {
    var url = urlHelper.getSeasonalStatisticsUrl(teamID);
    createRequest(url, callback);
}

function getDailyChangeLog(year, month, day, callback) {
    var url = urlHelper.getDailyChangeLogUrl(year, month, day);
    createRequest(url, callback);
}

function getDailyTransfers(year, month, day, callback) {
    var url = urlHelper.getDailyTransfersUrl(year, month, day);
    createRequest(url, callback);
}

function createRequest(url, callback) {
    request(url, function (error, response, body) {

        if (!error && response.statusCode == 200) {

            // Parse the XML to JSON
            parser.parseString(body, function (err, result) {
                callback(err, result);
            });
        } else {
            callback(error, body);
        }
    });
}

module.exports = {

    init: function(access_level, version, apikey, seasonID, season) {
        return init(access_level, version, apikey, seasonID, season);
    },

    setRequest: function(reqObj) {
        request = reqObj;
    },

    getSeasonSchedule: function(callback) {
        return getSeasonSchedule(callback);
    },

    getDailySchedule: function(year, month, day, callback) {
        return getDailySchedule(year, month, day, callback);
    },

    getBoxScore: function(gameID, callback) {
      return getBoxScore(gameID, callback);
    },

    getGameScoreAndStats: function(gameID, callback) {
      return getGameScoreAndStats(gameID, callback);
    },

    getStandings: function(callback) {
        return getStandings(callback);
    },

    getRankings: function(callback) {
        return getRankings(callback);
    },

    getInjuries: function(callback) {
        return getInjuries(callback);
    },

    getRoster: function(teamID, callback) {
        return getRoster(teamID, callback);
    }
};
