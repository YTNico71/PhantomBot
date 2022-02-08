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

$.lang.register('pollsystem.vote.nopoll', 'Aucun sondage n\'est actuellement en cours.');
$.lang.register('pollsystem.vote.already', 'Vous avez déjà voté !');
$.lang.register('pollsystem.vote.invalid', '"$1" n\'est pas une option valide !');
$.lang.register('pollsystem.vote.success', 'Vous avez voté "$1" sur "$2".');
$.lang.register('pollsystem.poll.started', '$1 a lancé un sondage pendant $2 secondes (minimum de votes : $3) : $4 ! Utilisez " !vote [option]" pour voter. Options : $5');
$.lang.register('pollsystem.poll.started.nottime', '$1 a lancé un sondage (minimum de votes : $2) : $3 ! Utilisez " !vote [option]" pour voter. Options : $4');
$.lang.register('pollsystem.poll.running', 'Il y a un sondage en cours pour "$1". Utilisez "!vote [option]" pour voter. Les options sont "$2".');
$.lang.register('pollsystem.poll.usage', 'Utilisation : !poll [ouvrir | résultats | fermer]');
$.lang.register('pollsystem.results.lastpoll', '[Dernier sondage] - [Question : "$1"] - [Total des votes : $2] - [Résultat : "$3"] - [Options : "$4"] [Voix : 5 $]');
$.lang.register('pollsystem.results.running', 'Un sondage est en cours !');
$.lang.register('pollsystem.results.404', 'Il n\'y a pas de dernier sondage pour récupérer les résultats !');
$.lang.register('pollsystem.open.usage', 'Utilisation : !poll open "question" "option1, option2, ..." [secondes] [min votes]. Si secondes est 0, la valeur par défaut est 60.' );
$.lang.register('pollsystem.open.moreoptions', 'Plusieurs options sont requises pour un sondage.');
$.lang.register('pollsystem.runpoll.novotes', 'Le sondage sur "$1" est terminé ! Il n\'y a pas assez de votes !');
$.lang.register('pollsystem.runpoll.winner', 'Le sondage sur "$1" est terminé ! Le gagnant est "$2" !');
$.lang.register('pollsystem.runpoll.tie', 'Le sondage sur "$1" s\'est terminé sur une égalité ! Vérifiez !les résultats du sondage.');
$.lang.register('pollsystem.runpoll.started', 'Le sondage a commencé ! Utilisez " !poll close" pour terminer le sondage manuellement');
$.lang.register('pollsystem.close.nopoll', 'Aucun sondage n\'est actuellement en cours.');