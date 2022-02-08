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

$.lang.register('discord.customcommands.addcom.usage', 'Utilisation : !addcom [commande] [réponse]');
$.lang.register('discord.customcommands.addcom.err', 'Cette commande existe déjà.');
$.lang.register('discord.customcommands.addcom.success', 'La commande !$1 a été ajoutée !');
$.lang.register('discord.customcommands.editcom.usage', 'Utilisation : !editcom [commande] [réponse]');
$.lang.register('discord.customcommands.editcom.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.editcom.success', 'La commande !$1 a été modifiée !');
$.lang.register('discord.customcommands.delcom.usage', 'Utilisation : !delcom [commande] [réponse]');
$.lang.register('discord.customcommands.delcom.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.delcom.success', 'La commande !$1 a été supprimée !');
$.lang.register('discord.customcommands.permcom.usage', 'Utilisation : !permcom [commande] [autorisation]');
$.lang.register('discord.customcommands.permcom.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.permcom.syntax.error', 'Usage: !permcom [command] [permission] - Soit 0 qui correspond à tout le monde, soit 1 aux administrateurs.');
$.lang.register('discord.customcommands.permcom.success', 'L\'autorisation pour la commande !$1 a été définie sur l\'autorisation $2');
$.lang.register('discord.customcommands.coolcom.usage', 'Utilisation : !coolcom [commande] [temps en secondes]');
$.lang.register('discord.customcommands.coolcom.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.coolcom.removed', 'Le temps de recharge pour la commande !$1 a été supprimé.');
$.lang.register('discord.customcommands.coolcom.success', 'Le temps de recharge pour la commande !$1 a été défini sur $2 secondes.');
$.lang.register('discord.customcommands.channelcom.usage', 'Utilisation : !channelcom [commande] [channel / --global / --list] - Séparez les canaux par des virgules (sans espaces) pour plusieurs.') ;
$.lang.register('discord.customcommands.channelcom.global', 'La commande !$1 fonctionnera désormais sur tous les canaux.');
$.lang.register('discord.customcommands.channelcom.success', 'La commande !$1 ne fonctionnera désormais que dans les canaux : $2.');
$.lang.register('discord.customcommands.channelcom.404', 'Aucun canal n\'est défini sur cette commande.');
$.lang.register('discord.customcommands.commands', 'Commandes : $1');
$.lang.register('discord.customcommands.bot.commands', 'Commandes du bot : $1');
$.lang.register('discord.customcommands.pricecom.usage', 'Utilisation : !pricecom [commande] [montant]');
$.lang.register('discord.customcommands.pricecom.success', 'Le coût de la commande !$1 a été fixé à $2.');
$.lang.register('discord.customcommands.aliascom.usage', 'Utilisation : !aliascom [alias] [commande]');
$.lang.register('discord.customcommands.aliascom.success', 'La commande !$2 a été aliasée à !$1');
$.lang.register('discord.customcommands.delalias.usage', 'Utilisation : !delalias [alias]');
$.lang.register('discord.customcommands.delalias.success', 'L\'alias !$1 a été supprimé.');
$.lang.register('discord.customcommands.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.alias.404', 'Cet alias n\'existe pas.');
$.lang.register('discord.customcommands.customapi.404', 'La commande !$1 nécessite des paramètres.');
$.lang.register('discord.customcommands.customapijson.err', '!$1: Une erreur s\'est produite lors du traitement de l\'API.');