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

$.lang.register('discord.gambling.need.points', 'Vous n\'avez pas autant de $1.');
$.lang.register('discord.gambling.error.max', 'Vous n\'êtes autorisé à parier qu\'un maximum de 1 $.');
$.lang.register('discord.gambling.error.min', 'Vous n\'êtes autorisé à parier qu\'un minimum de 1 $.');
$.lang.register('discord.gambling.lost', '$1 a roulé 2$ et a perdu 3$. 5$'); // Utilisez $4 pour les points restants à l'utilisateur
$.lang.register('discord.gambling.won', '$1 a roulé 2$ et a gagné 3$! 5$'); // Utilisez $4 pour les points restants à l'utilisateur
$.lang.register('discord.gambling.usage', 'Utilisation : !gamble [montant]');
$.lang.register('discord.gambling.set.max.usage', 'Utilisation : !gambling setmax [montant]');
$.lang.register('discord.gambling.set.max', 'Définir le jeu maximum à 1 $ !');
$.lang.register('discord.gambling.set.min.usage', 'Utilisation : !gambling setmin [montant]');
$.lang.register('discord.gambling.set.min', 'Définir le jeu minimum à 1 $ !');
$.lang.register('discord.gambling.win.range.usage', 'Utilisation : !gambling setwinningrange [range]');
$.lang.register('discord.gambling.win.range', 'Définir la plage de gains de jeu à 1-100 $ et perdre la plage à 1-2 $');
$.lang.register('discord.gambling.percent.usage', 'Utilisation : !gambling setgainpercent [montant]');
$.lang.register('discord.gambling.percent', 'Définir le pourcentage de gain de jeu à 1 $');
$.lang.register('discord.gambling.main.usage', 'Utilisation : !gambling [setmax / setmin / setwinningrange / setgainpercent]');