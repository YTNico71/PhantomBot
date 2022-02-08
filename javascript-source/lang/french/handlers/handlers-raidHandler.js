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

$.lang.register('raidhandler.usage', 'Utilisation : !raid [nom d\'utilisateur] | !raid [toggle / lookup / setreward / setincomingmessage / setnewincomingmessage / setoutgoingmessage / setoutgoingmessagespam]');
$.lang.register('raidhandler.toggle.enabled', 'Les alertes Raid ont été activées avec succès.');
$.lang.register('raidhandler.toggle.disabled', 'Les alertes Raid ont été désactivées avec succès.');
$.lang.register('raidhandler.reward.usage', 'Utilisation : !raid setreward [montant]');
$.lang.register('raidhandler.reward.set', 'La récompense de raid a été réglée avec succès sur 1 $.');
$.lang.register('raidhandler.inc.message.usage', 'Utilisation : !raid setincomingmessage [message] - Variables : (nom d\'utilisateur), (spectateurs), (url), (heures) et (jeu)');
$.lang.register('raidhandler.inc.message.set', 'Le message de raid entrant a été mis à jour avec succès !');
$.lang.register('raidhandler.new.inc.message.usage', 'Utilisation : !raid setnewincomingmessage [message] - Variables : (nom d\'utilisateur), (spectateurs), (url) et (jeu)');
$.lang.register('raidhandler.new.inc.message.set', 'Le nouveau message de raid entrant a été mis à jour avec succès !');
$.lang.register('raidhandler.out.message.usage', 'Utilisation : !raid setoutgoingmessage [message] - Variables (nom d\'utilisateur) et (url)');
$.lang.register('raidhandler.out.message.set', 'Le message de raid sortant a été mis à jour avec succès !');
$.lang.register('raidhandler.spam.amount.usage', 'Utilisation : !raid setoutgoingmessagespam [montant] - Le maximum est de 10 fois.');
$.lang.register('raidhandler.spam.amount.set', 'Mise à jour avec succès du nombre de spams sortants !');
$.lang.register('raidhandler.lookup.usage', 'Utilisation : !raid lookup [nom d\'utilisateur]');
$.lang.register('raidhandler.lookup.user', '$1 a fait un raid sur cette chaîne un total de $2 fois. Leur dernier raid était sur $3 avec 4$ spectateurs.');
$.lang.register('raidhandler.lookup.user.404', '$1 n\'a jamais attaqué ce canal.');