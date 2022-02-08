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

$.lang.register('bettingsystem.open.usage', 'Usage: !bet open ["title"] ["option1, option2, etc."] [mise minimum] [mise maximum] [minutes de minuterie] - Le les guillemets sont nécessaires pour le titre et les options.');
$.lang.register('bettingsystem.open.error', 'Vous devez choisir une option gagnante sur le pari précédent avant de pouvoir en ouvrir un nouveau. Utilisez !bet close [option]');
$.lang.register('bettingsystem.open.error.opened', 'Un pari est déjà ouvert.');
$.lang.register('bettingsystem.open.success', 'Un pari est maintenant ouvert ! "$1". Options de pari : "$2". Pariez avec : !pari [montant] [option]');
$.lang.register('bettingsystem.close.error.usage', 'Le pari est maintenant fermé ! En attente du résultat gagnant. Utilisez !bet close [option gagnante]');
$.lang.register('bettingsystem.close.usage', 'Utilisation : !bet close [option gagnante]');
$.lang.register('bettingsystem.close.success', 'Le pari est maintenant fermé ! L\'option gagnante est de 1 $ ! Calcul des résultats et octroi de points aux gagnants !');
$.lang.register('bettingsystem.close.semi.success', 'Le pari est maintenant fermé ! En attente d\'une option gagnante.');
$.lang.register('bettingsystem.close.success.winners', 'Un total de 1$ de joueurs a gagné ce pari ! Il y a eu un total de 2$ gagnés pour les personnes qui ont placé un pari sur 3$ !');
$.lang.register('bettingsystem.save.format', 'Titre : "$1", Options : "$2", Total des points : 3$, Total des entrées : 4$, Points gagnés : 5$.');
$.lang.register('bettingsystem.results', 'Pari actuel : Titre : "$1", Options : "$2", Total des points : 3$, Total des entrées : 4$');
$.lang.register('bettingsystem.global.usage', 'Utilisation : !bet [open / close / save / saveformat / lookup / results / togglemessages / gain]');
$.lang.register('bettingsystem.bet.usage', 'Utilisation : !bet [montant] [option]');
$.lang.register('bettingsystem.bet.error.neg', 'Vous ne pouvez pas parier moins 1 $ !');
$.lang.register('bettingsystem.bet.error.min', 'Le pari minimum que vous pouvez placer est de 1 $.');
$.lang.register('bettingsystem.bet.error.max', 'Le pari maximum que vous pouvez placer est de 1 $.');
$.lang.register('bettingsystem.bet.error.points', 'Vous n\'avez pas assez de 1 $ pour parier autant.');
$.lang.register('bettingsystem.bet.betplaced', 'Vous avez déjà misé 1$ sur 2$.');
$.lang.register('bettingsystem.bet.null', 'Ce n\'est pas une option de pari valide.');
$.lang.register('bettingsystem.toggle.save', 'Les résultats des paris seront enregistrés de 1 $ après la clôture d\'un pari.');
$.lang.register('bettingsystem.warning.messages', 'Les messages d\'avertissement $1 seront affichés dans le chat.');
$.lang.register('bettingsystem.saveformat.usage', 'Utilisation : !bet saveformat [format de date] - La valeur par défaut est yy.M.dd');
$.lang.register('bettingsystem.saveformat.set', 'Le format de sauvegarde a été changé en $1.');
$.lang.register('bettingsystem.gain.usage', 'Utilisation : !bet gain [percent]');
$.lang.register('bettingsystem.gain.set', 'Le pourcentage de gain a été fixé à 1 $');
$.lang.register('bettingsystem.lookup.usage', 'Utilisation : !bet lookup [$1] - utilisez _# après la date si vous avez fait plusieurs paris ce jour-là.');
$.lang.register('bettingsystem.lookup.show', 'Mise à partir de [$1] $2');
$.lang.register('bettingsystem.lookup.null', 'Aucun pari n\'a été fait ce jour-là.');
$.lang.register('bettingsystem.now', 'now');
$.lang.register('bettingsystem.not', 'not');