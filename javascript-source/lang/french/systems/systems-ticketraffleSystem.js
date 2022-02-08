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

$.lang.register('ticketrafflesystem.err.raffle.opened', 'Une tombola de billets est déjà ouverte.');
$.lang.register('ticketrafflesystem.err.missing.syntax', 'Usage: !traffle open [entrées max] [multiplicateur de billets réguliers (par défaut = 1)] [multiplicateur de billets d\'abonnés (par défaut = 1)] [coût] [ -suiveurs]');
$.lang.register('ticketrafflesystem.msg.need.to.be.follwing', 'Vous devez suivre pour participer.');
$.lang.register('ticketrafflesystem.raffle.opened', 'La tombola de billets est maintenant ouverte ! Achetez jusqu\'à 1 $ de billets avec !tickets - vous pouvez acheter plusieurs fois. Les billets coûtent 2 $. 3 $');
$.lang.register('ticketrafflesystem.err.raffle.not.opened', 'Il n\'y a pas de tombola ouverte.');
$.lang.register('ticketrafflesystem.raffle.closed', 'La tombola de billets est maintenant fermée. Utilisez "!traffle draw" pour tirer au sort un gagnant.');
$.lang.register('ticketrafflesystem.raffle.close.err', 'La tombola de billets est terminée. Personne n\'a participé.');
$.lang.register('ticketrafflesystem.winner', 'Le gagnant de cette tombola de billets est : 1 $ ! 2 $');
$.lang.register('ticketrafflesystem.only.buy.amount', 'Vous ne pouvez acheter que 1 $ de billet(s)');
$.lang.register('ticketrafflesystem.limit.hit', 'Vous n\'êtes autorisé à acheter que des billets à 1 $');
$.lang.register('ticketrafflesystem.err.not.following', 'Vous devez suivre pour participer.');
$.lang.register('ticketrafflesystem.err.points', 'Vous n\'avez pas assez de $1 pour participer.');
$.lang.register('ticketrafflesystem.entered', '1 $ entrées ajoutées au tirage au sort ! (2 billets au total)');
$.lang.register('ticketrafflesystem.entered.bonus', '1 $ (+ 2 $ bonus) entrées ajoutées au tirage au sort ! (3 $ (+ 4 $ bonus) billets au total)');
$.lang.register('ticketrafflesystem.usage', 'Utilisation : !traffle open [entrées max] [multiplicateur de tickets réguliers (par défaut = 1)] [multiplicateur de tickets abonnés (par défaut = 1)] [coût] [-followers]' );
$.lang.register('ticketrafflesystem.msg.enabled', 'Les messages de tombola de tickets ont été activés.');
$.lang.register('ticketrafflesystem.msg.disabled', 'Les messages de tombola de tickets ont été désactivés.');
$.lang.register('ticketrafflesystem.ticket.usage', 'Utilisation : !tickets (montant) - Et vous avez actuellement des billets à 1 $.');
$.lang.register('ticketrafflesystem.ticket.usage.bonus', 'Utilisation : !tickets (montant) - Et vous avez actuellement des billets à 1$ (+ 2$ de bonus).');
$.lang.register('ticketrafflesystem.auto.msginterval.set', 'Intervalle de message défini sur $1 minutes.');
$.lang.register('ticketrafflesystem.auto.msg.set', 'Message défini sur $1.');
$.lang.register('ticketrafflesystem.auto.msg.usage', 'Utilisation : !traffle autoannouncemessage [montant en minutes]');
$.lang.register('ticketrafflesystem.auto.msginterval.usage', 'Utilisation : !traffle autoannounceinterval [montant en minutes]');
$.lang.register('ticketrafflesystem.reset', 'La tombola a été réinitialisée.');