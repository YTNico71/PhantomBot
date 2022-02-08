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

$.lang.register('rafflesystem.open.error.opened', 'Une tombola est actuellement en cours.');
$.lang.register('rafflesystem.open.usage', 'Utilisation : !raffle open [-usetime minutes | -usepoints entry_fee] [keyword] [close timer minutes] [-followers | -subscribers]. [keyword] requis. ');
$.lang.register('rafflesystem.open.time', 'Une tombola est maintenant ouverte ! Tapez $1 pour participer. Vous devez avoir été en discussion pendant $2 minutes $3 pour participer. $4');
$.lang.register('rafflesystem.open.points', 'Une tombola est maintenant ouverte ! Tapez $1 pour participer. La saisie coûte 2 $ ! 3 $');
$.lang.register('rafflesystem.open', 'Une tombola est maintenant ouverte ! Tapez $1 pour entrer $2 ! $3');
$.lang.register('rafflesystem.close.error.closed', 'Il n\'y a pas de tombola en cours.');
$.lang.register('rafflesystem.close.success', 'La tombola est maintenant fermée ! Plus aucune participation ne sera comptabilisée. Utilisez « ! tirage au sort » pour choisir un gagnant !');
$.lang.register('rafflesystem.winner', 'Le gagnant de cette tombola est de 1 $ ! 2 $');
$.lang.register('rafflesystem.whisper.winner', 'Vous avez gagné le tirage au sort dans le canal $1 !');
$.lang.register('rafflesystem.repick.error', 'Il n\'y a plus d\'utilisateurs dans la liste de tombola.');
$.lang.register('rafflesystem.enter.404', 'Vous avez déjà participé à cette tombola.');
$.lang.register('rafflesystem.enter.following', 'Vous devez suivre pour participer à ce tirage.');
$.lang.register('rafflesystem.enter.subscriber', 'Vous devez être abonné pour participer à cette tombola.');
$.lang.register('rafflesystem.enter.points', 'Vous n\'avez pas assez de $1 pour participer à ce tirage.');
$.lang.register('rafflesystem.enter.time', 'Vous n\'êtes pas resté sur le canal assez longtemps pour participer à cette tombola.');
$.lang.register('rafflesystem.usage', 'Utilisation : !raffle [open / close / draw / results / subscriberbonus/ regularbonus / whisperwinner]');
$.lang.register('rafflesystem.results', 'Une tombola est toujours ouverte ! Mot-clé : $1 - Total des participations : $2');
$.lang.register('rafflesystem.fee', ' - Frais d\'inscription : 1 $');
$.lang.register('rafflesystem.subbonus.usage', 'Utilisation : !raffle subscriberbonus [1-10]');
$.lang.register('rafflesystem.subbonus.set', 'La chance du bonus d\'abonné est fixée à 1 $ !');
$.lang.register('rafflesystem.regbonus.usage', 'Utilisation : !raffle regularbonus [1-10]');
$.lang.register('rafflesystem.regbonus.set', 'Le bonus de chance régulier est fixé à 1 $ !');
$.lang.register('rafflesystem.whisper.winner.toggle', 'Les gagnants de la tombola seront chuchotés à 1 $.');
$.lang.register('rafflesystem.raffle.repick.toggle1', 'Les gagnants de la tombola ne seront plus re-choisis.');
$.lang.register('rafflesystem.raffle.repick.toggle2', 'Les gagnants de la tombola pourront désormais être repiqués.');
$.lang.register('rafflesystem.message.usage', 'Utilisation : !raffle message [message]');
$.lang.register('rafflesystem.message.set', 'Le message de tombola a été défini sur : "$1".');
$.lang.register('rafflesystem.timer.usage', 'Utilisation : !raffle messagetimer [minutes]');
$.lang.register('rafflesystem.timer.set', 'La minuterie des messages de tombola a été réglée sur $1 minutes.');
$.lang.register('rafflesystem.common.following', 'Vous devez suivre la chaîne');
$.lang.register('rafflesystem.common.timer', 'La tombola se terminera dans $1 minutes.');
$.lang.register('rafflesystem.common.message', 'n\'est plus');
$.lang.register('rafflesystem.open.keyword-exists', 'Le mot clé ne peut pas être une commande existante : $1');
$.lang.register('rafflesystem.winner.404', 'Impossible de choisir un gagnant. Personne n\'a participé à cette tombola.');
$.lang.register('rafflesystem.isfollowing', '[Abonné]');
$.lang.register('rafflesystem.isnotfollowing', '[Pas un suiveur]');
$.lang.register('rafflesystem.reset', 'La tombola a été réinitialisée.');