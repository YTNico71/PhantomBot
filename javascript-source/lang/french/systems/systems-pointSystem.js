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

$.lang.register('pointsystem.add.all.success', '$1 a été envoyé à tout le monde dans le canal !');
$.lang.register('pointsystem.add.all.usage', 'Utilisation : !points tous [montant]');
$.lang.register('pointsystem.take.all.success', '$1 a été supprimé de tout le monde dans le canal !');
$.lang.register('pointsystem.take.all.usage', 'Utilisation : !points takeall [montant]');
$.lang.register('pointsystem.add.error.negative', 'Vous ne pouvez pas donner $1 négatif.');
$.lang.register('pointsystem.take.error.negative', 'Vous ne pouvez pas prendre $1 négatif.');
$.lang.register('pointsystem.add.success', 'Envoyé 1 $ à 2 $. Le nouveau solde est de 3 $.');
$.lang.register('pointsystem.add.usage', 'Utilisation : !points add [nom] [montant]');
$.lang.register('pointsystem.user.success', ' $1 a actuellement $2.');
$.lang.register('pointsystem.makeitrain.error.invalid', 'Désolé, mais il n\'est pas possible de faire pleuvoir $1 pour le moment.');
$.lang.register('pointsystem.makeitrain.error.needpoints', 'Vous ne pouvez pas vous permettre de faire pleuvoir $1.');
$.lang.register('pointsystem.makeitrain.error.negative', 'Vous ne pouvez pas faire pleuvoir $1 négatif.');
$.lang.register('pointsystem.makeitrain.success', 'Une pluie torrentielle arrive ! Grâce à $1, tout le monde reçoit un bonus pouvant aller jusqu\'à 2$3$ !');
$.lang.register('pointsystem.makeitrain.usage', 'Utilisation : !makeitrain [montant]');
$.lang.register('pointsystem.set.bonus.error.negative', 'Vous ne pouvez pas définir le bonus par niveau de groupe sur moins 1 $.');
$.lang.register('pointsystem.set.bonus.success', 'Définir le bonus de 1 $ à 2 $ par niveau de groupe.');
$.lang.register('pointsystem.set.bonus.usage', 'Utilisation : ! bonus de points [montant]');
$.lang.register('pointsystem.set.gain.error.negative', 'Vous ne pouvez pas définir le montant de 1 $ gagné sur un nombre négatif.');
$.lang.register('pointsystem.set.gain.offline.success', 'Définir les gains de 1 $ à 2 $ toutes les 3 $ minute(s) pendant que le flux est hors ligne.');
$.lang.register('pointsystem.set.gain.offline.usage', 'Utilisation : !points setofflinegain [montant], si vous avez défini !permissionpoints, cela remplacera ceci !');
$.lang.register('pointsystem.set.gain.success', 'Définir les gains de 1 $ à 2 $ toutes les 3 $ minute(s) pendant que le flux est en ligne.');
$.lang.register('pointsystem.set.gain.usage', 'Usage : !points setgain [montant], si vous avez défini !permissionpoints, cela remplacera cela !');
$.lang.register('pointsystem.set.interval.error.negative', 'Vous ne pouvez pas définir l\'intervalle de paiement de 1 $ sur des minutes négatives.');
$.lang.register('pointsystem.set.interval.offline.success', 'Définit l\'intervalle de paiement de 1 $ à 2 $ minute(s) lorsque le flux est hors ligne.');
$.lang.register('pointsystem.set.interval.offline.usage', 'Utilisation : !points setofflineinterval [montant]');
$.lang.register('pointsystem.set.interval.success', 'Définit l\'intervalle de paiement de 1 $ à 2 $ minute(s) lorsque le flux est en ligne.');
$.lang.register('pointsystem.set.interval.usage', 'Utilisation : !points setinterval [montant]');
$.lang.register('pointsystem.set.name.both.success', 'Le nom des points a été modifié de "$1" à "$2". Définissez le nom d\'un seul $2 à l\'aide de !points setname single [ Nom].');
$.lang.register('pointsystem.set.name.multiple.success', 'Le nom de plusieurs points a été modifié avec succès de "$1" à "$2". Pour définir le nom d\'un seul $2, utilisez !points setname single [nom] .');
$.lang.register('pointsystem.set.name.single.success', 'Le nom d\'un seul point a été modifié avec succès de "$1" à "$2". Pour définir le nom de plusieurs $2, utilisez !points setname multiple [nom] .');
$.lang.register('pointsystem.set.name.usage', 'Usage: !points setname [single | multiple | delete] [name]. Définit le nom unique ou multiple des points de discussion ou supprime les valeurs.');
$.lang.register('pointsystem.set.name.delete', 'Suppression des noms de points personnalisés.');
$.lang.register('pointsystem.set.name.duplicate', 'C\'est le nom actuel de la commande de point personnalisée.');
$.lang.register('pointsystem.setbalance.error.negative', 'Vous ne pouvez pas définir un solde négatif de 1 $.');
$.lang.register('pointsystem.setbalance.success', 'Définir le solde de 1 $ de 2 $ à 3 $.');
$.lang.register('pointsystem.setbalance.usage', 'Utilisation : !points set [nom] [montant]');
$.lang.register('pointsystem.take.error.toomuch', 'Vous ne pouvez pas prendre plus que ce que $1 a dans $2.');
$.lang.register('pointsystem.take.success', 'A pris 1 $ à 2 $. Le nouveau solde est de 3 $.');
$.lang.register('pointsystem.take.usage', 'Usage : !points prennent [nom] [montant]' );
$.lang.register('pointsystem.gift.usage', 'Utilisation : !gift [utilisateur] [montant]');
$.lang.register('pointsystem.gift.shortpoints', 'Désolé ! Vous n\'avez pas assez de points pour envoyer ce cadeau !');
$.lang.register('pointsystem.gift.404', 'Désolé ! Cet utilisateur ne semble pas encore être enregistré sur le chat !');
$.lang.register('pointsystem.gift.success', '$1 a envoyé un cadeau de 2$ à 3$.');
$.lang.register('pointsystem.usage.invalid', 'Option invalide passée à la commande $1');
$.lang.register('pointsystem.err.negative', 'Vous ne pouvez pas offrir moins de 0 $1');
$.lang.register('pointsystem.err.penalty', 'Utilisation : !penalty [utilisateur] [temps en minutes]');
$.lang.register('pointsystem.penalty.set', 'Utilisateur : $1 ne gagnera pas de points pour les $2 suivants.');
$.lang.register('pointsystem.reset.all', 'Tous les points ont été supprimés.');
$.lang.register('pointsystem.message.usage', 'Utilisation : !points setmessage [message] - Balises : (userprefix), (user), (points), (pointsname), (pointsstring), (time), et (rang)');
$.lang.register('pointsystem.message.set', 'Message de points défini sur : $1');
$.lang.register('pointsystem.active.bonus.usage', 'Utilisation : !points setactivebonus [montant]');
$.lang.register('pointsystem.active.bonus.set', 'Bonus actif fixé à 1 $');
$.lang.register('pointsystem.bonus.usage', 'Utilisation : !points bonus [montant] [pour le temps]');
$.lang.register('pointsystem.bonus.say', 'Pour le prochain 1 $, je donnerai 2 $ de plus à 3 $ à chaque paiement !');