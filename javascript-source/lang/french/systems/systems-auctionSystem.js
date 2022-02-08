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

$.lang.register('auctionsystem.usage', 'Utilisation : !enchères ouvertes (incréments) (enchère minimum) (minuterie de fermeture automatique)');
$.lang.register('auctionsystem.err.opened', 'Une enchère est déjà en cours.');
$.lang.register('auctionsystem.opened', 'L\'enchère est maintenant ouverte ! Vous pouvez enchérir par incréments d\'au moins 1 $. L\'enchère minimum autorisée est de 2 $ ! Commencez à enchérir avec !bid (montant)');
$.lang.register('auctionsystem.auto.timer.msg', 'L\'enchère se fermera automatiquement dans $1 secondes !');
$.lang.register('auctionsystem.err.closed', 'Il n\'y a pas d\'enchère en cours.');
$.lang.register('auctionsystem.err.no.bids', 'Enchères clôturées ! Personne n\'a placé d\'enchère.');
$.lang.register('auctionsystem.closed', 'Enchères clôturées ! Le gagnant de cette enchère est de 1 $ avec 2 $ !');
$.lang.register('auctionsystem.warn.force', 'L\'enchère est sur le point de se terminer ! Le meilleur enchérisseur actuel est de 1 $ avec 2 $ ! Avons-nous 3 $ ?');
$.lang.register('auctionsystem.warn', 'Le meilleur enchérisseur actuel est de 1 $ avec 2 $ !');
$.lang.register('auctionsystem.bid.usage', 'Utilisation : !bid (montant)');
$.lang.register('auctionsystem.err.bid.minimum', 'Vous ne pouvez pas enchérir en dessous de 1 $ !');
$.lang.register('auctionsystem.err.points', 'Vous n\'avez pas autant de $1 à mettre aux enchères.');
$.lang.register('auctionsystem.err.increments', 'Cette enchère est par incréments de 1 $ !');
$.lang.register('auctionsystem.bid', '$1 vient d\'enchérir 2$ ! Avons-nous 3$ ?');