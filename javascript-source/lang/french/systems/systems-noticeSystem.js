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

$.lang.register('noticesystem.notice-usage', 'Utilisation : !notice [status / add / get / list / remove / edit / toggleid / insert / interval / req / toggle / toggleoffline / toggleshuffle / selectgroup / addgroup / supprimergroupe / renommergroupe]');
$.lang.register('noticesystem.notice-config', 'Paramètres de notification - [Groupe sélectionné : 1 $ / Nombre de groupes : 2 $ / Bascule de notification : 3 $ / Intervalle min. : 4 $ / Intervalle max. : 5 $ / Déclencheur de message : 6 $ / Messages en groupe : 7 $ / Dites un avis dans le chat hors ligne : 8 $ / Messages aléatoires : 9 $]' );
$.lang.register('noticesystem.notice-no-notices', 'Il n\'y a pas de notices dans le groupe $1 - Créez-en une avec !notice add');
$.lang.register('noticesystem.notice-get-usage', 'Usage: !notice get [notice id] - Les identifiants de notification dans le groupe $1 passent de 0 à $2');
$.lang.register('noticesystem.notice-list', 'Avis dans le groupe $1 : $2');
$.lang.register('noticesystem.notice-remove-usage', 'Utilisation : !notice remove [notice id] - Les identifiants de notification dans le groupe $1 passent de 0 à $2');
$.lang.register('noticesystem.notice-edit-usage', 'Usage: !notice edit (notice id) (message) - Les identifiants de notification dans le groupe $1 passent de 0 à $1');
$.lang.register('noticesystem.notice-edit-success', 'Avis modifié dans le groupe $1 !');
$.lang.register('noticesystem.notice-toggleid-usage', 'Usage: !notice toggleid (notice id) - Active/désactive la notification à l\'identifiant spécifié');
$.lang.register('noticesystem.notice-toggleid-success', 'Remarque $1 est maintenant $2');
$.lang.register('noticesystem.notice-remove-success', 'Avis supprimé du groupe $1 !');
$.lang.register('noticesystem.notice-add-usage', 'Utilisation : !notice add [message ou commande]');
$.lang.register('noticesystem.notice-add-success', 'Avis ajouté au groupe $1 à la position $2 !');
$.lang.register('noticesystem.notice-insert-usage', 'Utilisation : !notice notice insert [id] [message or command]');
$.lang.register('noticesystem.notice-insert-nan', 'L\'identifiant de l\'avis doit être un nombre');
$.lang.register('noticesystem.notice-insert-success', 'Avis inséré dans le groupe $2 à la position $1 !');
$.lang.register('noticesystem.notice-interval-usage', 'Utilisation : !intervalle de notification [minutes min] [minutes max] | [minutes fixes]');
$.lang.register('noticesystem.notice-interval-nan', 'Les intervalles de notification doivent être des nombres.');
$.lang.register('noticesystem.notice-interval-too-small', 'Les intervalles de notification doivent être supérieurs à 0,25 minutes.');
$.lang.register('noticesystem.notice-interval-wrong-order', 'L\'intervalle minimum était inférieur ou égal à l\'intervalle maximum.');
$.lang.register('noticesystem.notice-inteval-success', 'Intervalle de notification pour le groupe $1 défini !');
$.lang.register('noticesystem.notice-req-success', 'Message(s) requis entre les avis des groupes $1 set!');
$.lang.register('noticesystem.notice-req-usage', 'Utilisation : !notice req [req messages]');
$.lang.register('noticesystem.notice-req-404', 'Les messages de demande de notification doivent être un nombre et au moins 0.');
$.lang.register('noticesystem.notice-enabled', 'Le groupe de notification $1 a été activé !');
$.lang.register('noticesystem.notice-disabled', 'Le groupe de notification $1 a été désactivé.');
$.lang.register('noticesystem.notice-enabled.offline', 'Les avis du groupe $1 seront désormais envoyés pendant que le flux est hors ligne.');
$.lang.register('noticesystem.notice-disabled.offline', 'Les avis du groupe $1 ne seront plus envoyés lorsque le flux est hors ligne.');
$.lang.register('noticesystem.notice-enabled.shuffle', 'Les avis du groupe $1 seront désormais envoyés dans un ordre aléatoire.');
$.lang.register('noticesystem.notice-disabled.shuffle', 'Les avis du groupe $1 seront désormais envoyés dans l\'ordre de leurs identifiants.');
$.lang.register('noticesystem.notice-no-groups', 'Il n\'y a pas de groupes de notification - Créez-en un avec !notice addgroup.');
$.lang.register('noticesystem.notice-selectgroup-usage', 'Utilisation : !notice selectgroup [identifiant de groupe] - Les identifiants de groupe vont de 0 à $1.');
$.lang.register('noticesystem.notice-selectgroup-404', 'Les identifiants de groupe vont de 0 à $1.');
$.lang.register('noticesystem.notice-selectgroup-success', 'Changement du groupe sélectionné en $1.');
$.lang.register('noticesystem.notice-addgroup-usage', 'Uage: !notice addgroup [nom]');
$.lang.register('noticesystem.notice-addgroup-success', 'Nouveau groupe $1 ajouté et sélectionné.');
$.lang.register('noticesystem.notice-removegroup-usage', 'Utilisation : !notice removegroup [identifiant de groupe] - Les identifiants de groupe vont de 0 à $1.');
$.lang.register('noticesystem.notice-removegroup-404', 'Groupeles identifiants vont de 0 à $1.');
$.lang.register('noticesystem.notice-removegroup-success', 'Le groupe $1 a été supprimé. Groupe actuellement sélectionné : $2.');
$.lang.register('noticesystem.notice-removegroup-success-none-left', 'Le groupe $1 a été supprimé. Aucun groupe restant. Créez-en un avec !notice addgroup.');
$.lang.register('noticesystem.notice-renamegroup-usage', 'Utilisation : !notice renamegroup [identifiant de groupe] [nom] - Les identifiants de groupe vont de 0 à $1.');
$.lang.register('noticesystem.notice-renamegroup-404', 'Les identifiants de groupe vont de 0 à $1.');
$.lang.register('noticesystem.notice-renamegroup-success', 'Le groupe $1 a été renommé en $2.');