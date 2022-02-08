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

$.lang.register('audiohook.usage', 'Utilisation : !audiohook [play / list / customcommand / togglemessages]');
$.lang.register('audiohook.play.usage', 'Utilisation : !audiohook play [audio_hook]');
$.lang.register('audiohook.play.404', 'Le crochet audio n\'existe pas : $1');
$.lang.register('audiohook.play.success', 'Hook audio envoyé : $1');
$.lang.register('audiohook.list', 'Hooks audio : $1');
$.lang.register('audiohook.list.total', 'Total pages : $1');
$.lang.register('audiohook.toggle', 'Les messages audio ont été définis sur $1.');
$.lang.register('audiohook.customcommand.usage', 'Utilisation : !audiohook customcommand [ajouter/supprimer] [commande] [nom du son]');
$.lang.register('audiohook.customcommand.add.usage', 'Utilisation : !audiohook customcommand add [commande] [nom du son]');
$.lang.register('audiohook.customcommand.add.error.exists', 'Cette commande existe déjà ou est un alias.');
$.lang.register('audiohook.customcommand.add.list', 'Command !$1 donnera maintenant une liste de toutes les commandes audio hook.');
$.lang.register('audiohook.customcommand.add.error.fx.null', 'Ce hook audio n\'existe pas. Utilisez : "!audioHook list" pour voir la liste audio.');
$.lang.register('audiohook.customcommand.add.success', 'La commande !$1 va maintenant déclencher le hook audio $2!');
$.lang.register('audiohook.customcommand.remove.usage', 'Utilisation : !audiohook customcommand remove [commande]');
$.lang.register('audiohook.customcommand.remove.error.404', 'Cette commande n\'existe pas.');
$.lang.register('audiohook.customcommand.remove.success', 'La commande !$1 a été supprimée.');