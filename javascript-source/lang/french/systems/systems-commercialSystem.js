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

$.lang.register('commercialsystem.usage', 'Usage: !commercial (length_secs:30,60,90,120,150,180) [silent] --or-- !commercial autotimer');
$.lang.register('commercialsystem.run', 'Exécution d\'une publicité à 1 $');
$.lang.register('commercialsystem.422', 'Les publicités ne peuvent être diffusées que sur les canaux partenaires, une fois toutes les 8 minutes, lorsque le flux est en direct, pour l\'une des durées suivantes : 30, 60, 90, 120, 150, 180');
$.lang.register('commercialsystem.autotimer.status-off', 'La minuterie automatique commerciale est désactivée. Pour activer : !commercial autotimer (interval_mins : 8 ou supérieur) (length_secs : 30,60,90,120,150,180) [message]');
$.lang.register('commercialsystem.autotimer.status-on', 'Le minuteur automatique commercial est activé. 1 $ secondes d\'annonces toutes les 2 $ minutes. Pour désactiver : !commercial autotimer off --ou-- Pour ajouter/modifier un message : ! message de temporisateur automatique commercial (message) --ou-- Pour supprimer le message : !nomessage de temporisateur automatique commercial');
$.lang.register('commercialsystem.autotimer.bad-parm', 'Impossible de définir le minuteur automatique. L\'intervalle doit être d\'au moins 8 minutes et la longueur doit être l\'une des suivantes : 30, 60, 90, 120, 150, 180');
$.lang.register('commercialsystem.autotimer.status-on-msg', 'Le message envoyé lorsqu\'une publicité automatique démarre : $1');
$.lang.register('commercialsystem.autotimer.status-on-nomsg', 'Aucun message n\'est envoyé lorsqu\'une publicité automatique démarre');
$.lang.register('commercialsystem.autotimer.msg-set', 'Modification du message envoyé lorsqu\'une publicité automatique commence à : $1');
$.lang.register('commercialsystem.autotimer.msg-del', 'N\'envoie plus de message lorsqu\'une publicité automatique démarre');