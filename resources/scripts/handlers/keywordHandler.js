!function(){$.bind("ircChannelMessage",function(e){var r,d=e.getMessage().toLowerCase(),n=e.getSender(),a=$.username.resolve(n),o=$.inidb.GetKeyList("keywords","");for(var i in o)if(r=new RegExp("\\b"+o[i]+"\\b","i"),r.exec(d))return keyword=$.inidb.get("keywords",o[i]),keyword=keyword.replace("(sender)",a).replace("(@sender)","@"+a).replace("(baresender)",n).replace("(pointsname)",$.pointNameMultiple).replace("(uptime)",$.getStreamUptime($.channelName)).replace("(game)",$.getGame($.channelName)).replace("(status)",$.getStatus($.channelName)),$.coolDown.get(o[i],n)>0&&!$.isAdmin(n)?void $.consoleDebug("keyword "+o[i]+" not sent because its on a cooldown."):void $.say(keyword)}),$.bind("command",function(e){var r=e.getSender(),d=e.getCommand(),n=(e.getArguments().trim(),e.getArgs()),a=n[0],o=n[1].toLowerCase();if(d.equalsIgnoreCase("keyword")){if(!$.isAdmin(r))return void $.say($.whisperPrefix(r)+$.adminMsg);if(!a)return void $.say($.whisperPrefix(r)+$.lang.get("keywordhandler.keyword.usage"));if(a.equalsIgnoreCase("add")){if(!o)return void $.say($.whisperPrefix(r)+$.lang.get("keywordhandler.add.usage"));var i=n.splice(2).join(" ");return $.inidb.set("keywords",o,i),$.say($.whisperPrefix(r)+$.lang.get("keywordhandler.keyword.added",o)),void $.logEvent("keywordHandler.js",100,r+' added keyword "'+o+'" with the message "'+i+'"')}if(a.equalsIgnoreCase("remove")){if(!o)return void $.say($.whisperPrefix(r)+$.lang.get("keywordhandler.remove.usage"));if(!$.inidb.exists("keywords",o))return void $.say($.whisperPrefix(r)+$.lang.get("keywordhandler.keyword.404"));$.inidb.del("keywords",o),$.say($.whisperPrefix(r)+$.lang.get("keywordhandler.keyword.removed",o)),$.logEvent("keywordHandler.js",100,r+' removed the keyword "'+o+'"')}}}),$.bind("initReady",function(){$.bot.isModuleEnabled("./handlers/keywordHandler.js")&&$.registerChatCommand("./handlers/keywordHandler.js","keyword",1)})}();
