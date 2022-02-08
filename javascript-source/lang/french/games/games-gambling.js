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

$.lang.register('gambling.need.points', 'Vous n\'avez pas autant de $1.');
$.lang.register('gambling.error.max', 'Vous n\'êtes autorisé à parier qu\'un montant maximum de 1 $.');
$.lang.register('gambling.error.min', 'Vous n\'êtes autorisé à parier qu\'un montant minimum de 1 $.');
$.lang.register('gambling.lost', '$1 a roulé 2$ et a perdu 3$. 5$'); // Utilisez $4 pour les points que l'utilisateur a renommés
$.lang.register('gambling.won', '$1 a roulé 2$ et a gagné 3$! 5$'); // Utilisez $4 pour les points que l'utilisateur a renommés
$.lang.register('gambling.usage', 'Utilisation : !gamble [montant]');
$.lang.register('gambling.set.max.usage', 'Utilisation : !gamblesetmax [montant]');
$.lang.register('gambling.set.max', 'Définissez le montant maximum de jeu à 1 $ !');
$.lang.register('gambling.set.min.usage', 'Utilisation : !gamblesetmin [montant]');
$.lang.register('gambling.set.min', 'Définir le jeu minimum à 1 $ !');
$.lang.register('gambling.win.range.usage', 'Utilisation : !gamblesetwinningrange [range]');
$.lang.register('gambling.win.range', 'Définir la plage de gains au jeu entre 1 et 100 $ et la plage de pertes entre 1 et 2 $');
$.lang.register('gambling.percent.usage', 'Utilisation : !gamblesetgainpercent [montant]');
$.lang.register('gambling.percent', 'Définir le pourcentage de gain de jeu à 1 $');