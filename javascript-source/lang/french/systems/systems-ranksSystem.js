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

$.lang.register('ranks.edit.usage', 'Utilisation : !rankedit [add [heures] [rankname] | del [heures] | custom [user] [rankname] | customdel [user] | settime [heures] | setcost [points]]');
$.lang.register('ranks.settime.usage', 'Utilisation : !rankedit settime [heures]');
$.lang.register('ranks.settime.success', 'Définir l\'heure à laquelle les utilisateurs doivent créer un classement personnalisé à $1 heures.');
$.lang.register('ranks.setcost.usage', 'Utilisation : !rankedit setcost [$1]');
$.lang.register('ranks.setcost.success', 'Définir le coût pour les utilisateurs de créer un classement personnalisé à $1 $2.');
$.lang.register('ranks.custom.usage', 'Utilisation : !rankedit custom [user] [rankname]');
$.lang.register('ranks.custom.404', 'Impossible de trouver l\'utilisateur pour donner un rang personnalisé : $1');
$.lang.register('ranks.custom.success', '$1 a reçu un classement personnalisé de : $2');
$.lang.register('ranks.customdel.usage', 'Utilisation : !rankedit customdel [utilisateur]');
$.lang.register('ranks.customdel.404', 'Un rang personnalisé n\'existe pas pour $1');
$.lang.register('ranks.customdel.success', 'Suppression du classement personnalisé de $1');
$.lang.register('ranks.add.usage', 'Utilisation : !rankedit add [hour] [rankname]');
$.lang.register('ranks.add.success-new', 'Ajout d\'un nouveau rang pour l\'heure $1 avec le nom : $2');
$.lang.register('ranks.add.success-update', 'Rang mis à jour pour l\'heure $1 avec le nom : $2');
$.lang.register('ranks.del.usage', 'Utilisation : !rankedit del [heure]');
$.lang.register('ranks.del.404', 'Impossible de trouver un rang avec une valeur d\'heures de 1$');
$.lang.register('ranks.del.success', 'Rang supprimé avec une valeur d\'heures de 1$');
$.lang.register('ranks.rank.404', 'Aucun classement n\'est défini !');
$.lang.register('ranks.rank.success', '$1 a atteint le rang $2 et est à 3$ heures du rang $4 !');
$.lang.register('ranks.rank.norank.success', '$1 n\'a pas encore de rang mais est à 2$ heures du rang $3!');
$.lang.register('ranks.rank.maxsuccess', '$1 a atteint le rang maximum de $2 !');
$.lang.register('ranks.rank.customsuccess', '$1 a été désigné au rang de $2 !');
$.lang.register('ranks.set.usage', 'Usage : !rank set [rankname] Nécessite 1 $ d\'heures de chat et 2 $ de 3 $.');
$.lang.register('ranks.set.usage.nopoints', 'Utilisation : !rank set [rankname] Nécessite 1 $ d\'heures de chat.');
$.lang.register('ranks.set.failure', 'Soit pas assez d\'heures (1 $) soit 2 $ (3 $) pour définir le classement !');
$.lang.register('ranks.set.failure.nopoints', 'Pas assez d\'heures ($1) pour définir le rang !');
$.lang.register('ranks.set.success', 'Définir le rang sur : $1');
$.lang.register('ranks.delself.404', 'Vous n\'avez pas de classement personnalisé.');
$.lang.register('ranks.delself.success', 'Suppression de votre classement personnalisé.');