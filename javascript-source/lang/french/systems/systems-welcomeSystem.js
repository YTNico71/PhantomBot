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

$.lang.register('welcomesystem.set.autowelcome.enabled', 'Accueil automatique activé. $1 accueillera désormais les nouveaux chatteurs.');
$.lang.register('welcomesystem.set.autowelcome.disabled', 'Accueil automatique désactivé.');
$.lang.register('welcomesystem.set.message.empty', '$1 n\'accueillera que les premiers chats.');
$.lang.register('welcomesystem.set.message.success', '$1 accueillera les nouveaux chatteurs avec "$2".');
$.lang.register('welcomesystem.set.firstmessage.empty', '$1 accueillera les premiers chatteurs avec le message par défaut.');
$.lang.register('welcomesystem.set.firstmessage.success', '$1 accueillera les premiers chats avec "$2".');
$.lang.register('welcomesystem.set.cooldown.show', 'Current cooldown: $1 hours. Use: !welcome cooldown hours to change it.');
$.lang.register('welcomesystem.set.cooldown.usage', 'Utilisation : !welcome cooldown [heures]. Par exemple !welcome cooldown 6');
$.lang.register('welcomesystem.set.cooldown.success', 'Welcome cooldown set to $1 hours.');
$.lang.register('welcomesystem.set.disableuser.usage', 'Utilisation : !welcome disable user.');
$.lang.register('welcomesystem.set.disableuser.fail', 'L\'accueil de $1 est déjà désactivé.');
$.lang.register('welcomesystem.set.disableuser.success', '$1 n\'accueillera pas $2.');
$.lang.register('welcomesystem.set.enableuser.usage', 'Utilisation : !welcome enable user.');
$.lang.register('welcomesystem.set.enableuser.fail', 'L\'accueil est déjà activé.');
$.lang.register('welcomesystem.set.enableuser.success', '$1 accueillera $2.');
$.lang.register('welcomesystem.generalusage', 'Usage : !welcome [toggle | setmessage text | setfirstmessage text | disable user | enable user]. Balises pour le texte du message : (noms), (1 texte pour un nom), (2 pour deux), (3 pour trois noms ou plus)');
$.lang.register('welcomesystem.names.join1', ', ');
$.lang.register('welcomesystem.names.join2', ', and ');