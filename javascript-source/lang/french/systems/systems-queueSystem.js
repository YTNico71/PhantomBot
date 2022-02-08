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

$.lang.register('queuesystem.open.error.opened', 'Une file d\'attente est déjà ouverte.');
$.lang.register('queuesystem.open.error.usage', 'Usage: !queue open [size] [title] - Mettez la taille à zéro si vous voulez qu\'elle soit illimitée.');
$.lang.register('queuesystem.open.usage', 'Utilisation : !queue open [size] [title]');
$.lang.register('queuesystem.open.error.clear', 'La file d\'attente précédente n\'a pas été effacée. Utilisez "!queue clear" pour l\'effacer.');
$.lang.register('queuesystem.open.normal', 'La file d\'attente est maintenant ouverte ! Utilisez !joinqueue [gamertag facultatif] pour la rejoindre ! $1');
$.lang.register('queuesystem.open.limit', 'La file d\'attente est maintenant ouverte ! Le nombre maximum d\'entrées est de $1 utilisateurs. Utilisez !joinqueue [facultatif gamertag] pour la rejoindre ! $2');
$.lang.register('queuesystem.close.error', 'Aucune file d\'attente n\'est ouverte.');
$.lang.register('queuesystem.close.success', 'La file d\'attente est maintenant fermée !');
$.lang.register('queuesystem.clear.success', 'La file d\'attente a été réinitialisée et effacée.');
$.lang.register('queuesystem.join.error.joined', 'Vous êtes déjà dans la file d\'attente.');
$.lang.register('queuesystem.join.error.full', 'La file d\'attente est actuellement pleine.');
$.lang.register('queuesystem.remove.usage', 'Utilisation : !queue remove [username]');
$.lang.register('queuesystem.remove.404', 'Cet utilisateur ne semble pas être dans la file d\'attente.');
$.lang.register('queuesystem.remove.removed', 'L\'utilisateur $1 a été supprimé de la file d\'attente !');
$.lang.register('queuesystem.info.success', 'Informations actuelles sur la file d\'attente : Titre : [$1], Utilisateurs : [$2], Taille maximale : [$3], Ouvert à : [$4]');
$.lang.register('queuesystem.time.info', '(il y a $1)');
$.lang.register('queuesystem.position.self', 'Vous êtes actuellement en position #$1 dans la file d\'attente et vous avez rejoint à : $2');
$.lang.register('queuesystem.position.self.error', 'Vous n\'êtes actuellement pas dans la file d\'attente.');
$.lang.register('queuesystem.position.other', '$1 est actuellement en position #$2 dans la file d\'attente et rejoint à : $3');
$.lang.register('queuesystem.position.other.error', '$1 n\'est actuellement pas dans la file d\'attente.');
$.lang.register('queuesystem.queue.list', 'Liste de file d\'attente actuelle : $1.');
$.lang.register('queuesystem.queue.list.limited', 'Liste actuelle des files d\'attente : $1. (anti-spam +$2)');
$.lang.register('queuesystem.queue.list.empty', 'Aucun utilisateur n\'est dans la file d\'attente.');
$.lang.register('queuesystem.queue.next', 'Les prochains utilisateurs à sélectionner sont : $1.');
$.lang.register('queuesystem.gamertag', '(GamerTag : $1)');
$.lang.register('queuesystem.pick', 'Utilisateurs sélectionnés : $1.');
$.lang.register('queuesystem.usage', 'Utilisation : !queue [open / close / clear / next / list / pick / random / position / info]');