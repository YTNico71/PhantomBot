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

$.lang.register('moderation.usage', 'Utilisation : !moderation [liens / majuscules / spam / liste noire / liste blanche / nettoyage / journaux]');
$.lang.register('moderation.links.usage', 'Utilisation : !liens de modération [toggle / permittime]');
$.lang.register('moderation.links.toggle', 'La modération du lien a été $1.');
$.lang.register('moderation.links.permit.time.usage', 'Utilisation : !modération liens permittime [secondes]');
$.lang.register('moderation.links.permit.time.set', 'Le temps d\'autorisation a été fixé à $1 secondes !');
$.lang.register('moderation.caps.usage', 'Utilisation : !caps de modération [toggle / triggerlength / limitpercent]');
$.lang.register('moderation.caps.toggle', 'La modération maximale a été $1.');
$.lang.register('moderation.caps.trigger.usage', 'Utilisation : !moderation caps triggerlength [caractères]');
$.lang.register('moderation.caps.trigger.set', 'La limite de déclenchement des majuscules a été fixée à $1%');
$.lang.register('moderation.caps.limit.usage', 'Utilisation : !moderation caps limitpercent [percent]');
$.lang.register('moderation.caps.limit.set', 'La limite de majuscules a été fixée à $1%');
$.lang.register('moderation.long.message.usage', 'Utilisation : !moderation longmessage [toggle / limit]');
$.lang.register('moderation.long.message.toggle', 'La modération de la longueur du message a été $1.');
$.lang.register('moderation.long.message.limit.usage', 'Utilisation : !moderation longmessage limit [caractères]');
$.lang.register('moderation.long.message.limit.set', 'La limite des messages longs a été fixée à $1 caractères !');
$.lang.register('moderation.spam.usage', 'Utilisation : !moderation spam [toggle / limit]');
$.lang.register('moderation.spam.toggle', 'La modération du spam a été de $1.');
$.lang.register('moderation.spam.limit.usage', 'Utilisation : !moderation limite de spam [messages]');
$.lang.register('moderation.spam.limit.set', 'La limite de spam a été fixée à $1 messages !');
$.lang.register('moderation.blacklist.usage', 'Utilisation : ! liste noire de modération [ajouter/supprimer/lister]');
$.lang.register('moderation.blacklist.add.usage', 'Utilisation : !moderation blacklist add [phrase]');
$.lang.register('moderation.blacklist.add.success', 'La phrase a ajouté le à la liste noire !');
$.lang.register('moderation.blacklist.remove.usage', 'Utilisation : !moderation blacklist remove [phrase]');
$.lang.register('moderation.blacklist.remove.404', 'Cette phrase n\'est pas dans la liste noire.');
$.lang.register('moderation.blacklist.remove.success', 'Phrase retirée de la liste noire !');
$.lang.register('moderation.blacklist.list.404', 'La liste noire est vide.');
$.lang.register('moderation.blacklist.list', 'Liste noire : ```$1```');
$.lang.register('moderation.whitelist.usage', 'Utilisation : !liste blanche de modération [ajouter/supprimer/lister]');
$.lang.register('moderation.whitelist.add.usage', 'Utilisation : !moderation whitelist add [phrase or username#discriminator]');
$.lang.register('moderation.whitelist.add.success', 'Phrase ou nom d\'utilisateur ajouté à la liste blanche !');
$.lang.register('moderation.whitelist.remove.usage', 'Utilisation : !moderation whitelist remove [phrase or username#discriminator]');
$.lang.register('moderation.whitelist.remove.404', 'Cette phrase ou ce nom d\'utilisateur n\'est pas dans la liste blanche.');
$.lang.register('moderation.whitelist.remove.success', 'Phrase ou nom d\'utilisateur supprimé de la liste blanche !');
$.lang.register('moderation.whitelist.list.404', 'La liste blanche est vide.');
$.lang.register('moderation.whitelist.list', 'Liste blanche : ```$1```');
$.lang.register('moderation.cleanup.usage', 'Utilisation : ! nettoyage de modération [canal] [montant]');
$.lang.register('moderation.cleanup.err.amount', 'Vous ne pouvez supprimer que 2 à 10000 messages.');
$.lang.register('moderation.cleanup.err.unknownchannel', 'Chaîne inconnue : $1. Essayez l\'auto-complétion de Discord.');
$.lang.register('moderation.cleanup.failed', 'Échec de la suppression des messages en masse : messages en cours de suppression.');
$.lang.register('moderation.cleanup.failed.err', 'Échec de la suppression des messages en masse.');
$.lang.register('moderation.cleanup.done', '$1 messages supprimés !');
$.lang.register('moderation.logs.toggle.usage', 'Usage: !journaux de modération [toggle / channel] - Basculera les journaux de modération Twitch publiés dans Discord.');
$.lang.register('moderation.logs.toggle', 'Les journaux de modération Twitch ont été $1. **[Nécessite un redémarrage du bot]**');
$.lang.register('moderation.logs.channel.usage', 'Usage: !moderation logs channel [nom du canal]');
$.lang.register('moderation.logs.channel.set', 'Les annonces de journal de modération Twitch seront désormais faites dans le canal $1');