/*
 * Copyright (C) 2016-2021 phantombot.github.io/PhantomBot
 *
 * Ce programme est un logiciel libre : vous pouvez le redistribuer et/ou le modifier
 * sous les termes de la licence publique générale GNU telle que publiée par
 * la Free Software Foundation, soit la version 3 de la Licence, soit
 * (à votre choix) toute version ultérieure.
 *
 * Ce programme est distribué dans l'espoir qu'il sera utile,
 * mais SANS AUCUNE GARANTIE ; sans même la garantie implicite de
 * QUALITÉ MARCHANDE ou ADAPTATION À UN USAGE PARTICULIER. Voir le
 * Licence publique générale GNU pour plus de détails.
 *
 * Vous devriez avoir reçu une copie de la licence publique générale GNU
 * avec ce programme. Si ce n'est pas le cas, consultez <http://www.gnu.org/licenses/>.
 */

$.lang.register('twitter.tweet', '[Flux Twitter de @(twitterid)] $1');
$.lang.register('twitter.tweet.mention', '[Flux Twitter de @(twitterid)] @$1 : $2');
$.lang.register('twitter.reward.announcement', 'Retweets à partir de 1 $ ! Récompense de 2 $ offerte !');
$.lang.register('twitter.usage', 'usage: !twitter [lasttweet | lastmention | lastretweet | set | post | id]');
$.lang.register('twitter.id', '$1 est sur Twitter @$2 [twitter.com/$2]');
$.lang.register('twitter.usage.id', '(!twitter usage for usage)');
$.lang.register('twitter.set.usage', 'usage: !twitter set [message | polldelay | poll | post | updatetimer | reward]');
$.lang.register('twitter.set.polldelay.usage', 'usage: !twitter set polldelay [mentions | retweets | hometimeline | usertimeline]');
$.lang.register('twitter.set.polldelay.minerror', 'Délai d\'interrogation trop court, le minimum est de 1 $ pour ce paramètre.');
$.lang.register('twitter.set.polldelay.mentions.usage', 'usage : !twitter set polldelay mentionne [secondes]. Le minimum est de 60. Actuellement 1 $.');
$.lang.register('twitter.set.polldelay.retweets.usage', 'usage : !twitter set polldelay rewteets [secondes]. Le minimum est de 60. Actuellement 1 $.');
$.lang.register('twitter.set.polldelay.hometimeline.usage', 'usage : !twitter set polldelay hometimeline [secondes]. Le minimum est de 60. Actuellement 1 $.');
$.lang.register('twitter.set.polldelay.usertimeline.usage', 'usage : !twitter set polldelay usertimeline [secondes]. Le minimum est de 15. Actuellement 1 $.');
$.lang.register('twitter.set.polldelay.mentions.success', 'Définir les mentions Twitter polldelay à $1 secondes.');
$.lang.register('twitter.set.polldelay.retweets.success', 'Définir les retweets Twitter polldelay à $1 secondes.');
$.lang.register('twitter.set.polldelay.hometimeline.success', 'Définir Twitter polldelay hometimeline à $1 secondes.');
$.lang.register('twitter.set.polldelay.usertimeline.success', 'Définir Twitter polldelay usertimeline à $1 secondes.');
$.lang.register('twitter.set.poll.usage', 'usage: !twitter set poll [mentions | retweets | hometimeline | usertimeline]');
$.lang.register('twitter.set.poll.mentions.usage', 'usage: !twitter set poll mentions [on/off]. Actuellement $1. Polls @mentions from Twitter.');
$.lang.register('twitter.set.poll.retweets.usage', 'usage: !twitter set poll retweets [on/off]. Actuellement $1. Interroge vos retweets depuis Twitter.');
$.lang.register('twitter.set.poll.hometimeline.usage', 'usage: !twitter set poll hometimeline [on/off]. Actuellement 1 $. Interroge l\'intégralité de votre journal sur Twitter, inclut tous les Tweets sur votre journal des autres . Désactive toutes les autres interrogations.');
$.lang.register('twitter.set.poll.usertimeline.usage', 'usage: !twitter set poll usertimeline [on/off]. Actuellement 1 $. Interroge vos Tweets depuis Twitter.');
$.lang.register('twitter.set.poll.mentions.success', 'Définir les mentions de sondage Twitter sur $1.');
$.lang.register('twitter.set.poll.retweets.success', 'Définir les retweets du sondage Twitter sur $1.');
$.lang.register('twitter.set.poll.hometimeline.success', 'Définir la ligne d\'accueil du sondage Twitter sur $1. Core n\'interrogera plus rien d\'autre.');
$.lang.register('twitter.set.poll.usertimeline.success', 'Définir la chronologie de l\'utilisateur du sondage Twitter sur $1.');
$.lang.register('twitter.set.post.usage', 'usage: !twitter set post [online | gamechange | update]');
$.lang.register('twitter.set.post.online.usage', 'usage: !twitter set post online [on/off]. Actuellement $1.');
$.lang.register('twitter.set.post.gamechange.usage', 'usage: !twitter set post gamechange [on/off]. Actuellement $1.');
$.lang.register('twitter.set.post.update.usage', 'usage: !twitter set post update [on/off]. Actuellement $1.');
$.lang.register('twitter.set.post.online.success', 'Définir la publication Twitter en ligne sur $1.');
$.lang.register('twitter.set.post.gamechange.success', 'Définir Twitter post gamechange à $1.');
$.lang.register('twitter.set.post.update.success', 'Définir la mise à jour de la publication Twitter sur $1.');
$.lang.register('twitter.set.message.usage', 'usage; !twitter set message [online | gamechange]');
$.lang.register('twitter.set.message.online.usage', 'usage : !twitter set message online [message]. Tags : (jeu) (twitchurl). Actuellement : $1');
$.lang.register('twitter.set.message.online.success', 'Définir le message en ligne de publication automatique de Twitter sur $1');
$.lang.register('twitter.set.message.gamechange.usage', 'usage: !twitter set message gamechange [message]. Tags: (jeu) (twitchurl). Cuactuellement : $1');
$.lang.register('twitter.set.message.gamechange.success', 'Définir le message de changement de jeu de publication automatique de Twitter sur $1');
$.lang.register('twitter.set.message.update.usage', 'usage: !twitter set message update [message]. Tags: (jeu) (twitchurl) (uptime). Actuellement : $1');
$.lang.register('twitter.set.message.update.success', 'Définir le message de mise à jour automatique de Twitter sur $1');
$.lang.register('twitter.set.updatetimer.usage', 'usage: !twitter set updatetimer [minutes]. Le minimum autorisé est de 60 minutes pour tenter de compenser le rejet des publications en double de Twitter.');
$.lang.register('twitter.set.updatetimer.toosmall', 'La valeur minimale autorisée est de 180 minutes pour tenter de compenser le rejet des publications en double de Twitter.');
$.lang.register('twitter.set.updatetimer.success', 'Définir la minuterie de mise à jour de Twitter sur $1 minutes.');
$.lang.register('twitter.set.reward.usage', 'usage : !twitter définir la récompense [basculer | points | cooldown | annoncer]');
$.lang.register('twitter.set.reward.toggle.usage', 'usage : !twitter définir la bascule de récompense [on/off]. Actuellement 1 $. Basculer les récompenses pour les retweets.');
$.lang.register('twitter.set.reward.toggle.success', 'Définir les récompenses de retweet Twitter sur 1 $.');
$.lang.register('twitter.set.reward.points.usage', 'usage : !twitter fixe des points de récompense [points]. Actuellement 1 $. Fixe le montant de la récompense pour les rewtweets.');
$.lang.register('twitter.set.reward.points.success', 'Définir le montant de la récompense de retweet Twitter à 1 $.');
$.lang.register('twitter.set.reward.cooldown.usage', 'usage : !twitter définit le temps de recharge des récompenses [heures]. Actuellement 1 $. Heures que l\'utilisateur doit attendre entre les récompenses.');
$.lang.register('twitter.set.reward.cooldown.success', 'Définir le temps de recharge de la récompense de retweet Twitter à 1 $ heures.');
$.lang.register('twitter.set.reward.announce.usage', 'usage : !twitter définir l\'annonce de la récompense [on/off]. Actuellement 1 $. Activer/désactiver l\'annonce des récompenses pour les retweets.');
$.lang.register('twitter.set.reward.announce.success', 'Définir les annonces de récompense de retweet Twitter sur 1 $.');
$.lang.register('twitter.post.usage', 'usage : !twitter post [message]');
$.lang.register('twitter.post.sent', 'Envoyé à Twitter : $1');
$.lang.register('twitter.post.failed', 'Impossible d\'envoyer le message à Twitter.');
$.lang.register('twitter.lasttweet', 'Dernier Tweet : $1');
$.lang.register('twitter.lasttweet.disabled', 'Ne pas interroger les Tweets depuis la maison ou la chronologie de l\'utilisateur.');
$.lang.register('twitter.lastmention', 'Dernière mention : $1');
$.lang.register('twitter.lastmention.disabled', 'Pas de mentions d\'interrogation.');
$.lang.register('twitter.lastretweet', 'Dernier retweet : $1');
$.lang.register('twitter.lastretweet.disabled', 'Pas d\'interrogation des retweets.');
$.lang.register('twitter.register.usage', 'usage: !twitter register [twitter_id]. Actuellement $1. Enregistrez/changez votre identifiant Twitter.');
$.lang.register('twitter.register.success', 'Enregistré votre identifiant Twitter en tant que $1. Pour vous désinscrire, exécutez !twitter unregister.');
$.lang.register('twitter.register.notregistered', 'aucun identifiant n\'est enregistré');
$.lang.register('twitter.register.inuse', 'Twitter ID est déjà enregistré : $1');
$.lang.register('twitter.unregister', 'Désenregistrement de votre identifiant Twitter.');