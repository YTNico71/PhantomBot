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

$.lang.register('ytplayer.client.404', 'Le lecteur YouTube n\'est actuellement pas utilisé et les demandes de chansons sont désactivées !');
$.lang.register('ytplayer.playlist.404', 'Impossible de trouver la liste de lecture [$1]');
$.lang.register('ytplayer.announce.nextsong', '[\u266B] Lecture en cours [$1] Demandeur : $2');

$.lang.register('ytplayer.console.client.connected', '[\u266B] Le lecteur YouTube est connecté ! [\u266B]');
$.lang.register('ytplayer.console.client.disconnected', '[\u266B] Le lecteur YouTube est déconnecté ! [\u266B]');

$.lang.register('ytplayer.songrequests.enabled', '[\u266B] Les demandes de chansons sont activées ! [\u266B]');
$.lang.register('ytplayer.songrequests.disabled', '[\u266B] Les demandes de chansons ont été désactivées ! [\u266B]');

$.lang.register('ytplayer.command.volume.get', 'Volume actuel du lecteur YouTube : $1');
$.lang.register('ytplayer.command.volume.set', 'Définir le volume du lecteur YouTube : $1');

$.lang.register('ytplayer.command.ytp.resetdefaultlist.active', 'Ceci doit être exécuté lorsque le lecteur YouTube n\'est pas connecté.');
$.lang.register('ytplayer.command.ytp.resetdefaultlist.success', 'La liste de lecture par défaut a été réinitialisée.');

$.lang.register('ytplayer.command.ytp.togglecconly.enable', 'YouTube Player ne lira que les chansons sous licence Creative Commons.');
$.lang.register('ytplayer.command.ytp.togglecconly.disable', 'YouTube Player lira toutes les chansons sous licence.');

$.lang.register('ytplayer.command.ytp.togglestealrefund.enable', 'Les chansons volées de YouTube Player seront remboursées aux utilisateurs.');
$.lang.register('ytplayer.command.ytp.togglestealrefund.disable', 'Les chansons volées de YouTube Player ne seront PAS remboursées aux utilisateurs.');

$.lang.register('ytplayer.command.ytp.togglerandom.toggled', 'La randomisation de la liste de lecture du lecteur YouTube a été $1');
$.lang.register('ytplayer.command.ytp.toggleannounce.toggled', 'Les annonces du lecteur YouTube ont été $1');

$.lang.register('ytplayer.command.ytp.setrequestmax.usage', 'Utilisation : !ytp setrequestmax [demandes max]');
$.lang.register('ytplayer.command.ytp.setrequestmax.success', 'Nombre maximal de demandes simultanées de chansons définies sur $1');

$.lang.register('ytplayer.command.ytp.setmaxvidlength.usage', 'Utilisation : !ytp setmaxvidlength [secondes]');
$.lang.register('ytplayer.command.ytp.setmaxvidlength.success', 'Longueur maximale de demande de chanson définie sur $1 secondes.');

$.lang.register('ytplayer.command.ytp.setdjname.usage', 'Utilisation : !ytp setdjname [nom]');
$.lang.register('ytplayer.command.ytp.setdjname.success', 'Nom DJ changé en $1');

$.lang.register('ytplayer.command.playlist.usage', 'Utilisation : !playlist [add | delete | loadpl | deletepl | listpl | importpl]');
$.lang.register('ytplayer.command.playlist.add.failed', 'Échec de l\'ajout de la chanson à la liste de lecture : $1');
$.lang.register('ytplayer.command.playlist.add.usage', 'Utilisation : !ytp playlist add [lien youtube]');
$.lang.register('ytplayer.command.playlist.add.success', 'Ajout réussi de [$1] à la playlist [$2]');
$.lang.register('ytplayer.command.playlist.load.success.new', 'Liste de lecture vide chargée [$1]');
$.lang.register('ytplayer.command.playlist.load.success', 'Liste de lecture chargée [$1]');
$.lang.register('ytplayer.command.playlist.load.usage', 'Utilisation : !playlist loadpl [nom de la liste de lecture]');
$.lang.register('ytplayer.command.playlist.delete.isdefault', 'Impossible de supprimer la playlist par défaut !');
$.lang.register('ytplayer.command.playlist.delete.success', 'Liste de lecture supprimée [$1]');
$.lang.register('ytplayer.command.playlist.delete.404', 'La liste de lecture [$1] n\'existe pas !');
$.lang.register('ytplayer.command.playlist.delete.usage', 'Utilisation : !playlist deletepl [nom de la liste de lecture]');
$.lang.register('ytplayer.command.playlist.listpl', 'Listes de lecture : $1');

$.lang.register('ytplayer.command.stealsong.this.success', '$1 a copié la chanson actuelle dans la playlist.');
$.lang.register('ytplayer.command.stealsong.other.success', '$1 a copié la chanson actuelle dans la playlist [$2].');
$.lang.register('ytplayer.command.stealsong.refund', '$1 a reçu un remboursement de 2$$3 sur sa demande de chanson !');
$.lang.register('ytplayer.command.stealsong.duplicate', 'La chanson est déjà dans la playlist !');

$.lang.register('ytplayer.command.jumptosong.failed', 'Impossible de trouver la chanson à la position $1 dans la playlist.');
$.lang.register('ytplayer.command.jumptosong.usage', 'usage : !$1 [numéro de position]');

$.lang.register('ytplayer.command.findsong.failed', 'Impossible de trouver une chanson dont le titre contientns $1');
$.lang.register('ytplayer.command.findsong.usage', 'usage: !$1 [chaîne de recherche]. Recherche les requêtes de chanson s\'il en existe, sinon la liste de lecture actuelle, pour la première correspondance.');

$.lang.register('ytplayer.command.songrequest.usage', 'Utilisation : !songrequest [ID YouTube | Lien YouTube | chaîne de recherche]');
$.lang.register('ytplayer.command.songrequest.success', 'Votre morceau "$1" a été ajouté à la file d\'attente (Position : $2 ID : $3)');
$.lang.register('ytplayer.command.songrequest.failed', 'Échec de l\'ajout de la chanson à la file d\'attente : $1');

$.lang.register('ytplayer.command.previoussong', 'La chanson précédente était [$1] demandée par $2 à partir de $3');
$.lang.register('ytplayer.command.previoussong.404', 'Il n\'y a pas de chanson précédente à signaler');

$.lang.register('ytplayer.command.currentsong', 'La chanson actuelle est [$1] demandée par $2 à partir de $3');
$.lang.register('ytplayer.command.currentsong.404', 'Il n\'y a pas de chanson actuelle');

$.lang.register('ytplayer.command.delrequest.success', 'Removed song with ID [$1] and title of [$2] from song requests.');
$.lang.register('ytplayer.command.delrequest.404', 'Les demandes de chanson n\'ont pas de chanson avec un ID de [$1]');
$.lang.register('ytplayer.command.delrequest.usage', 'Utilisation : !ytp delrequest [ID YouTube]');

$.lang.register('ytplayer.command.ytp.clearcache.warning', 'Cela supprimera tous les ID de lecteur YouTube mis en cache. Si vous êtes sûr, exécutez !ytp clearcache maintenant');
$.lang.register('ytplayer.command.ytp.clearcache.success', 'Le cache de l\'ID du lecteur YouTube a été effacé.');

$.lang.register('ytplayer.command.ytp.usage', 'Utilisation : !ytp [togglecconly | togglesongrequest | toggleannounce | delrequest | pause | volume | togglerandom | setrequestmax | setmaxvidlength | votecount | resetdefaultlist | clearcache]');

$.lang.register('ytplayer.command.wrongsong.success', 'Suppression de la dernière chanson demandée : [$1]');
$.lang.register('ytplayer.command.wrongsong.404', 'Aucune chanson trouvée');
$.lang.register('ytplayer.command.wrongsong.user.success', 'Suppression de la dernière chanson demandée de $1 : [$2]');
$.lang.register('ytplayer.command.wrongsong.usage', 'Usage: !wrongsong [user] [username]. Sans [user] supprime votre dernière requête.');

$.lang.register('ytplayer.command.nextsong.single', 'Chanson suivante : $1');
$.lang.register('ytplayer.command.nextsong.amount', 'Chansons $1 suivantes : $2');
$.lang.register('ytplayer.command.nextsong.range', 'Chansons comprises : $1');
$.lang.register('ytplayer.command.nextsong.usage', 'Usage: !nextsong [numéro d\'index | suivant [n] | liste [xy]. Afficher la chanson suivante, ou le titre au numéro d\'index ou les n chansons suivantes ou un plage avec liste x-y');
$.lang.register('ytplayer.command.nextsong.404', 'La file d\'attente des demandes de chansons est vide.');
$.lang.register('ytplayer.command.nextsong.range.404', 'Aucune chanson trouvée dans cette plage.');

$.lang.register('ytplayer.requestsong.error.maxrequests', 'Dépasse le nombre maximal de demandes simultanées');
$.lang.register('ytplayer.requestsong.error.disabled', 'Les demandes de chansons sont désactivées');
$.lang.register('ytplayer.requestsong.error.yterror', 'Erreur YouTube ($1)');
$.lang.register('ytplayer.requestsong.error.exists', 'La chanson est déjà dans la file d\'attente');
$.lang.register('ytplayer.requestsong.error.maxlength', 'La longueur de la chanson est de 1 $ et dépasse la longueur maximale');

$.lang.register('ytplayer.command.importpl.file.start', 'L\'importation a commencé, veuillez patienter...');
$.lang.register('ytplayer.command.importpl.file.success', 'Import Complete! $1 chansons importées avec succès et échec de l\'importation de $2 chansons de $3 vers la playlist $4');
$.lang.register('ytplayer.command.importpl.file.success.plerror', 'Import Complete! $1 chansons importées avec succès et échec de l\'importation de $2 chansons de $3 vers la playlist $4. $5 playlist(s).');
$.lang.register('ytplayer.command.importpl.file.404', 'Impossible de trouver le fichier $1');
$.lang.register('ytplayer.command.importpl.file.registry404', 'La liste $1 n\'a pas été créée dans la base de données, réessayez.');
$.lang.register('ytplayer.command.importpl.file.usage', 'Utilisation : !playlist importpl file [nom de la liste de lecture] [nom du fichier]');

$.lang.register('ytplayer.blacklisted', 'Vous avez été blacklisté pour l\'utilisation de la fonction songrequest.');
$.lang.register('ytplayer.blacklist.usage', 'Utilisation : !ytp blacklistuser [ajouter/supprimer]');
$.lang.register('ytplayer.blacklist.add.usage', 'Utilisation : !ytp blacklistuser add [nom d\'utilisateur]');
$.lang.register('ytplayer.blacklist.add.success', '$1 a été mis sur liste noire pour avoir utilisé la fonction songrequests.');
$.lang.register('ytplayer.blacklist.remove.usage', 'Utilisation : !ytp blacklistuser remove [nom d\'utilisateur]');
$.lang.register('ytplayer.blacklist.remove.success', '$1 a été retiré de la liste noire de l\'utilisation de la fonction songrequests.');
$.lang.register('ytplayer.blacklist.usage.song', 'Utilisation : !ytp blacklist [ajouter/supprimer]');
$.lang.register('ytplayer.blacklist.add.usage.song', 'Utilisation : !ytp blacklist add [name/keyword]');
$.lang.register('ytplayer.blacklist.add.success.song', 'Song/Keyword : "$1" a été ajouté à la liste noire.');
$.lang.register('ytplayer.blacklist.remove.usage.song', 'Utilisation : !ytp blacklist remove [name]');
$.lang.register('ytplayer.blacklist.remove.success.song', 'Chanson/Mot-clé : "$1" a été retiré de la liste noire.');
$.lang.register('ytplayer.blacklist.404', 'Le nom de la chanson a été mis sur liste noire.');

$.lang.register('ytplayer.command.skip.success', 'Ignorer demandé ! La chanson actuelle sera ignorée dans $1 votes supplémentaires.');
$.lang.register('ytplayer.command.skip.disabled', 'La fonctionnalité de vote est actuellement désactivée.');
$.lang.register('ytplayer.command.skip.failure', 'Vous avez déjà demandé un saut pour la chanson en cours.');
$.lang.register('ytplayer.command.skip.skipping', 'Les votes sont comptés et les utilisateurs ont parlé !!! Sauter la chanson en cours !.');
$.lang.register('ytplayer.command.skip.delay', 'Le saut n\'est pas autorisé pendant un moment, veuillez réessayer plus tard.');
$.lang.register('ytplayer.command.votecount.set', 'Minimum de votes désormais requis pour que les téléspectateurs sautent des chansons : $1');
$.lang.register('ytplayer.command.votecount.negative', 'Le nombre de votes nécessaires doit être positif !');
$.lang.register('ytplayer.command.votecount.usage', '!ytp votecount [montant] --- Paramètre actuel : $1');