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

$.lang.register('customcommands.add.error', 'Cette commande existe déjà');
$.lang.register('customcommands.add.success', 'La commande !$1 a été créée !');
$.lang.register('customcommands.add.usage', 'Utilisation : !addcom (commande) (message)');
$.lang.register('customcommands.add.commandtag.notfirst', 'La balise (commande) doit être au début d\'une commande personnalisée lorsqu\'elle est utilisée.');
$.lang.register('customcommands.add.commandtag.invalid', 'La commande de balise (commande) n\'existe pas : $1');
$.lang.register('customcommands.alias.delete.error.alias.404', 'L\'alias n\'existe pas : !$1');
$.lang.register('customcommands.alias.delete.success', 'L\'alias !$1 a été supprimé avec succès !');
$.lang.register('customcommands.alias.delete.usage', 'Utilisation : !delalias (nom d\'alias)');
$.lang.register('customcommands.alias.error', 'Un alias existe déjà pour !$1. Supprimez-le d\'abord.');
$.lang.register('customcommands.alias.error.target404', 'La commande cible n\'existe pas !');
$.lang.register('customcommands.alias.error.exists', 'La commande que vous souhaitez utiliser comme alias existe déjà.');
$.lang.register('customcommands.add.disabled', 'Cette commande est actuellement désactivée. Réactivez la commande ou supprimez-la pour ajouter une nouvelle commande portant ce nom.');
$.lang.register('customcommands.alias.success', 'La commande !$1 a été associée avec succès à !$2');
$.lang.register('customcommands.alias.usage', 'Utilisation : !aliascom (nom d\'alias) (commande existante) [paramètres facultatifs]');
$.lang.register('customcommands.delete.success', 'La commande !$1 a été supprimée !');
$.lang.register('customcommands.delete.usage', 'Utilisation : !delcom (commande)');
$.lang.register('customcommands.edit.404', 'Vous ne pouvez pas écraser une commande par défaut.');
$.lang.register('customcommands.edit.editcom.alias', 'Vous ne pouvez pas modifier un alias, veuillez utiliser ce qui suit : !editcom !$1 $2');
$.lang.register('customcommands.set.perm.error.target404', 'La commande !$1 n\'existe pas !');
$.lang.register('customcommands.set.perm.success', 'Autorisations pour la commande : $1 définies pour le groupe : $2 et supérieur.');
$.lang.register('customcommands.set.perm.unset.success', 'Toutes les autorisations récursives pour la commande : $1 et tous ses alias ont été supprimés.');
$.lang.register('customcommands.set.perm.usage', 'Usage: !permcom (command name) (group id/name). Restreint l\'utilisation d\'une commande aux spectateurs avec un certain niveau d\'autorisation.');
$.lang.register('customcommands.set.perm.404', 'La commande est introuvable : $1');
$.lang.register('customcommands.set.price.error.404', 'Veuillez sélectionner une commande qui existe et qui est disponible pour les non-mods.');
$.lang.register('customcommands.set.price.error.invalid', 'Veuillez entrer un prix valide de 0 ou plus.');
$.lang.register('customcommands.set.price.success', 'Le prix pour !$1 a été fixé à $2 $3.');
$.lang.register('customcommands.set.price.usage', 'Utilisation : !pricecom (commande) [sous-commande] [sous-action] (prix). Facultatif : sous-commande et sous-action');
$.lang.register('customcommands.set.pay.error.404', 'Veuillez sélectionner une commande qui existe et qui est disponible pour les non-mods.');
$.lang.register('customcommands.set.pay.error.invalid', 'Veuillez entrer un paiement valide de 0 ou plus.');
$.lang.register('customcommands.set.pay.success', 'Le paiement pour !$1 a été fixé à $2 $3.');
$.lang.register('customcommands.set.pay.usage', 'Utilisation : !paycom (commande) (prix)');
$.lang.register('customcommands.404.no.commands', 'Il n\'y a pas de commandes personnalisées, ajoutez-en une avec !addcom');
$.lang.register('customcommands.cmds', 'Commandes personnalisées actuelles : $1');
$.lang.register('customcommands.edit.usage', 'Utilisation : !editcom (commande) (message)');
$.lang.register('customcommands.edit.success', 'La commande !$1 a été modifiée !');
$.lang.register('customcommands.token.usage', 'Usage: !tokencom (command) (token) -- AVERTISSEMENT : Cela doit être fait depuis la console du bot ou le panneau Web, si vous l\'exécutez depuis le chat, quiconque regarde le chat peut copier vos informations !');
$.lang.register('customcommands.token.success', 'Token set for command !$1! Assurez-vous de mettre une sous-étiquette (token) dans l\'url customapi pour cette commande à l\'endroit où vous voulez qu\'elle apparaisse');
$.lang.register('customcommands.touser.offline', 'Désolé, mais $1 semble être hors ligne !');
$.lang.register('customcommands.customapi.404', 'La commande !$1 nécessite des paramètres.');
$.lang.register('customcommands.customapijson.err', '!$1:Une erreur s\'est produite lors du traitement de l\'API.');
$.lang.register('customcommands.datetime.format.invalid', 'format de date non reconnu "$1"');
$.lang.register('customcommands.disable.usage', 'Utilisation : !disablecom (commande)');
$.lang.register('customcommands.disable.404', 'Cette commande n\existe pas.');
$.lang.register('customcommands.disable.err', 'Cette commande est déjà désactivée.');
$.lang.register('customcommands.disable.success', 'La commande !$1 a été désactivée.');
$.lang.register('customcommands.enable.usage', 'Utilisation : !enablecom (commande)');
$.lang.register('customcommands.enable.404', 'Cette commande n\'existe pas.');
$.lang.register('customcommands.enable.err', 'Cette commande n\'est pas désactivée.');
$.lang.register('customcommands.enable.success', 'La commande !$1 a été réactivée.');
$.lang.register('customcommands.hide.usage', 'Utilisation : !hidecom (commande)');
$.lang.register('customcommands.hide.404', 'Cette commande n\'existe pas.');
$.lang.register('customcommands.hide.err', 'Cette commande est déjà masquée.');
$.lang.register('customcommands.hide.success', 'La commande !$1 est maintenant masquée.');
$.lang.register('customcommands.show.usage', 'Utilisation : !showcom (commande)');
$.lang.register('customcommands.show.404', 'Cette commande n_\'existe pas.');
$.lang.register('customcommands.show.err', 'Cette commande n\'est pas cachée.');
$.lang.register('customcommands.show.success', 'La commande !$1 n\'est plus masquée.');
$.lang.register('customcommands.keyword.404', 'mot clé inconnu "$1"');
$.lang.register('customcommands.lasttip.404', 'Aucun don trouvé.');
$.lang.register('customcommands.playsound.404', 'hook audio inconnu "$1"');
$.lang.register('customcommands.file.404', 'fichier introuvable : $1');
$.lang.register('customcommands.reset.usage', 'Utilisation : !resetcom (commande) (nombre). Si non (nombre), alors remise à 0.');
$.lang.register('customcommands.reset.success', 'Le compteur pour !$1 a été réinitialisé.');
$.lang.register('customcommands.reset.change.fail', 'Valeur de compteur invalide : $1');
$.lang.register('customcommands.reset.change.success', 'Le compteur pour !$1 a été mis à $2.');
$.lang.register('customcommands.external.add.usage', 'Utilisation : !addextcom (commande)');
$.lang.register('customcommands.external.add.success', 'La commande externe !$1 a été créée !');
$.lang.register('customcommands.external.add.error', 'Cette commande existe déjà');
$.lang.register('customcommands.external.delete.usage', 'Utilisation : !delextcom (commande)');
$.lang.register('customcommands.external.delete.success', 'La commande externe !$1 a été supprimée !');
$.lang.register('customcommands.external.delete.error', 'Cette commande externe existe déjà');
$.lang.register('customcommands.teamapi.team.404', 'vous ne faites pas partie de l\'équipe "$1"');
$.lang.register('customcommands.teamapi.member.404', 'le membre "$1" n\'est pas dans l\'équipe "$2"');
$.lang.register('customcommands.botcommands', 'Commandes : $1');
$.lang.register('customcommands.botcommands.error', 'Fournir un numéro pour trouver une page.');
$.lang.register('customcommands.botcommands.total', 'Total pages : $1 [Voir aussi : https://phantombot.github.io/PhantomBot/guides/#guide=content/commands/commands]');